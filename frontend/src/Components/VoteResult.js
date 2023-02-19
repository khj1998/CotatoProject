import React, {useEffect, useState} from 'react';
import axios from "axios";
import {HorizontalBar} from '@reactchartjs/react-chart.js';
const VoteResult = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get("").then(
            (response) => {
                console.log(response.data);

                setResults(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    },[]);

    const totaloffline = results
        .map((item) => item.offline)
        .reduce((prev,curr) => prev + curr, 0);

    const totalonline = results
        .map((item) => item.online)
        .reduce((prev,curr) => prev + curr, 0);

    const data = {
        labels: ['대면', '비대면'],
        datasets: [
            {
                label: '# of Votes',
                data: [totaloffline, totalonline, 0],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return (
        <>
            <HorizontalBar data={data} options={options}/>
        </>
    );
};

export default VoteResult;