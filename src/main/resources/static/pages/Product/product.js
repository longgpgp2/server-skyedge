
function displayProductButton(checkbox) {
    var button = checkbox.closest('.product-box').querySelector('.buttonGrp');
    if (checkbox.checked) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
}