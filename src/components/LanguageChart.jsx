import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

export default function LanguageChart({ repos }) {
    if (!repos || repos.length === 0) return null;

    const languageCount = {};
    repos.forEach((repo) => {
        if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
        }
    });

    const data = Object.keys(languageCount).map((key) => ({
        name: key,
        value: languageCount[key],
    }));

    return (
        <div className="flex justify-center items-center my-8">
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
}
