var pw = document.getElementById('pwd');
var pwConfirm = document.getElementById('pwd2');

function passwordValidation() {
    if (pw.value != pwConfirm.value) {
        pwConfirm.setCustomValidity("Your V numbers do not match. Try again.");
    } else {
        pwConfirm.setCustomValidity("");
    }
};

