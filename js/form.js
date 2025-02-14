document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("9wqgYAJwfvx_4e7ny"); // Khởi tạo EmailJS
});

// Hiện form khi bấm nút "Đăng Ký Đại Lý"
document.getElementById('showFormBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định
    document.getElementById('registrationForm').style.display = 'block'; // Hiện form
});

// Gửi dữ liệu form qua email
document.getElementById('dealerRegistration').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định

    // Thu thập dữ liệu từ form
    const formData = {
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        businessDetails: document.getElementById('businessDetails').value
    };
    console.log(formData);

    // Gửi dữ liệu qua EmailJS
    emailjs.send('service_b7dwr4n', 'template_x5hdknt', {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        businessDetails: formData.businessDetails
    })
    .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Đăng ký của bạn đã được gửi thành công!');
        document.getElementById('dealerRegistration').reset(); // Xóa form sau khi gửi
        document.getElementById('registrationForm').style.display = 'none'; // Ẩn form sau khi gửi
    }, function(error) {
        console.log('Failed to send email. Error: ', error);
        alert('Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại!');
    });
});
