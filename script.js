
    const BASE_URL ="https://jsonplaceholder.typicode.com/users/"

    const table = document.getElementById("table")

    async function getUsers(){
        const response = await fetch(BASE_URL).catch(err => alert(err))
        const data = await response.json()

        data.forEach(user => {
            const row = table.insertRow()
            row.insertCell().innerHTML = user.id
            row.insertCell().innerHTML = user.name
            row.insertCell().innerHTML = user.username
            row.insertCell().innerHTML = user.email
            row.insertCell().innerHTML = user.address.street
            row.insertCell().innerHTML = user.phone
            row.insertCell().innerHTML = user.website
            row.insertCell().innerHTML = user.company.name
            
        })

    }

    getUsers()
