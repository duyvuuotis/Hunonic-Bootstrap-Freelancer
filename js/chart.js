const ctx = document.getElementById('smarthomeRevenueChart').getContext('2d');
const smarthomeRevenueChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: 'Doanh thu thị trường Smarthome (Tỷ VND)',
            data: [500, 650, 800], // Replace with actual data
            backgroundColor: '#FF885B',
            borderColor: '#FF885B',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Tỷ VND'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Năm'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});