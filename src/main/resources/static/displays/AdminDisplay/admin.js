// Kích hoạt sự kiện đóng menu

const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

const user = [
    {
        userAvatar: './assets/images/Huan.png',
        userName: 'Nguyen Van Huan',
        userEmail: 'nguyenhuan200y@gmail.com',
        userPhone: '0382816265',
        userRole: 'Admin'

    }
];
// Kích hoạt sự kiện đóng mở dropdown trên navbar
function activateEvents() {
    // Khi click vào dropdown-toggle
    $(document).on('click', '.dropdown-toggle', function(e) {
        e.preventDefault();
        var dropdownMenu = $(this).next('.dropdown-menu');
        if (dropdownMenu.hasClass('show')) {
            // Nếu dropdown-menu đã mở, không cần làm gì
            dropdownMenu.removeClass('show');
        } else {
            // Nếu dropdown-menu chưa mở, mở nó và đóng các dropdown-menu khác
            $('.dropdown-menu').removeClass('show');
            dropdownMenu.addClass('show');
        }
    });

    // Khi click bất kỳ đâu khác, đóng dropdown-menu (nếu có mở)
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });
}

// var pages = {
//     "admin-dashboard": {
//         "title": "Dashboard",
//         "content": null,
//         "loadContent": function(){
//             return showDashboard();
//         }
//     },
//     "admin-product": {
//         "title": "Product",
//         "content": null,
//         "loadContent": function() {
//             return showProduct();
//         }
//     },
//     "admin-voucher": {
//         "title": "Voucher",
//         "content": null,
//         "loadContent": function() {
//             return showVoucher();
//         }
//     },
//     "admin-order": {
//         "title": "Order",
//         "content": null,
//         "loadContent": function() {
//             return showOrder();
//         }
//     },
//     "admin-subscribers": {
//         "title": "Subscribers",
//         "content": null,
//         "loadContent": function() {
//             return showSubscribers();
//         }
//     },
//     "admin-profile": {
//         "title": "Profile",
//         "content": null,
//         "loadContent": function() {
//             return showProfile();
//         }
//     }
// };

// Function to load pages
// var currentPage = null;

// function loadPageContent(page) {
//     const contentContainer = document.getElementById('content');
//     contentContainer.innerHTML = ''; // Xóa nội dung cũ

//     if (pages[page] && typeof pages[page].loadContent === 'function') {
//         const pageContent = pages[page].loadContent();
//         contentContainer.appendChild(pageContent);

//         currentPage = page;
//     } else {
//         console.error('Page or loadContent function not found.');
//     }
// }

// window.onload = function() {
//     loadPageContent('admin-dashboard');

//     $('.load-page').on('click', function() {
//         var page = $(this).data('page');
//         loadPageContent(page);
//     });
// };
// Menu animation
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));


// Show more items
function toggleItems(button) {
    var item = button.previousElementSibling;
    var icon = button.querySelector('i');

    if (item.classList.contains('d-none')) {
        item.classList.remove('d-none');
        button.querySelector('span').textContent = 'Show less items';
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    } else {
        item.classList.add('d-none');
        button.querySelector('span').textContent = 'Show more items';
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}

