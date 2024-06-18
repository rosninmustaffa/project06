document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Function to update the button color based on input values
    const updateButtonColor = () => {
        if (usernameInput.value === '' && passwordInput.value === '') {
            loginButton.classList.add('red-button');
            loginButton.disabled = true;
        } else {
            loginButton.classList.remove('red-button');
            loginButton.disabled = false;
        }
    };

    // Initially set the button color
    updateButtonColor();

    // Add event listeners to input fields
    usernameInput.addEventListener('keyup', updateButtonColor);
    passwordInput.addEventListener('keyup', updateButtonColor);

    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const result = await response.json();
            if (result.success) {
                window.location.href = 'success.html';
            } else {
                window.location.href = 'failure.html';
            }
        } catch (error) {
            console.error('Error during login request:', error);
            document.getElementById('status').textContent = 'An error occurred during login.';
        }
    });
});
