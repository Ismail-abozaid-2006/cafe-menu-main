document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!email || !password) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Missing Fields',
                    text: 'Please fill in all fields.',
                    confirmButtonColor: '#6f4e37'
                });
            }

            // Simulate successful login
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome back to Coffee Shop!',
                confirmButtonColor: '#3085d6'
            }).then(() => {
                window.location.href = 'index.html';
            });
        });
    }

    // Handle Sign Up
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (!name || !email || !password || !confirmPassword) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Missing Fields',
                    text: 'Please fill in all fields.',
                    confirmButtonColor: '#6f4e37'
                });
            }

            if (password !== confirmPassword) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Password Mismatch',
                    text: 'Passwords do not match. Please try again.',
                    confirmButtonColor: '#6f4e37'
                });
            }

            // Simulate successful signup
            Swal.fire({
                icon: 'success',
                title: 'Sign Up Successful',
                text: 'Your account has been created!',
                confirmButtonColor: '#3085d6'
            }).then(() => {
                window.location.href = 'index.html';
            });
        });
    }
});
