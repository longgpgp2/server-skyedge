// Khai báo biến để lưu trữ nội dung trang dashboard
var dashboardContent = null;

function showDashboard() {
    // Nếu chưa có nội dung, thực hiện tạo mới
    if (!dashboardContent) {
        const dashboardContainer = document.createElement('div');
        dashboardContainer.classList.add('container', 'dashboard-container', 'mt-5');

        const products = getProductData();
        const productCount = products.length;
        const vouchers = getVoucherData();
        const voucherCount = vouchers.length;
        const orders = getOrderData();
        const orderCount = orders.length;
        const columns = [
            { number: productCount, type: 'Product', iconClass: 'fa-shopping-bag' },
            { number: voucherCount, type: 'Voucher', iconClass: 'fa-ticket' },
            { number: orderCount, type: 'Order', iconClass: 'fa-shopping-cart' },
            { number: '50.89', type: 'Income', iconClass: 'fa-dollar-sign' }
        ];
        const overviewContainer = document.createElement('div');
        overviewContainer.classList.add('overview-container', 'row', 'mb-5');

        columns.forEach(column => {
            const colDiv = createColumn(column.number, column.type, column.iconClass);
            overviewContainer.appendChild(colDiv);
        });

        dashboardContainer.appendChild(overviewContainer);

        // Function tạo column
        function createColumn(number, type, iconClass) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-3');

            const card = document.createElement('div');
            card.classList.add('card');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardContent = document.createElement('div');
            cardContent.classList.add('custom-card-content');

            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');

            const cardTitle = document.createElement('h2');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = number;

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = type;

            const iconContainer = document.createElement('div');
            iconContainer.classList.add('icon-container');

            const iconCard = document.createElement('h2');
            iconCard.classList.add('fa', iconClass);

            numberDiv.appendChild(cardTitle);
            numberDiv.appendChild(cardText);
            cardContent.appendChild(numberDiv);
            iconContainer.appendChild(iconCard);
            cardContent.appendChild(iconContainer);
            cardBody.appendChild(cardContent);
            card.appendChild(cardBody);
            colDiv.appendChild(card);

            return colDiv;
        }

        const recentContainer = document.createElement('div');
        recentContainer.classList.add('row', 'gap-3');
        dashboardContainer.appendChild(recentContainer);

        // Tạo và thêm bảng mua hàng gần đây
        const purchaseContainer = document.createElement('div');
        purchaseContainer.id = 'purchase';
        purchaseContainer.classList.add('col', 'bg-white', 'p-3', 'rounded-3', 'mb-4');

        const heading = document.createElement('h3');
        heading.textContent = 'Recent Purchases';

        const table = document.createElement('table');
        table.classList.add('table', 'table-hover', 'table-striped');

        // Header bảng
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Order No.', 'Name', 'Amount', 'Date & Time', 'Status'];

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);

        // Body bảng
        const tbody = document.createElement('tbody');
        tbody.classList.add('purchase-table');

        // Dữ liệu mẫu
        const purchases = [
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'PENDING' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'FAILED' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'SUCCESS' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'COMPLETED' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'PENDING' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'FAILED' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'SUCCESS' },
            { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'SUCCESS' }
        ];

        purchases.forEach(purchase => {
            const row = document.createElement('tr');
            const cells = ['orderNo', 'name', 'amount', 'dateTime'];

            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = purchase[cell];
                row.appendChild(td);
            });

            // Thêm span status với class tương ứng
            const statusCell = document.createElement('td');
            statusCell.classList.add('status');
            const statusSpan = document.createElement('span');
            statusSpan.classList.add('status-btn', `status-${purchase.status.toLowerCase()}`);
            statusSpan.textContent = purchase.status;
            statusCell.appendChild(statusSpan);
            row.appendChild(statusCell);

            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        // Nút "Show All"
        const showAllButton = document.createElement('button');
        showAllButton.type = 'button';
        showAllButton.classList.add('btn', 'btn-outline-success');
        showAllButton.textContent = 'Show All';

        purchaseContainer.appendChild(heading);
        purchaseContainer.appendChild(table);
        purchaseContainer.appendChild(showAllButton);

        recentContainer.appendChild(purchaseContainer);

        const activityContainer = document.createElement('div');
        activityContainer.id = 'activity';
        activityContainer.classList.add('col', 'bg-white', 'p-3', 'rounded-3', 'mb-4');

        const headingActivity = document.createElement('h3');
        headingActivity.textContent = 'Recent Admin Activities';

        const tableActivity = document.createElement('table');
        tableActivity.classList.add('table', 'table-hover', 'table-striped');

        // Header bảng cho activities
        const theadActivity = document.createElement('thead');
        const headerRowActivity = document.createElement('tr');
        const headersActivity = ['Activity', 'Date & Time'];

        headersActivity.forEach(headerText => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.textContent = headerText;
            headerRowActivity.appendChild(th);
        });

        theadActivity.appendChild(headerRowActivity);

        // Body bảng cho activities
        const tbodyActivity = document.createElement('tbody');
        // Dữ liệu mẫu cho activities
        const activities = [
            { adminName: 'Cong', avatar: './assets/images/Cong.png', activity: 'has deleted a voucher from List Voucher', dateTime: 'Mar 26, 2024' },
            { adminName: 'Huan', avatar: './assets/images/Huan.png', activity: 'has added a new product', dateTime: 'Mar 25, 2024' },
            { adminName: 'Long', avatar: './assets/images/Long.png', activity: 'has updated product prices', dateTime: 'Mar 24, 2024' },
            { adminName: 'Anh Minh', avatar: './assets/images/AnhMinh.png', activity: 'has deleted a customer account', dateTime: 'Mar 23, 2024' },
            { adminName: 'Pham Minh', avatar: './assets/images/PhamMinh.png', activity: 'has added a new category', dateTime: 'Mar 22, 2024' },
            { adminName: 'Cong', avatar: './assets/images/Cong.png', activity: 'has updated order status', dateTime: 'Mar 21, 2024' },
            { adminName: 'Cong', avatar: './assets/images/Cong.png', activity: 'has updated customer details', dateTime: 'Mar 20, 2024' }
        ];

        activities.forEach(activity => {
            const rowActivity = document.createElement('tr');
            const activityCell = document.createElement('td');
            activityCell.classList.add('d-flex', 'align-items-center');

            const adminLogo = document.createElement('div');
            adminLogo.classList.add('admin-logo', 'd-flex', 'align-items-center');

            const adminAvatar = document.createElement('img');
            adminAvatar.classList.add('avt');
            adminAvatar.src = activity.avatar;
            adminAvatar.alt = 'Avatar';

            const adminName = document.createElement('p');
            adminName.classList.add('admin-name', 'text-success', 'mb-0');
            adminName.textContent = activity.adminName;

            adminLogo.appendChild(adminAvatar);
            adminLogo.appendChild(adminName);

            const activityText = document.createElement('p');
            activityText.classList.add('activity', 'mb-0');
            activityText.textContent = ` ${activity.activity}`;

            activityCell.appendChild(adminLogo);
            activityCell.appendChild(activityText);

            const dateTimeCell = document.createElement('td');
            dateTimeCell.textContent = activity.dateTime;

            rowActivity.appendChild(activityCell);
            rowActivity.appendChild(dateTimeCell);

            tbodyActivity.appendChild(rowActivity);
        });

        tableActivity.appendChild(theadActivity);
        tableActivity.appendChild(tbodyActivity);

        // Nút "Show All" cho activities
        const showAllActivityButton = document.createElement('button');
        showAllActivityButton.type = 'button';
        showAllActivityButton.classList.add('btn', 'btn-outline-success');
        showAllActivityButton.textContent = 'Show All';

        activityContainer.appendChild(headingActivity);
        activityContainer.appendChild(tableActivity);
        activityContainer.appendChild(showAllActivityButton);

        recentContainer.appendChild(activityContainer);

        // Lưu nội dung vào biến dashboardContent
        dashboardContent = dashboardContainer;
    }

    // Trả về nội dung đã lưu
    return dashboardContent;
}
