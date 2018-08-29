import { AngularJSSelector, waitForAngular } from 'testcafe-angular-selectors';
import { Selector } from 'testcafe';

export default class LoginPage {
    constructor () {
        this.path = 'https://24bas.com/login';

        this.form = Selector('form');
        this.email = Selector('#email');
        this.password = Selector('#password');
        this.submit = this.form.find('button.btn-primary');
        this.signUpLink = this.form.find('a[href=/register]');
    }   
}
