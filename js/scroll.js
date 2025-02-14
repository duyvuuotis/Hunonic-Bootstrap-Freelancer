
//     document.addEventListener("DOMContentLoaded", function () {
//         const images = document.querySelectorAll("#smart-devices img");
//         let lastScrollY = window.scrollY;

//         function handleScroll() {
//             const scrollPosition = window.scrollY + window.innerHeight;
//             const triggerPosition = document.querySelector("#smart-devices").offsetTop;

//             if (scrollPosition > triggerPosition) {
//                 images.forEach((img, index) => {
//                     img.classList.add('slide-in'); // Thêm lớp hiển thị
//                     img.classList.remove('slide-out'); // Xóa lớp ẩn
//                 });
//             } else {
//                 images.forEach((img) => {
//                     img.classList.remove('slide-in'); // Xóa lớp hiển thị
//                     img.classList.add('slide-out'); // Thêm lớp ẩn
//                 });
//             }

//             // Theo dõi hướng cuộn
//             if (window.scrollY > lastScrollY) {
//                 // Kéo xuống
//                 images.forEach((img) => {
//                     img.classList.remove('slide-out'); // Xóa lớp ẩn
//                     img.classList.add('slide-in'); // Thêm lớp hiển thị
//                 });
//             } else {
//                 // Kéo lên
//                 images.forEach((img) => {
//                     img.classList.add('slide-out'); // Thêm lớp ẩn
//                     img.classList.remove('slide-in'); // Xóa lớp hiển thị
//                 });
//             }

//             lastScrollY = window.scrollY; // Cập nhật vị trí cuộn cuối
//         }

//         window.addEventListener("scroll", handleScroll);

      
//     // Lắng nghe sự kiện cuộn
// window.onscroll = function() {
//     const scrollToTopButton = document.querySelector('.scroll-to-top');

//     // Kiểm tra vị trí cuộn
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         scrollToTopButton.style.display = "flex"; // Sử dụng flex thay vì block
//     } else {
//         scrollToTopButton.style.display = "none";
//     }
// };

// // Thêm sự kiện click để cuộn lên đầu trang
// document.querySelector('.scroll-to-top').onclick = function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// };


//     });

