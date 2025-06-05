const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userData = {
            fullname: formData.get('fullname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
            userType: formData.get('userType')
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9][0-9]{9}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

        let messages = [];

        if (!userData.fullname.trim()) {
            messages.push("Full name is required.");
        }

        if (!emailRegex.test(userData.email)) {
            messages.push("Enter a valid email address.");
        }

        if (!phoneRegex.test(userData.phone)) {
            messages.push("Enter a valid 10-digit Indian phone number.");
        }


        if (!passwordRegex.test(userData.password)) {
            messages.push("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        }


        if (userData.password !== userData.confirmPassword) {
            messages.push("Passwords do not match.");
        }

        if (messages.length > 0) {
            alert(messages.join('\n'));
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