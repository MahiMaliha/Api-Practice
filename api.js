function loadUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => displayUsers(data));
}

function displayUsers(data) {
        const div = document.getElementById('user-container');
        for (const user of data) {
                console.log(user.name);
                const h4 = document.createElement('h4');
                const p = document.createElement('p');
                h4.innerText = `
                        Name: ${user.name}`;
                p.innerText = `
                        Email: ${user.email}
                `;
                div.appendChild(h4);
                div.appendChild(p);
        }
}