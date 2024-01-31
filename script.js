let endpoint = './data.json'

async function hitApi() {
    let response = await fetch(endpoint)
    let datas = await response.json()

    return datas
}

hitApi().then(response => {
    const nameEmployee = response.data.map(nameEmployees => {
        return nameEmployees.employee_name
    });

    const employeeAge = response.data.map(employeeAges => {
        return employeeAges.employee_age
    })

    datas.data.labels = nameEmployee;
    datas.data.datasets[0].data = employeeAge

})






const ctx = document.getElementById('myChart');
const datas = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["a", "b", "c", "d", "f"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
        }],

    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

