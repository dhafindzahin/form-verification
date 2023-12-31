const email = document.getElementsByName('email')[0];
const button = document.getElementById('button');


function addWarningText(warningContainer, warningText) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = warningText;
    warningContainer.appendChild(paragraph);
}

function verifyUsername() {
    const username = document.getElementsByName('username')[0].value;
    const warning = document.getElementById('username-warning');

    if (!/^[a-zA-Z0-9_]+$/g.test(username)) {
        addWarningText(warning, '*Username contain invalid character');
        return false;
    }
    if (username.length < 3) {
        addWarningText(warning, '*Username can\'t be less than 3 characters');
        return false;
    }
}

function verifyEmail() {
    const email = document.getElementsByName('email')[0].value;
    const warning = document.getElementById('email-warning');

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email)) {
        addWarningText(warning, '*Email is invalid');
        return false;
    }
}

function verifyPassword() {
    const password = document.getElementsByName('password')[0].value;
    const warning = document.getElementById('password-warning');

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z0-9@$!%*?&\.]{8,}$/g.test(password)) {
        addWarningText(warning, `*Password must contain:
        <br>
        - one lowercase letter 
        <br>
        - one uppecase letter
        <br>
        - one digit
        <br>
        - one special character`);
        return false;
    }
}

function removeWarning() {
    const warning = [...document.getElementsByClassName('warning-container')];
    warning.forEach(element => {
        element.innerHTML = '';
    });
}

button.addEventListener('click', () => {
    removeWarning();
    if (verifyUsername() !== false && verifyEmail() !== false && verifyPassword() !== false) {
        const formBox = document.getElementById('form-box');
        formBox.innerHTML = `<h1> SUCCESS </h1>
        <input type="button" value="Again" onclick="location.reload()">`;
    }
});