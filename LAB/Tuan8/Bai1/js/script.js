$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        let valid = true;

        // Xóa lỗi trước đó
        $('.error').text('');

        // Kiểm tra tên đăng nhập
        const usernamePattern = /^[A-Za-z][A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]*$/;
        const username = $('#txtDN').val();
        if (!usernamePattern.test(username)) {
            $('#usernameError').text('Tên đăng nhập không hợp lệ.');
            valid = false;
        }

        // Kiểm tra mật khẩu
        const password = $('#txtMK').val();
        const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordPattern.test(password)) {
            $('#passwordError').text('Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 số, và 1 ký tự đặc biệt.');
            valid = false;
        }

        // Kiểm tra nhập lại mật khẩu
        const confirmPassword = $('#txtNLMK').val();
        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Mật khẩu không khớp.');
            valid = false;
        }

        // Kiểm tra họ tên
        const namePattern = /^[A-ZĐ][a-zđ]+(\s[A-ZĐ][a-zđ]+)+$/; // Ít nhất một họ và tên
        const name = $('#txtName').val();
        if (!namePattern.test(name)) {
            $('#nameError').text('Họ và tên phải có ít nhất Họ và Tên, và chữ cái đầu viết hoa.');
            valid = false;
        }

        // Kiểm tra ngày sinh
        const dob = new Date($('#date').val());
        const age = new Date().getFullYear() - dob.getFullYear();
        const monthDiff = new Date().getMonth() - dob.getMonth();
        if (age < 16 || (age === 16 && monthDiff < 0)) {
            $('#dobError').text('Phải trên 16 tuổi.');
            valid = false;
        }

        // Kiểm tra địa chỉ
        const address = $('#txtDC').val();
        if (address.trim() === '') {
            $('#addressError').text('Địa chỉ không được để trống.');
            valid = false;
        }

        // Kiểm tra số điện thoại
        const phonePattern = /^(09|03|07|06|05|04)\d{8}$/;
        const phone = $('#txtDT').val();
        if (!phonePattern.test(phone)) {
            $('#phoneError').text('Số điện thoại không hợp lệ.');
            valid = false;
        }

        // Kiểm tra email
        const email = $('#txtEmail').val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $('#emailError').text('Email không hợp lệ.');
            valid = false;
        }

        if (valid) {
            alert('Đăng ký thành công!');
        }
    });
});