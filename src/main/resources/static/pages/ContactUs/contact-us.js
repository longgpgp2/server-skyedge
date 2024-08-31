


var myModal = document.getElementById('confirmationModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

function showToast() {
    var toastEl = document.getElementById('liveToast');
    var bsToast = new bootstrap.Toast(toastEl);
    bsToast.show();
}

var toastBtn = document.getElementById('toastBtn')

toastBtn.addEventListener('click', showToast);
