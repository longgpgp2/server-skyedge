// var subscriberContent = null;

// const subscriberData = [
//     { subscriberEmail: 'nguyenhuan200y@gmail.com'},
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' },
//     { subscriberEmail: 'nguyenchicong@gmail.com' }
// ];
// function getSubcriberData() {
//     return subscriberData;
// }
// function showSubscribers(){
//     if(!subscriberContent){
//         const subscriberContainer = document.createElement('div');
//         subscriberContainer.className = "container subscriber-container p-4";
//         subscriberContent = subscriberContainer;

//         // Create Search Bar
//         const topContainer = document.createElement('div');
//         topContainer.className = "row rounded-3 p-3 mb-4 bg-white";
//         subscriberContainer.appendChild(topContainer);
//         const col12 = document.createElement('div');
//         col12.classList.add('col-12', 'd-flex', 'align-items-center');
//         topContainer.appendChild(col12);
//         const management = document.createElement('div');
//         management.className =  "col-4 d-flex align-items-center gap-2";
//         const iconSubscriber = document.createElement('i');
//         iconSubscriber.className = "fas fa-users fa-2x mb-4";
//         const textSubscriber= document.createElement('div');
//         textSubscriber.className = "d-flex flex-column ml-5";
//         const title = document.createElement('span');
//         title.className = "fs-2";
//         title.textContent = "Subscribers Management";
//         const totalSubscriber = document.createElement('span');
//         totalSubscriber.className = "text-secondary";
//         totalSubscriber.textContent = subscriberData.length + " subscribers";
//         col12.appendChild(management);
//         management.appendChild(iconSubscriber);
//         management.appendChild(textSubscriber);
//         textSubscriber.appendChild(title);
//         textSubscriber.appendChild(totalSubscriber);

//         const search = document.createElement('div');
//         search.className = "col-8";
//         const searchBox = document.createElement('div');
//         searchBox.classList.add('search-box', 'w-100', 'd-flex', 'align-items-center', 'bg-w', 'rounded-3', 'px-2', 'mx-4', 'gap-3');
//         search.appendChild(searchBox);
//         const iconSearch = document.createElement('i');
//         iconSearch.classList.add('fas', 'fa-search', 'icon', 'mx-1');
//         searchBox.appendChild(iconSearch);
//         const inputSearch = document.createElement('input');
//         inputSearch.classList.add('bg-w', 'rounded-3', 'h-4', 'fs-6', 'w-100', 'border-0', 'outline-none');
//         inputSearch.type = "search";
//         inputSearch.placeholder = "Search";
//         col12.appendChild(searchBox);
//         searchBox.appendChild(inputSearch);

//         const subcriberList = document.createElement('div');
//         subcriberList.className = "list-subscriber row rounded-3 p-3 bg-white";
//         subscriberContainer.appendChild(subcriberList);
        
//         const subcriberTable = document.createElement('table');
//         subcriberTable.className = "table table-striped table-hover";
//         const thead = document.createElement('thead');
//         const headerRow = document.createElement('tr');
//         ['Email', 'Copy or Delete'].forEach(headerText => {
//             const th = document.createElement('th');
//             th.textContent = headerText;
//             headerRow.appendChild(th);
//         })
//         thead.appendChild(headerRow);
//         subcriberTable.appendChild(thead);
//         const tbody = document.createElement('tbody');
//         subscriberData.forEach(subscriber => {
//             const dataRow = document.createElement('tr');
//             const emailCell = document.createElement('td');
//             emailCell.className = "email";
//             emailCell.textContent = subscriber.subscriberEmail;
//             const actionCell = document.createElement('td');
//             const copyIcon = document.createElement('i');
//             copyIcon.className = "fa fa-clone copyButton mb-0";
//             copyIcon.setAttribute('role', 'button');
//             copyIcon.addEventListener('click', function() {
//                 copyEmail(this);
//             });
//             const deleteIcon = document.createElement('i');
//             deleteIcon.className = "fa fa-trash mx-5";
//             deleteIcon.setAttribute('role', 'button');
//             actionCell.appendChild(copyIcon);
//             actionCell.appendChild(deleteIcon);
//             dataRow.appendChild(emailCell);
//             dataRow.appendChild(actionCell);
//             tbody.appendChild(dataRow);
//         });
//         subcriberTable.appendChild(tbody);
//         subcriberList.appendChild(subcriberTable);
//         // Copy subscribers
        
        
//         return subscriberContainer;
//     }
//     return subscriberContent;
// }
function copyEmail(icon) {
    // Tìm phần tử chứa email trong cùng một hàng (row)
    var emailElement = icon.closest("tr").querySelector(".email");

    if (emailElement) {
        // Lấy nội dung email
        var email = emailElement.textContent.trim();

        // Tạo một textarea ẩn để sao chép nội dung
        var textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);

        // Chọn và sao chép nội dung trong textarea
        textarea.select();
        document.execCommand("copy");

        // Loại bỏ textarea không cần thiết
        document.body.removeChild(textarea);

        // Thông báo cho người dùng biết rằng email đã được sao chép
        alert("Email has been copied: " + email);
    } else {
        alert("Email not found.");
    }
}