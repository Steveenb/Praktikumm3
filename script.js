// Sidebar Toggle
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('change', () => {
    if(navToggle.checked){
        document.querySelector('.sidebar').classList.add('active');
        document.querySelector('.main-content').classList.add('active');
    } else {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.main-content').classList.remove('active');
    }
});

// Bar Chart Initialization
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(221, 47, 110, 0.7)',
            borderColor: 'rgba(221, 47, 110, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Important for responsive charts
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Sales Bar Chart'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0
                }
            }
        }
    }
});

// Donut Chart Initialization
const ctxDonut = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
        labels: ['Direct', 'Referral', 'Social'],
        datasets: [{
            label: 'Income Sources',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(221, 47, 110, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)'
            ],
            borderColor: [
                'rgba(221, 47, 110, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Important for responsive charts
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Income Donut Chart'
            }
        }
    }
});
