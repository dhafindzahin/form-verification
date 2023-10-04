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
    }
    if (username.length < 3) {
        addWarningText(warning, '*Username can\'t be less than 3 characters');
    }
}

function verifyEmail() {
    const email = document.getElementsByName('email')[0].value;
    const warning = document.getElementById('email-warning');

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email)) {
        addWarningText(warning, '*Email is invalid');
    }
}

function verifyPassword() {
    const password = document.getElementsByName('password')[0].value;
    const warning = document.getElementById('password-warning');

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/g.test(password)) {
        addWarningText(warning, `*Password must contain:
        <br>
        - one lowercase letter 
        <br>
        - one uppecase letter
        <br>
        - one digit
        <br>
        - one special character`);
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
    verifyUsername();
    verifyEmail();
    verifyPassword();
});