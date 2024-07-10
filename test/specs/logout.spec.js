import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login and Log out in Form Authentication', () => {
    //login to page

    //use correct username and password

    //check/confirm you have logged in expect??

    // get the log out button (do this in page object) - selector

    // click on log out button

    // confirm that I logged out expect??
    it('should login with valid credentials and check if it is a secure area', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.btnLogout).toBeExisting()
        await SecurePage.btnLogout.click()
        await expect(LoginPage.flashAlert).toHaveText(expect.stringContaining('You logged out of the secure area!'))
    })

    /*it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })

   it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })*/
})