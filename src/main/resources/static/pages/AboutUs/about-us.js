const itemsContainer = document.createElement('div')
itemsContainer.innerHTML = `
    <!--First slide-->
    <div class="carousel-item active">
        <div class="row align-items-center">
            <div class="col md-5 border-start border-end p-3">
                <img src="./assets/images/Cong.png" class="img" style="width: 14rem; height: 14rem" alt="Avatar">
                <h4 class="fs-5 pt-2">Nguyen Chi Cong</h4>
                <p class="fs-6">Full-stack developer</p>
            </div>
            <div class="col md-5 border-start border-end p-3">
                <img src="./assets/images/Huan.png" class="img" style="width: 14rem; height: 14rem" alt="Avatar">
                <h4 class="fs-5 pt-2">Nguyen Van Huan</h4>
                <p class="fs-6">Full-stack developer, UX-UI designer</p>
            </div>
            <div class="col md-5 border-start border-end p-3">
                <img class="img" src="./assets/images/Long.png" style="width: 14rem; height: 14rem" alt="Avatar">
                <h4 class="fs-5 pt-2">Nguyen Thanh Long</h4>
                <p class="fs-6">Full-stack developer</p>
            </div>
        </div>
    
    </div>
    <!--End First slide-->
    
    <!--Second slide-->
    <div class="carousel-item">
        <div class="row">
            <div class="col md-5 border-start border-end p-3">
                <img src="./assets/images/AnhMinh.png" class="img" style="width: 14rem; height: 14rem" alt="Avatar" >
                <h4 class="fs-5 pt-2">Nguyen Anh Minh</h4>
                <p class="fs-6">Fontend developer</p>
            </div>
            <div class="col md-5 border-start border-end p-3">
                <img src="./assets/images/PhamMinh.png" class="img" style="width: 14rem; height: 14rem" alt="Avatar">
                <h4 class="fs-5 pt-2">Pham Anh Minh</h4>
                <p class="fs-6">Fontend developer</p>
            </div>
            <div class="col md-5 border-start border-end p-3">
                <img src="./assets/login_background.png" class="img" style="width: 14rem; height: 14rem" alt="Avatar">
                <h4 class="fs-5 pt-2">Bootstrap 5</h4>
                <p class="fs-6">Front-end developer</p>
            </div>
        </div>
    
    </div>
    <!--End Second slide-->
                                    
`

document.getElementById("members").appendChild(itemsContainer)