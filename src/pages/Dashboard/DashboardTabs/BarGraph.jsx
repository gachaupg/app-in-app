import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LineGraph() {
    return (
        
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
                <Line
                    data={{
                        // Name of the variables on x-axis for each point
                        labels: ["25-01-2024", "25-01-2024", "25-01-2024", "25-01-2024", "25-01-2024", "25-01-2024"],
                        datasets: [
                            {
                                // Label for the dataset
                                label: "total count/value",
                                // Data or value of each point
                                data: [10000, 15000, 20000, 25000, 3000, 35000, 40000],
                                // Color of the line
                                backgroundColor: "rgba(0, 255, 255, 0.2)", // Light aqua for line fill
                                borderColor: "aqua", // Aqua for line
                                borderWidth: 1,
                                fill: true, // Fill the area under the line
                            },
                        ],
                    }}
                    // Height of the graph
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                ticks: {
                                    // The y-axis value will start from zero
                                    beginAtZero: true,
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    fontSize: 10,
                                },
                            },
                        },
                    }}
                />
            </div>
    );
}

export default LineGraph;