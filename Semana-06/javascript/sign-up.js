window.onload = function() {

    // containsNumber? function.

    function containsNumber(val) {
        var numbers = [0,1,2,3,4,5,6,7,8,9];
        var num = 0;
        for (i=0; i < val.value.length; i++) {
            for (j=0; j < 10; j++) {
                if (val.value[i] == numbers[j]) {
                    num++;
                }
            }
        }
        return num;
    }

    // Name and Surname valids.

    var signUpName = document.getElementById('name');
    var signUpSurname = document.getElementById('surname');
    var nameInlineAlert = document.createElement('p');
    var surnameInlineAlert = document.createElement('p');
    nameInlineAlert.textContent = "";
    surnameInlineAlert.textContent = "";
    signUpName.addEventListener('blur', validateNameB);
    signUpName.addEventListener('focus', validateNameF);
    signUpSurname.addEventListener('blur', validateSurnameB);
    signUpSurname.addEventListener('focus', validateSurnameF);

    function validateNameB() {
        var numm = containsNumber(signUpName);
        if ((numm > 0) || (signUpName.value.length < 3)) {
            nameInlineAlert.textContent = "* Name is not valid.";
            signUpName.insertAdjacentElement('afterend', nameInlineAlert);
        } else {
            nameInlineAlert.textContent = "";
        }
    }
    function validateNameF() {
        nameInlineAlert.remove();
    }

    function validateSurnameB() {
        var numm = containsNumber(signUpSurname);
        if ((numm > 0) || (signUpSurname.value.length < 3)) {
            surnameInlineAlert.textContent = "* Surname is not valid.";
            signUpSurname.insertAdjacentElement('afterend', surnameInlineAlert);
        } else {
            surnameInlineAlert.textContent = "";
        }
    }
    function validateSurnameF() {
        surnameInlineAlert.remove();
    }

    // DNI, phone number and ZIP code valids.

    var signUpDni = document.getElementById('dni');
    var signUpPhone = document.getElementById('phone-number');
    var signUpZip = document.getElementById('zip');
    var dniInlineAlert = document.createElement('p');
    var phoneInlineAlert = document.createElement('p');
    var zipInlineAlert = document.createElement('p');
    dniInlineAlert.textContent = "";
    phoneInlineAlert.textContent = "";
    zipInlineAlert.textContent = "";
    signUpDni.addEventListener('blur', validateDniB);
    signUpDni.addEventListener('focus', validateDniF);
    signUpPhone.addEventListener('blur', validatePhoneB);
    signUpPhone.addEventListener('focus', validatePhoneF);
    signUpZip.addEventListener('blur', validateZipB);
    signUpZip.addEventListener('focus', validateZipF);

    function validateDniB() {
        var numm = containsNumber(signUpDni);
        if ((numm != signUpDni.value.length) || (signUpDni.value.length < 7)) {
            dniInlineAlert.textContent = "* DNI is not valid.";
            signUpDni.insertAdjacentElement('afterend', dniInlineAlert);
        } else {
            dniInlineAlert.textContent = "";
        }
    }
    function validateDniF() {
        dniInlineAlert.remove();
    }

    function validatePhoneB() {
        var numm = containsNumber(signUpPhone);
        if ((signUpPhone.value.length != numm) || (signUpPhone.value.length != 10)) {
            phoneInlineAlert.textContent = "* Phone is not valid.";
            signUpPhone.insertAdjacentElement('afterend', phoneInlineAlert);
        } else {
            phoneInlineAlert.textContent = "";
        }
    }
    function validatePhoneF() {
        phoneInlineAlert.remove();
    }

    function validateZipB() {
        var numm = containsNumber(signUpZip);
        if ((signUpZip.value.length != numm) || (signUpZip.value.length < 4) || (signUpZip.value.length > 5)) {
            zipInlineAlert.textContent = "* ZIP code is not valid.";
            signUpZip.insertAdjacentElement('afterend', zipInlineAlert);
        } else {
            zipInlineAlert.textContent = "";
        }
    }
    function validateZipF() {
        zipInlineAlert.remove();
    }

    // Email, password and Repeat password valids.

    var signUpEmail = document.getElementById('email');
    var signUpPassword = document.getElementById('password');
    var signUpRepPassword = document.getElementById('rep-password');
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailInlineAlert = document.createElement('p');
    var passwordInlineAlert = document.createElement('p');
    var repPasswordInlineAlert = document.createElement('p');
    emailInlineAlert.textContent = "";
    passwordInlineAlert.textContent = "";
    repPasswordInlineAlert.textContent = "";
    signUpEmail.addEventListener('blur', validateEmailB);
    signUpEmail.addEventListener('focus', validateEmailF);
    signUpPassword.addEventListener('blur', validatePasswordB);
    signUpPassword.addEventListener('focus', validatePasswordF);
    signUpRepPassword.addEventListener('blur', validateRepPasswordB);
    signUpRepPassword.addEventListener('focus', validateRepPasswordF);

    function validateEmailB() {
        if (!emailRegExp.test(signUpEmail.value)) {
            emailInlineAlert.textContent = "* Email is not valid.";
            signUpEmail.insertAdjacentElement('afterend', emailInlineAlert);
        } else {
            emailInlineAlert.textContent = "";
        }
    }
    function validateEmailF() {
        emailInlineAlert.remove();
    }
    
    function validatePasswordB() {
        var char = 0;
        var numm = containsNumber(signUpPassword);
        if (signUpPassword.value.length != numm) {
            char = 1;
        }
        if ((numm == 0) || (char == 0) || (signUpPassword.value.length < 8)) {
            passwordInlineAlert.textContent = "* Password is not valid.";
            signUpPassword.insertAdjacentElement('afterend', passwordInlineAlert);
        } else {
            passwordInlineAlert.textContent = "";
        }
    }
    function validatePasswordF() {
        passwordInlineAlert.remove();
    }

    function validateRepPasswordB() {
        if (signUpPassword.value != signUpRepPassword.value) {
            repPasswordInlineAlert.textContent = "* Password must be the same.";
            signUpPassword.insertAdjacentElement('afterend', repPasswordInlineAlert);
        } else {
            repPasswordInlineAlert.textContent = "";
        }
    }
    function validateRepPasswordF() {
        repPasswordInlineAlert.remove();
    }

    var continueBtn = document.getElementById('continue-btn');
    continueBtn.addEventListener('click', btn);

    function btn() {
        if ((signUpEmail.value.length != 0) && (signUpPassword.value.length != 0) &&
            (emailInlineAlert.textContent == "") && (passwordInlineAlert.textContent == "") &&
            (signUpPassword.value == signUpRepPassword.value)) {
            alert('Login successfull');
            alert('Email: '+signUpEmail.value+'  Password: '+signUpPassword.value);
        } else {
            alert('Incorrect login');
        }
    }
}