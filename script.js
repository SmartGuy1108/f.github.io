let users = [];
let currentUser = null;

function showLogin() {
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('register').classList.add('hidden');
}

function showRegister() {
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        currentUser = user;
        document.getElementById('displayName').innerText = user.username;
        document.getElementById('login').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
    } else {
        alert('Invalid credentials');
    }
}

function register() {
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const username = document.getElementById('username').value;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('User already exists');
    } else {
        const newUser = { email, password, username, friends: [], friendRequests: [] };
        users.push(newUser);
        alert('Registration successful');
        showLogin();
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.innerText = `${currentUser.username}: ${message}`;
        document.getElementById('messages').appendChild(messageElement);
        document.getElementById('message').value = '';
    }
}

function switchTheme() {
    const theme = document.getElementById('themeSelect').value;
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function showAddChat() {
    alert('Add chat functionality');
}

function showEditOptions() {
    document.getElementById('editOptions').classList.toggle('hidden');
}

function sendFriendRequest() {
    alert('Send friend request functionality');
}

function createGroup() {
    alert('Create group functionality');
}

function deleteChat() {
    alert('Delete chat functionality');
}
