document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toSignUp = document.getElementById('toSignUp');
    const toLogin = document.getElementById('toLogin');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    const loginFormElement = document.getElementById('loginFormElement');
    const signupFormElement = document.getElementById('signupFormElement');

    // Switch to Sign Up
    toSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    // Switch to Login
    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Toggle Password Visibility
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = 'Hide';
            } else {
                input.type = 'password';
                btn.textContent = 'Show';
            }
        });
    });

    // Handle Login Submit
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const btn = loginFormElement.querySelector('.auth-btn');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.innerHTML = 'Signing in...';

        setTimeout(() => {
            alert(`Welcome back, ${email}!`);
            btn.disabled = false;
            btn.textContent = originalText;
        }, 1500);
    });

    // Handle Sign Up Submit
    signupFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const btn = signupFormElement.querySelector('.auth-btn');
        const originalText = btn.textContent;

        btn.disabled = true;
        btn.innerHTML = 'Creating account...';

        setTimeout(() => {
            alert(`Welcome aboard, ${name}!`);
            btn.disabled = false;
            btn.textContent = originalText;
            toLogin.click(); // Switch to login after success
        }, 1500);
    });
});
