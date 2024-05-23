document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('signupForm').classList.remove('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    this.classList.remove('btn-secondary');
    this.classList.add('btn-warning');
    document.getElementById('showLogin').classList.remove('btn-warning');
    document.getElementById('showLogin').classList.add('btn-secondary');
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('d-none');
    document.getElementById('signupForm').classList.add('d-none');
    this.classList.remove('btn-secondary');
    this.classList.add('btn-warning');
    document.getElementById('showSignup').classList.remove('btn-warning');
    document.getElementById('showSignup').classList.add('btn-secondary');
});
