endpoint = ('./data.json')

//fetching data menggunakan async await
async function hitApi() {
    const responseApi = await fetch(endpoint)
    const datas = await responseApi.json()

    return datas
}

//memanggil function hitApi, karena masih berbentuk promise, maka menggunakan method then agar 
// dapat melihat isi datanya, setelah itu membuat variable bernama employeesname,
// didalam employessname ini mengambil data dari response(berisi data), lalu memaping semua data
// setelah di map, ketika diconsole.log, maka yang tampil akan semua isi property data. 
// lalu mereturn isi property data tadi dan mengambil property employee name
hitApi().then(response => {
    const employeeNames = response.data.map(employeeName => { //mengakses property data
        return employeeName.employee_name //mengakses property employee_name dari property data
    })

    const employeeSalarys = response.data.map(employeeSalary => {
        return employeeSalary.employee_salary
    })

    datas.data.labels = employeeNames //mengubah isi labels
    datas.data.datasets[0].data = employeeSalarys //mengubah isi data pada datasets
})




const ctx = document.getElementById('myChart');
const datas = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["a", "b", "c", "d", "f"],
        datasets: [{
            label: 'Salary',
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