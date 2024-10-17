import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

// describe.skip('My unsuccessful Login application', () => { //describe is a test suite
//     //Username incorrect, password correct.
//     it('should reject the invalid username', async () => { //it are individual tests
//         await LoginPage.open()

//         await LoginPage.login('tomsmithhiafafaefsef', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your username is invalid!'))
//     })
//     //Username correct, password incorrect.
//     it('should reject the invalid password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!!!!!!!!!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your password is invalid!'))
//     })
//     //Username and password incorrect.
//     it('should reject the invalid username and password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmithhiafafaefsef', 'SuperSecretPassword!!!!!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your username is invalid!'))
//     })
// })
