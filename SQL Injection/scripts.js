document.getElementById('vulnerable-login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('v-username').value;
    const password = document.getElementById('v-password').value;

    fetch('http://localhost:3000/vulnerable-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json()) 
        .then((data) => {
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                document.getElementById('v-message').innerHTML = `<span style="color: red;">${data.message}</span>`;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('v-message').innerHTML = `<span style="color: red;">An error occurred!</span>`;
        });
});

document.getElementById('secure-login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('s-username').value;
    const password = document.getElementById('s-password').value;

    fetch('http://localhost:3000/secure-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json()) 
        .then((data) => {
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                document.getElementById('s-message').innerHTML = `<span style="color: red;">${data.message}</span>`;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('s-message').innerHTML = `<span style="color: red;">An error occurred!</span>`;
        });
});
