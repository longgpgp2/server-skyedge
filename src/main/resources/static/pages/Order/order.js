// // var orderContent = null;
// // const orderData = [
// //     {
// //         orderID: '12345',
// //         date: '2024-04-06',
// //         shippingNo: '03828126265',
// //         status: 'New',
// //         address: 'Luc Nam, Bac Giang',
// //         phone: '0382816265',
// //         shippingFee: {
// //             amount: 1.99,
// //             currency: '$'
// //         },
// //         discount: {
// //             amount: 50.99,
// //             currency: '$'
// //         },
// //         payment: {
// //             method: 'Credit Card',
// //             transactionNo: '12345',
// //         },
// //         items: [
// //             {
// //                 itemImg: './assets/images/Huan.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             },
// //             {
// //                 itemImg: './assets/images/Cong.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             },
// //             {
// //                 itemImg: './assets/images/Huan.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             }
// //         ]
// //     },
// //     {
// //         orderID: '12345',
// //         date: '2024-04-06',
// //         shippingNo: '03828126265',
// //         status: 'New',
// //         address: 'Luc Nam, Bac Giang',
// //         phone: '0382816265',
// //         shippingFee: {
// //             amount: 1.99,
// //             currency: '$'
// //         },
// //         discount: {
// //             amount: 50.99,
// //             currency: '$'
// //         },
// //         payment: {
// //             method: 'Credit Card',
// //             transactionNo: '12345',
// //         },
// //         items: [
// //             {
// //                 itemImg: './assets/images/Huan.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             },
// //             {
// //                 itemImg: './assets/images/Cong.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             },
// //             {
// //                 itemImg: './assets/images/Long.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             },
// //             {
// //                 itemImg: './assets/images/PhamMinh.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             }
// //         ]
// //     },
// //     {
// //         orderID: '12345',
// //         date: '2024-04-06',
// //         shippingNo: '03828126265',
// //         status: 'New',
// //         address: 'Luc Nam, Bac Giang',
// //         phone: '0382816265',
// //         shippingFee: {
// //             amount: 1.99,
// //             currency: '$'
// //         },
// //         discount: {
// //             amount: 50.99,
// //             currency: '$'
// //         },
// //         payment: {
// //             method: 'Credit Card',
// //             transactionNo: '12345',
// //         },
// //         items: [
// //             {
// //                 itemImg: './assets/images/AnhMinh.png',
// //                 itemName: 'Style, convenience, unparalleled sophistication.',
// //                 sku: 'fashion-17',
// //                 quantity: 2,
// //                 priceItem: {
// //                     itemAmount: 99.99,
// //                     itemCurrency: '$'
// //                 }
// //             }
// //         ]
// //     }
// // ];

// // function getOrderData() {
// //     return orderData;
// // }
// // function showOrder(){
// //     if(!orderContent){
//         // const orderContainer = document.createElement('div');
//         // orderContainer.className = "container order-container p-4";
//         // // Order management
//         // const management = document.createElement('div');
//         // management.className = "row d-flex align-items-center rounded-3 custom-padding mb-4 bg-white";
        
//         // //
//         // const topContainer = document.createElement('div');
//         // topContainer.className = "col-12 d-flex align-items-center";
//         // //
//         // const leftManagement = document.createElement('div');
//         // leftManagement.className = "col-4";
//         // //
//         // const managementTextContainer = document.createElement('div');
//         // managementTextContainer.className = "d-flex align-items-center";
//         // const iconOrder = document.createElement('i');
//         // iconOrder.className = "fas fa-clipboard-list fa-2x mx-2";
//         // const textManagement = document.createElement('h2');
//         // textManagement.textContent = "Order Management";
//         // textManagement.className ="mb-0";
//         // managementTextContainer.appendChild(iconOrder);
//         // managementTextContainer.appendChild(textManagement);
//         // // Filter
//         // const filterContainer = document.createElement('div');
//         // filterContainer.className = "filter_buttons d-flex align-items-center mt-2";        const btnAll = document.createElement('button');
//         // btnAll.className = "active btn all-btn d-flex align-items-center gap-2 rounded-0";
//         // const allOrderText = document.createElement('span');
//         // allOrderText.textContent = "All";
//         // const allOrderNumber = document.createElement('span');
//         // allOrderNumber.textContent = "400";
//         // allOrderNumber.className = "all-order rounded-pill fs-065 p-2-5 text-white";
//         // btnAll.appendChild(allOrderText);
//         // btnAll.appendChild(allOrderNumber);

//         // const btnNew = document.createElement('button');
//         // btnNew.className = "btn new-btn d-flex align-items-center gap-2 rounded-0";
//         // const newOrderText = document.createElement('span');
//         // newOrderText.textContent = "New";
//         // const newOrderNumber = document.createElement('span');
//         // newOrderNumber.textContent = "400";
//         // newOrderNumber.className = "new-order rounded-pill fs-065 p-2-5 text-white";
//         // btnNew.appendChild(newOrderText);
//         // btnNew.appendChild(newOrderNumber);

//         // const btnPending = document.createElement('button');
//         // btnPending.className = "btn pending-btn d-flex align-items-center gap-2 rounded-0";
//         // const pendingOrderText = document.createElement('span');
//         // pendingOrderText.textContent = "Pending";
//         // const pendingOrderNumber = document.createElement('span');
//         // pendingOrderNumber.textContent = "400";
//         // pendingOrderNumber.className = "pending-order rounded-pill fs-065 p-2-5 text-white";
//         // btnPending.appendChild(pendingOrderText);
//         // btnPending.appendChild(pendingOrderNumber);

//         // const btnDelivered = document.createElement('button');
//         // btnDelivered.className = "btn delivered-btn d-flex align-items-center gap-2 rounded-0";
//         // const deliveredOrderText = document.createElement('span');
//         // deliveredOrderText.textContent = "Delivered";
//         // const deliveredOrderNumber = document.createElement('span');
//         // deliveredOrderNumber.textContent = "400";
//         // deliveredOrderNumber.className = "delivered-order rounded-pill fs-065 p-2-5 text-white";
//         // btnDelivered.appendChild(deliveredOrderText);
//         // btnDelivered.appendChild(deliveredOrderNumber);
//         // filterContainer.appendChild(btnAll);
//         // filterContainer.appendChild(btnNew);
//         // filterContainer.appendChild(btnPending);
//         // filterContainer.appendChild(btnDelivered);

//         // leftManagement.appendChild(managementTextContainer);
//         // leftManagement.appendChild(filterContainer);

//         // // Search
//         // const rightManagement = document.createElement('div');
//         // rightManagement.className = "col-8";
//         // const searchBox = document.createElement('div');
//         // searchBox.className = "search-box d-flex align-items-center bg-w rounded-3 px-2 py-1 mx-5 mb-3 gap-3";
//         // const iconSearch = document.createElement('i');
//         // iconSearch.className = "fas fa-search icon mx-1";
//         // const inputSearch = document.createElement('input');
//         // inputSearch.className = "bg-w rounded-3 h-4 fs-6 w-100 border-0 outline-none";
//         // inputSearch.type = "search";
//         // inputSearch.placeholder = "Search";
//         // searchBox.appendChild(iconSearch);
//         // searchBox.appendChild(inputSearch);
//         // rightManagement.appendChild(searchBox);

//         // topContainer.appendChild(leftManagement);
//         // topContainer.appendChild(rightManagement);
//         // management.appendChild(topContainer);
//         // orderContainer.appendChild(management);

//         // orderContent = orderContainer;

// //         const listOrder = document.createElement('div');
// //         listOrder.className = "list-order row rounded-3 p-0 gap-2";
// //         orderContainer.appendChild(listOrder); 
        


//         for (let i = 0; i < orderData.length; i++){
//             const order = orderData[i];
//             const itemAmounts = order.items.map(item => item.priceItem.itemAmount);
//             // Tính tổng số tiền của các mặt hàng
//             const totalItemAmount = itemAmounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//             // Tính tổng số tiền sau khi trừ đi shippingFee và discount
//             const totalAmount = totalItemAmount - order.shippingFee.amount - order.discount.amount;
//             // Làm tròn đến 2 số thập phân
//             const totalAmountRounded = totalAmount.toFixed(2);
//             order.totalPrice = {
//                 amount: totalAmountRounded,
//                 currency: '$'
//             };
//             const orderBox = createOrder(order);
//             listOrder.appendChild(orderBox);
//         }



// //         // Function to create Orders
// //         function createOrder(order){
// //             const orderBox = document.createElement('div');
// //             orderBox.className = "order rounded-3 p-3 bg-white w-100 mb-2";

// //             // Id and Price
// //             const idAndPriceContainer = document.createElement('div');
// //             idAndPriceContainer.className = "d-flex align-items-center mb-2 justify-content-between";
// //             // Checkbox and ID container
// //             const orderAndPriceContainer = document.createElement('div');
// //             orderAndPriceContainer.className = "d-flex align-items-center gap-2";
// //             idAndPriceContainer.appendChild(orderAndPriceContainer);
// //             // Check box
// //             const checkboxOrder = document.createElement('input');
// //             checkboxOrder.className = "form-check-input mb-1";
// //             checkboxOrder.type = "checkbox";
// //             checkboxOrder.id = "check1";
// //             checkboxOrder.name = "option1";
// //             checkboxOrder.value = "something";
// //             checkboxOrder.addEventListener('change', function() {
// //                 displayViewDetailsButton(this);
// //             });
// //             // Order ID
// //             const orderText = document.createElement('h5');
// //             orderText.className = "text-secondary mb-0";
// //             orderText.textContent = "Order";
// //             const orderId = document.createElement('h5');
// //             orderId.className = "order-id mb-0";
// //             orderId.textContent = "#" + order.orderID;
// //             orderAndPriceContainer.appendChild(checkboxOrder);
// //             orderAndPriceContainer.appendChild(orderText);
// //             orderAndPriceContainer.appendChild(orderId);
// //             idAndPriceContainer.appendChild(orderAndPriceContainer);

// //             // Price
// //             const priceAndViewButtonContainer = document.createElement('div');
// //             priceAndViewButtonContainer.className = "d-flex align-items-center gap-3";
// //             const price = document.createElement('span');
// //             price.className = "fs-4 fw-bold";
// //             price.textContent =  order.totalPrice.currency +  order.totalPrice.amount;
// //             const buttonViewDetails = document.createElement('button');
// //             buttonViewDetails.className = "viewDetails btn btn-outline-primary rounded-pill fs-075 px-3 py-2 d-none";
// //             buttonViewDetails.id = "viewButton";
// //             buttonViewDetails.textContent = "View details";
// //             buttonViewDetails.addEventListener('click', function() {
// //                 openPopup(order);
// //             });
// //             priceAndViewButtonContainer.appendChild(price);
// //             priceAndViewButtonContainer.appendChild(buttonViewDetails);
// //             idAndPriceContainer.appendChild(priceAndViewButtonContainer);
            
// //             orderBox.appendChild(idAndPriceContainer);
// //             // Date amd Ship
// //             const dateAndShipContainer = document.createElement('div');
// //             dateAndShipContainer.className = "d-flex align-items-center mx-4 mb-2 gap-2";
// //             orderBox.appendChild(dateAndShipContainer);
// //             // Date
// //             const dateContainer = document.createElement('div');
// //             dateContainer.className = "d-flex align-items-center gap-1";
// //             const iconDate = document.createElement('i');
// //             iconDate.className = "fa fa-calendar";
// //             const timeText = document.createElement('p');
// //             timeText.className = "mb-0";  
// //             timeText.textContent = "Date:";
// //             const time = document.createElement('span');
// //             time.claSssName = "time";
// //             time.textContent = order.date;
// //             dateContainer.appendChild(iconDate);
// //             dateContainer.appendChild(timeText);
// //             dateContainer.appendChild(time);
// //             dateAndShipContainer.appendChild(dateContainer);
// //             // Shipping No
// //             const shippingNoContainer = document.createElement('div');
// //             shippingNoContainer.className = "d-flex align-items-center gap-1";
// //             const shippingNoText = document.createElement('p');
// //             shippingNoText.className = "mb-0";  
// //             shippingNoText.textContent = "Shipping no:";
// //             const phoneShip = document.createElement('span');
// //             phoneShip.className = "phone text-primary";
// //             phoneShip.textContent = order.shippingNo;
// //             shippingNoContainer.appendChild(shippingNoText);
// //             shippingNoContainer.appendChild(phoneShip);
// //             dateAndShipContainer.appendChild(shippingNoContainer);
// //             orderBox.appendChild(dateAndShipContainer);

// //             const statusContainer = document.createElement('div')
// //             statusContainer.className = "custom-select mx-4 mb-3";
// //             const selectStatus = document.createElement("select");
// //             selectStatus.className = "status-select rounded-pill p-2-5 text-success";
// //             const statusList = [
// //                 "New",
// //                 "Pending",
// //                 "Delivered",
// //                 "Unfinished"
// //             ];
// //             statusList.forEach(function(status) {
// //                 const option = document.createElement("option");
// //                 option.textContent = status;
// //                 selectStatus.appendChild(option);
// //             });
// //             statusContainer.appendChild(selectStatus);
// //             orderBox.appendChild(statusContainer);
            
            
// //             const itemsContainer = document.createElement('div');
// //             itemsContainer.className = "item mx-4";
// //             const firstItem = order.items[0];
// //             const itemBox = createItems(firstItem);
// //             itemsContainer.appendChild(itemBox);
// //             orderBox.appendChild(itemsContainer);

//             for (let i = 1; i < order.items.length; i++) {
//                 const item = order.items[i];
//                 const itemBox = createItems(item);
//                 itemBox.classList.add('d-none');
//                 itemsContainer.appendChild(itemBox);
//             }

// //             const btnShow = document.createElement('div');
// //             btnShow.className = "mt-2 show-item-1 d-flex align-items-center gap-2 mx-4 d-none";
// //             btnShow.role = "button";
// //             const btnShowText = document.createElement('span');
// //             btnShowText.textContent = "More " + (order.items.length-1) +  " items";
            
//             if(order.items.length > 1){
//                 btnShow.classList.remove('d-none');
//             }
// //             const iconShow = document.createElement('i');
// //             iconShow.className = "fa fa-angle-down";
// //             btnShow.appendChild(btnShowText);
// //             btnShow.appendChild(iconShow);
// //             orderBox.appendChild(btnShow);
//             btnShow.addEventListener('click', function() {
//                 for (let i = 1; i < itemsContainer.children.length; i++) {
//                     const item = itemsContainer.children[i];
//                     if (item.classList.contains('d-none')) {
//                         item.classList.remove('d-none');
//                         btnShowText.textContent = "Show less items";
//                         iconShow.classList.add('rotate-180');
//                     } else {
//                         item.classList.add('d-none');
//                         btnShowText.textContent = "More " + (order.items.length-1) +  " items";
//                         iconShow.classList.remove('rotate-180');
//                     }
//                 }
//                 btnShow.style.display = "none";
//             })
// //             return orderBox;
// //         }
//         function displayViewDetailsButton(checkbox) {
//             var button = checkbox.closest('.order').querySelector('.viewDetails');
//             var rejectButton = checkbox.closest('.order').querySelector('.viewDetails');
//             if (checkbox.checked) {
//                 button.classList.remove('d-none');
//             } else {
//                 button.classList.add('d-none');
//             }
//         }
// //         function createItems(item){
// //             const itemContainer = document.createElement('div');
// //             itemContainer.className = "d-flex mb-2 align-items-center justify-content-between w-100";

// //             const imgAndInfoContainer = document.createElement('div');
// //             imgAndInfoContainer.className = "d-flex align-items-center";
// //             itemContainer.appendChild(imgAndInfoContainer);
// //             const itemImgSrc = document.createElement('img');
// //             itemImgSrc.className = "rounded";
// //             itemImgSrc.height = "80";
// //             itemImgSrc.width = "80";
// //             itemImgSrc.src = item.itemImg;
// //             imgAndInfoContainer.appendChild(itemImgSrc);

// //             const inforItem = document.createElement('div');
// //             inforItem.className = "d-flex flex-column pb-3 mx-2";
// //             imgAndInfoContainer.appendChild(inforItem);

// //             const itemName = document.createElement('span');
// //             itemName.className = "text-start";
// //             itemName.textContent = "Fashion glasses: " + item.itemName;
// //             const sku = document.createElement('span');
// //             sku.className = "sku text-primary text-start";
// //             sku.textContent = "SKU: " + item.sku;
// //             const itemQuantity = document.createElement('span');
// //             itemQuantity.className = "quantity text-start";
// //             itemQuantity.textContent = "Quantity: " + item.quantity;
// //             const totalPriceItemContainer = document.createElement('div');
// //             totalPriceItemContainer.className = "item-price pb-5 mb-3 d-none";
// //             const totalPriceItem = document.createElement('span');
// //             totalPriceItem.className = " fw-bold fs-5";
// //             totalPriceItem.textContent = item.priceItem.itemCurrency +  item.priceItem.itemAmount;

// //             inforItem.appendChild(itemName);
// //             inforItem.appendChild(sku);
// //             inforItem.appendChild(itemQuantity);
// //             totalPriceItemContainer.appendChild(totalPriceItem);
// //             itemContainer.appendChild(totalPriceItemContainer); 
// //             return itemContainer;
// //         }
        
// //         // Function to create the popup
// //         function createOrderPopup(order) {
// //             // Overlay
// //             const overlay = document.createElement('div');
// //             overlay.classList.add('overlay');
// //             overlay.addEventListener('click', closePopup);

// //             // Popup
// //             const popup = document.createElement('div');
// //             popup.classList.add('order-popup');

// //             const popupContent = document.createElement('div');
// //             popupContent.classList.add('order-popup-content');

// //             // Close button
// //             const closeButton = document.createElement('span');
// //             closeButton.classList.add('close-popup','fs-2');
// //             closeButton.role = 'button';
// //             closeButton.textContent = '×';
// //             closeButton.addEventListener('click', closePopup);

// //             // Form
// //             const inforContainer = document.createElement('div');
// //             inforContainer.className = "col d-flex rounded-3";
// //             const leftContent = document.createElement('div');
// //             leftContent.className = "col-8 d-flex flex-column left-content p-4";
// //             inforContainer.appendChild(leftContent);
// //             const orderDetailsText = document.createElement('span');
// //             orderDetailsText.className = "fw-bold fs-4 text-start mb-4";
// //             orderDetailsText.textContent = "Order Details";
// //             leftContent.appendChild(orderDetailsText);

            
// //             const itemsContainer = document.createElement('div');
// //             itemsContainer.className = "item";
// //             leftContent.appendChild(itemsContainer);
// //             for (let i = 0; i < order.items.length; i++) {
// //                 const item = order.items[i];
// //                 const itemBox = createItems(item);
// //                 itemsContainer.appendChild(itemBox);
// //             }

// //             const itemPrices = leftContent.querySelectorAll('.item-price');
            
// //             itemPrices.forEach(itemPrice => {

// //                 itemPrice.classList.add('popup-item-price');
// //                 itemPrice.classList.remove('d-none');
// //             });
// //             //Total Price
// //             const totalPriceContainer = document.createElement('div');
// //             leftContent.appendChild(totalPriceContainer);
// //             totalPriceContainer.className = "d-flex flex-column";
// //             // Sub Total
// //             const subTotalContainer = document.createElement('div');
// //             subTotalContainer.className = "d-flex justify-content-between";
// //             const subTotalText = document.createElement('span');
// //             subTotalText.textContent = "Subtotal";
// //             const subTotal = document.createElement('span');
// //             subTotal.className = "fw-bold fs-6";
// //             subTotal.textContent = order.totalPrice.currency + order.totalPrice.amount;
// //             totalPriceContainer.appendChild(subTotalContainer);
// //             subTotalContainer.appendChild(subTotalText);
// //             subTotalContainer.appendChild(subTotal);
// //             // Shipping fee            
// //             const shippingPriceContainer = document.createElement('div');
// //             shippingPriceContainer.className = "d-flex justify-content-between";
// //             const shippingPriceText = document.createElement('span');
// //             shippingPriceText.textContent = "Shipping";
// //             const shippingPrice = document.createElement('span');
// //             shippingPrice.className = "fw-bold fs-6";
// //             shippingPrice.textContent = order.shippingFee.currency + order.shippingFee.amount;
// //             totalPriceContainer.appendChild(shippingPriceContainer);
// //             shippingPriceContainer.appendChild(shippingPriceText);
// //             shippingPriceContainer.appendChild(shippingPrice);
// //             // Discount            
// //             const discountContainer = document.createElement('div');
// //             discountContainer.className = "d-flex justify-content-between";
// //             const discountText = document.createElement('span');
// //             discountText.textContent = "Discount";
// //             const discountTotal = document.createElement('span');
// //             discountTotal.className = "fw-bold fs-6";
// //             discountTotal.textContent = order.discount.currency + order.discount.amount;
// //             totalPriceContainer.appendChild(discountContainer);
// //             discountContainer.appendChild(discountText);
// //             discountContainer.appendChild(discountTotal);
// //             // Total Price          
// //             const totalContainer = document.createElement('div');
// //             totalContainer.className = "d-flex justify-content-between  ";
// //             const totalText = document.createElement('span');
// //             totalText.className ="fw-bold";
// //             totalText.textContent = "Total";
// //             const totalAmount = document.createElement('span');
// //             totalAmount.className = "fw-bold fs-6";
// //             totalAmount.textContent = order.totalPrice.currency + order.totalPrice.amount;
// //             totalPriceContainer.appendChild(totalContainer);
// //             totalContainer.appendChild(totalText);
// //             totalContainer.appendChild(totalAmount);

// //             // Right content
// //             const rightContent = document.createElement('div');
// //             rightContent.className = "col-4 right-content p-4 d-flex flex-column gap-4";
// //             inforContainer.appendChild(rightContent);

// //             // Customer Info
// //             const customerInfoContainer = document.createElement('div');
// //             customerInfoContainer.className = "d-flex flex-column";
// //             rightContent.appendChild(customerInfoContainer);
// //             const customerInfoTitle = document.createElement('span');
// //             customerInfoTitle.className = "fw-bold fs-4 text-start mb-3";
// //             customerInfoTitle.textContent = "Customer Info";
// //             const userContainer = document.createElement('div');
// //             userContainer.className = "d-flex gap-3 mb-2 align-items-center";
// //             const userImgSrc = document.createElement('img');
// //             userImgSrc.className = "rounded-circle";
// //             userImgSrc.height = "60";
// //             userImgSrc.width = "60";
// //             userImgSrc.src = user[0].userAvatar;
// //             userContainer.appendChild(userImgSrc);
// //             const infoUser = document.createElement('div');
// //             infoUser.className = "d-flex flex-column h-100";
// //             userContainer.appendChild(infoUser);
// //             const userName = document.createElement('span');
// //             userName.className = "text-start fw-bold";
// //             userName.textContent = user[0].userName;
// //             const userEmail = document.createElement('span');
// //             userEmail.className = "text-start";
// //             userEmail.textContent = "Email: " +  user[0].userName;
// //             infoUser.appendChild(userName);
// //             infoUser.appendChild(userEmail);
// //             userContainer.appendChild(infoUser); 
// //             customerInfoContainer.appendChild(customerInfoTitle);
// //             customerInfoContainer.appendChild(userContainer);

// //             // Delivery Details
// //             const deliveryContainer = document.createElement('div');
// //             deliveryContainer.className = "d-flex flex-column";
// //             const deliveryTitle = document.createElement('span');
// //             deliveryTitle.className = "fw-bold fs-4 text-start mb-3";
// //             deliveryTitle.textContent = "Delivery Details";
// //             const deliveryInfo = document.createElement('div');
// //             deliveryInfo.className = "d-flex flex-column h-100";
// //             const address = document.createElement('span');
// //             address.className = "text-start";
// //             address.textContent = "Address: " + order.address;
// //             const phone = document.createElement('span');
// //             phone.className = "text-start";
// //             phone.textContent = "Phone: " +  order.phone;
// //             deliveryContainer.appendChild(deliveryTitle);
// //             deliveryInfo.appendChild(address);
// //             deliveryInfo.appendChild(phone);
// //             deliveryContainer.appendChild(deliveryInfo); 
// //             rightContent.appendChild(deliveryContainer);

// //             // Payment Info
// //             const paymentContainer = document.createElement('div');
// //             paymentContainer.className = "d-flex flex-column";
// //             const paymentTitle = document.createElement('span');
// //             paymentTitle.className = "fw-bold fs-4 text-start mb-3";
// //             paymentTitle.textContent = "Payment Info";
// //             const paymentInfo = document.createElement('div');
// //             paymentInfo.className = "d-flex flex-column h-100";
// //             const paymentMethod = document.createElement('span');
// //             paymentMethod.className = "text-start";
// //             paymentMethod.textContent = "Payment Method: " + order.payment.method;
// //             const   transactionNo = document.createElement('span');
// //             transactionNo.className = "text-start";
// //             transactionNo.textContent = "Transaction No: " +  order.payment.transactionNo;
// //             paymentContainer.appendChild(paymentTitle);
// //             paymentInfo.appendChild(paymentMethod);
// //             paymentInfo.appendChild(transactionNo);
// //             paymentContainer.appendChild(paymentInfo); 
// //             rightContent.appendChild(paymentContainer);

// //             // Update & Delete button
// //             const buttonGroup = document.createElement('buttonGrp');
// //             buttonGroup.classList.add('buttonGrp');
            
// //             rightContent.appendChild(buttonGroup);
// //             const cancelButton = document.createElement('button');
// //             cancelButton.className = "btn px-3 py-2 btn-outline-secondary rounded-3";
// //             cancelButton.textContent = "Cancel";
// //             buttonGroup.appendChild(cancelButton);
// //             cancelButton.addEventListener('click', function(event) {
// //                 event.preventDefault();
// //                 // Handle form submission here
// //                 closePopup();
// //             });
// //             const saveChangesButton = document.createElement('button');
// //             saveChangesButton.className = "btn px-3 py-2 btn-outline-primary rounded-3";
// //             saveChangesButton.textContent = "Save Changes";
// //             buttonGroup.appendChild(saveChangesButton);

// //             // Add elements to popupContent
// //             popupContent.appendChild(closeButton);
// //             popupContent.appendChild(inforContainer);

// //             // Add popupContent to popup
// //             popup.appendChild(popupContent);

// //             // Add overlay and popup to body
// //             document.body.appendChild(overlay);
// //             document.body.appendChild(popup);
// //         }
// //         // Function to open the popup
// //         function openPopup(order) {
// //             createOrderPopup(order);
// //         }
// //         // Function to close the popup
// //         function closePopup() {
// //             const overlay = document.querySelector('.overlay');
// //             const popup = document.querySelector('.order-popup');
// //             if (overlay && popup) {
// //                 overlay.remove();
// //                 popup.remove();
// //             }
// //         }
// //     }
// //     return orderContent;
// // }