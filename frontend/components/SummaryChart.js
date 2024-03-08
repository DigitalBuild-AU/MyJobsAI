import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SummaryChart = ({ summary }) => {
    const data = [
        { name: 'Applications Sent', value: summary.applicationsSent },
        { name: 'Interviews Scheduled', value: summary.interviewsScheduled },
        { name: 'Offers Received', value: summary.offersReceived },
    ];

    return (
        <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
};

export default SummaryChart;
