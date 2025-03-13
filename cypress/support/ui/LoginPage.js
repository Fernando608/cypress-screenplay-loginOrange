class LoginPage {
    static url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    static usernameField = 'input[name="username"]';
    static passwordField = 'input[name="password"]';
    static loginButton = 'button[type="submit"]';
    static errorMessage = '.oxd-alert-content > p';
}
module.exports = { LoginPage };
