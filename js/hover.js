
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        let currentIndex = 0;
        let isAnimating = false; // Biến để kiểm soát hoạt động nháy

        function showNextCard() {
            // Nếu đang nháy, không làm gì
            if (isAnimating) return;

            isAnimating = true; // Đánh dấu là đang nháy

            const card = cards[currentIndex];
            card.classList.add("hover-effect"); // Thêm lớp nháy cho thẻ hiện tại

            // Đặt thời gian để xóa hiệu ứng sau 1 giây
            setTimeout(() => {
                card.classList.remove("hover-effect");
                currentIndex++; // Tăng chỉ số lên 1

                // Nếu đã đi hết các thẻ, quay lại đầu
                if (currentIndex >= cards.length) {
                    currentIndex = 0;
                }

                isAnimating = false; // Đánh dấu là không còn nháy
                showNextCard(); // Gọi lại để hiển thị thẻ tiếp theo
            }, 1000); // Giữ nguyên trong 1 giây
        }

        // Theo dõi sự kiện cuộn
        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY + window.innerHeight; // Vị trí cuộn
            const triggerPosition = document.querySelector(".row").offsetTop; // Vị trí của thẻ row

            // Kiểm tra nếu cuộn đến vị trí của thẻ row và chưa nháy
            if (scrollPosition > triggerPosition && !isAnimating) {
                showNextCard(); // Bắt đầu nháy cho thẻ
            }
        });

            // Lấy đường dẫn URL hiện tại
    const currentLocation = window.location.href;
    // Lấy tất cả các thẻ <a> trong menu điều hướng
    const navLinks = document.querySelectorAll('.nav-link');
console.log('navLinks');
    // Duyệt qua từng link và kiểm tra nếu URL khớp với URL hiện tại
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            // Thêm class 'active' vào link hiện tại
            link.classList.add('active');
        }
    });

    // Lấy button và phần contactOptions
// Lấy button và phần contactOptions
document.getElementById('contactBtn').addEventListener('click', function() {
    var contactOptions = document.getElementById('contactOptions');
    
    // Kiểm tra xem contactOptions đang ẩn hay hiện
    if (contactOptions.style.display === "none") {
        contactOptions.style.display = "block"; // Hiển thị các tùy chọn liên hệ
    } else {
        contactOptions.style.display = "none";  // Ẩn nếu đã hiện
    }
});

// Hiển thị thông báo gọi số điện thoại khi nhấn vào link số điện thoại
document.getElementById('phoneLink').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn điều hướng mặc định
    var phoneMessage = document.getElementById('phoneMessage');
    
    // Hiển thị thông báo gọi số
    phoneMessage.style.display = "block";
});

    });

