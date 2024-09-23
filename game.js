function signIn() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('currentUser', username);
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('save-slots').style.display = 'block';
    }
}

function loadGame(slot) {
    document.getElementById('save-slots').style.display = 'none';
    document.getElementById('game-content').style.display = 'block';
    // You can add more game loading logic here
}

function attemptSteal() {
    document.getElementById('sneak-status').innerText = "You successfully stole the item.";
}

function sneak() {
    const seen = Math.random() > 0.7;
    if (seen) {
        document.getElementById('sneak-status').innerText = "You've been caught!";
    } else {
        document.getElementById('sneak-status').innerText = "You are sneaking...";
    }
}
