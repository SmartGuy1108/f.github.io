let users = {}; // Store user accounts
let currentUser = null;
let friends = {};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        currentUser = username;
        showChat();
    } else {
        alert("Invalid username or password.");
    }
}

function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!users[username]) {
        users[username] = password;
        alert("Account created! Please log in.");
    } else {
        alert("Username already exists.");
    }
}

function showChat() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("chat-container").style.display = "block";
    loadFriends();
}

function openAddFriend() {
    let friendName = prompt("Enter the username of the friend you want to add:");
    if (friendName && users[friendName] && friendName !== currentUser) {
        friends[friendName] = [];
        alert(`${friendName} added!`);
        loadFriends();
    } else {
        alert("User not found or invalid.");
    }
}

function loadFriends() {
    let friendsList = document.getElementById("friends-list");
    friendsList.innerHTML = "<h3>Your Friends</h3>";
    
    for (let friend in friends) {
        let btn = document.createElement("button");
        btn.innerText = friend;
        btn.onclick = () => openChat(friend);
        friendsList.appendChild(btn);
    }
}

function openChat(friend) {
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = `<h3>Chat with ${friend}</h3>`;
    chatBox.dataset.friend = friend;

    friends[friend].forEach(msg => {
        let msgDiv = document.createElement("div");
        msgDiv.innerText = msg;
        chatBox.appendChild(msgDiv);
    });
}

function sendMessage() {
    let message = document.getElementById("message").value;
    let friend = document.getElementById("chat-box").dataset.friend;

    if (message && friend) {
        friends[friend].push(`${currentUser}: ${message}`);
        openChat(friend);
    }
}
