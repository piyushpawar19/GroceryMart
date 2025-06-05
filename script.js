const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userData = {
            fullname: formData.get('fullname'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
            userType: formData.get('userType')
        };

        if (userData.password !== userData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Registration data:', userData);
        alert('Registration successful!');
        

        if (userData.userType === 'admin') {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'customer-dashboard.html';
        }
    });
}


const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        };


        console.log('Login data:', loginData);
        alert('Login successful!');
        
        window.location.href = 'customer-dashboard.html';
    });
}