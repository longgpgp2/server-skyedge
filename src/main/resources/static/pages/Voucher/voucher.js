function displayVoucherButton(checkbox) {
    var button = checkbox.closest('.voucher-box').querySelector('.buttonGrp');
    if (checkbox.checked) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
}
