import { Selector, ClientFunction } from 'testcafe';
import LoginPage from '../pageobject/login-page';
import IndexPage from '../pageobject/index-page';

const loginPage = new LoginPage();
const indexPage = new IndexPage();

fixture `Getting Started`
    .page `${loginPage.path}`;

test('Login to the website', async t => {
    const getLocation = ClientFunction(
        () => document.location.href
    );

    await t
        .setTestSpeed(1)
        .typeText(loginPage.email, 'mogoll92@gmail.com')
        .typeText(loginPage.password, '123456')
        .click(loginPage.submit)
        .expect(getLocation()).contains(indexPage.path);
});