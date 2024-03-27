import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Pages = () => {
    const [reads, setReads] = useState([]);  

    useEffect(() => {
        const getDefaultRead = JSON.parse(localStorage.getItem('reads')) || [];
        setReads(getDefaultRead);
    }, []);

    const bookData = reads.map(read => ({ name: read.bookName, uv: read.totalPages }));

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']; // Define more colors if needed

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = ({ fill, x, y, width, height }) => {
        return <path d={getPath(x, y, width, height)} stroke={fill} fill={fill} />;
    };

    return (
        <div>
            <BarChart
                width={900}
                height={700}
                data={bookData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Pages;
