function toggleNav(clickedNav) {
    // Loại bỏ lớp nav-item-active từ tất cả các nút
    const navItems = document.querySelectorAll('.nav-item, .nav-item-active');
    navItems.forEach(item => {
        item.classList.remove('nav-item-active');
    });

    // Thêm lớp nav-item-active cho nút được nhấp
    clickedNav.parentElement.classList.add('nav-item-active');
}
function showPopup() {
    var popup = document.getElementById("popup");
    var overlay = document.querySelector(".popup-overlay");
    popup.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; /* Ngăn cuộn trang */
}

function hidePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.querySelector(".popup-overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; /* Cho phép cuộn trang lại */
}


function showMethodPopup() {
    var popup = document.getElementById("method-popup");
    var overlay = document.querySelector(".popup-overlay");
    popup.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; /* Ngăn cuộn trang */
}

function hideMethodPopup() {
    var popup = document.getElementById("method-popup");
    var overlay = document.querySelector(".popup-overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; /* Cho phép cuộn trang lại */
}

function selectPaymentMethod(method) {
    var icon = document.querySelector(".icon-method");
    var text = document.querySelector(".text-method");
    text.innerText  = method; // Điền voucher code vào input
    hideMethodPopup(); // Tắt popup
}
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.voucher-item').forEach(function(item) {
//         item.addEventListener('click', function() {
//             var voucher = this.getAttribute('data-voucher');
//             var discount = this.getAttribute('data-discount');
//             selectVoucher(voucher, discount);
//         });
//     });
// });

// function selectVoucher(voucher, discount) {
//     var input = document.getElementById("voucher-input");
//     input.value = voucher; 
//     input.setAttribute('data-voucher', voucher);
//     input.setAttribute('data-discount', discount);
//     hidePopup(); // Tắt popup
// }
