const formElement = document.getElementById('registration-form');

const userNameInputElement = document.getElementById('username');
const nameInputElement = document.getElementById('name');
const familyNameInputElement = document.getElementById('family-name');
const emailInputElement = document.getElementById('email');
const passwordInputElement = document.getElementById('password');
const postalCodeInputElement = document.getElementById('postal-code');

formElement.addEventListener('submit', function (event) {

    event.preventDefault();

    const errorResponses = document.querySelectorAll('.error');
    errorResponses.forEach((errorResponse) => {
        errorResponse.remove();
    });

    const successResponse = document.getElementById('success');
    successResponse.style.display = 'none';

    const userNameValue = userNameInputElement.value;
    const nameValue = nameInputElement.value;
    const familyNameValue = familyNameInputElement.value;
    const emailValue = emailInputElement.value;
    const passwordValue = passwordInputElement.value;
    const postalCodeValue = postalCodeInputElement.value;

    let isAvailableError = false;

    if (isWrongFormatUserName(userNameValue)) {
        visualizeError(userNameInputElement, 'Невалидно потребителско име. Трябва да е между 3 и 10 симовла.');
        isAvailableError = true;
    }

    if (isWrongFormatName(nameValue)) {
        visualizeError(nameInputElement, 'Невалидно име. Трябва да бъде максимум 50 символа.');
        isAvailableError = true;
    }

    if (isWrongFormatName(familyNameValue)) {
        visualizeError(familyNameInputElement, 'Невалидна фамилия. Трябва да бъде максимум 50 символа.');
        isAvailableError = true;
    }

    if (isWrongFormatEmail(emailValue)) {
        visualizeError(emailInputElement, 'Невалиден имейл. Трябва да въведете валиден имейл формат.');
        isAvailableError = true;
    }

    if (isWrongFormatPassword(passwordValue)) {
        visualizeError(passwordInputElement, 'Невалидна парола. Паролата трябва да бъде между 6 и 10 символа и трябва да включва поне една главна буква, малка буква и цифра.');
        isAvailableError = true;
    }

    if (postalCodeValue !== "" && isWrongFormatPostalCode(postalCodeValue)) {
        visualizeError(postalCodeInputElement, 'Невалиден пощенски код. Трябва да бъде във формат 11111-1111 (само цифри) или формат 1111(само цифри).');
        isAvailableError = true;
    }

    if (isAvailableError) {
        return;
    }

    doesUserAlreadyExist(userNameValue)
        .then(userNameFound => {
            if (userNameFound) {
                visualizeError(userNameInputElement, 'Нввалидно потребителско име. Вече съществува потребител с такова потребителско име.');
            } else {
                document.getElementById('success').style.display = 'block';
            }
        })
});

function visualizeError(inputElementToDisplayAfter, errorMessage) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = errorMessage;

    if (errorDiv.nextSibling) {
        const nextSiblingInputElement = errorDiv.nextSibling;
        inputElementToDisplayAfter.parentNode.insertBefore(errorDiv, nextSiblingInputElement);
    } else {
        inputElementToDisplayAfter.parentNode.appendChild(errorDiv);
    }
}

function isWrongFormatUserName(username) {
    return (username.length < 3 || username.length > 10);
}

function isWrongFormatName(name) {
    return (name === "" || name.length > 50);
}

function isWrongFormatEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !(emailRegex).test(email);
}

function isWrongFormatPassword(password) {

    //Check for length
    if (password.length < 6 || password.length > 10) {
        return true;
    }

    //Check for at least one lowercase letter
    if (password === password.toLowerCase()) {
        return true;
    }

    //Check for at least one uppercase letter
    if (password === password.toUpperCase()) {
        return true;
    }

    //Check for at least one digit
    if (!/[0-9]/.test(password)) {
        return true;
    }

    //If got here, then password is in valid format
    return false;
}

function isWrongFormatPostalCode(postalCode) {

    //Check for required exact length
    if (postalCode.length !== 4 && postalCode.length !== 10) {
        return true;
    }

    //If with length four, check for containing only digits
    if (postalCode.length === 4 && !/^\d+$/.test(postalCode)) {
        return true;
    }

    //Check for '-' at right position and only numbers on other positions
    if (postalCode.length === 10 && (postalCode.substring(4, 5) !== '-' || !/^\d+$/.test(postalCode.substring(0, 4)) ||
        !/^\d+$/.test(postalCode.substring(5, 10)))) {
        return true;
    }

    //If got here, then postalCode is in valid format
    return false;
}

function doesUserAlreadyExist(username) {
    return fetch(' https://jsonplaceholder.typicode.com/users')
        .then(answer => answer.json())
        .then(records => {
            const usernamesCollection = records.map(user => user.username);
            return usernamesCollection.includes(username);
        })
        .catch(error => {
            return false;
        });
}