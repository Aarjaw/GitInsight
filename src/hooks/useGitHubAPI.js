import { useState, useEffect } from "react";
import axios from "axios";

export default function useGitHubAPI(username) {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;
        let cancelled = false;
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const userReq = axios.get(`https://api.github.com/users/${username}`);
                const reposReq = axios.get(
                    `https://api.github.com/users/${username}/repos?per_page=100`
                );

                const [userRes, reposRes] = await Promise.all([userReq, reposReq]);

                if (!cancelled) {
                    setUser(userRes.data);
                    // sort repos by stargazers_count desc
                    const sorted = reposRes.data.sort(
                        (a, b) => b.stargazers_count - a.stargazers_count
                    );
                    setRepos(sorted);
                }
            } catch (err) {
                if (!cancelled) {
                    if (err.response && err.response.status === 404) {
                        setError("User not found");
                    } else {
                        setError("An error occurred while fetching data");
                    }
                    setUser(null);
                    setRepos([]);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [username]);

    return { user, repos, loading, error };
}
