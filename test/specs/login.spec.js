import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
//Imports the class over from the testData.js file
import { testValues } from '../data/testData.js'

describe('Attempting to Login in using username and password', () => {
    it('should login with valid username and password', async () => {
        await LoginPage.open()

        await LoginPage.login(testValues.positiveTest.userName, testValues.positiveTest.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    });

    it('should fail to login using wrong username', async () => {
        await LoginPage.open()

        await LoginPage.login(testValues.negativeTest.userName, testValues.positiveTest.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your username is invalid!'))
    });

    it('should fail to login using wrong password', async () => {
        await LoginPage.open()

        await LoginPage.login(testValues.positiveTest.userName, testValues.negativeTest.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your password is invalid!'))
    });

    it('should fail to login using wrong username and password', async () => {
        await LoginPage.open()

        await LoginPage.login(testValues.negativeTest.userName, testValues.negativeTest.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your username is invalid!'))
    });
});
