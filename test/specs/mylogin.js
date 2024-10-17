// describe.skip('My first test', () => {
//    it.skip('Test Successful Login Functionality', async () => {
//     // navigate to a new URL
//     await browser.url('https://the-internet.herokuapp.com/login');

//     // Username
//     const username = await $('input#username');
//     // Enter Value
//     await username.setValue('tomsmith');

//     //Password
//     const password = await $('input#password');
//     // Enter Value
//     await password.setValue('SuperSecretPassword!');

//     //Submit Button
//     const submitBtn = await $('button[type="submit"]');
//     await submitBtn.click();

//     const message = await $('#flash');
//     await expect(message).toBeExisting();
//     console.log("What is the message?: " + await message.getText());
//     await expect(message).toHaveText(expect.stringContaining('You logged into a secure area!'));


//     await browser.pause(3000);



//     // receive url
//     console.log(await browser.getUrl()); // outputs: "https://webdriver.io"

//    });



//    it.skip('Test Unsuccessful Username Login Functionality', async () => {
//     // navigate to a new URL
//     await browser.url('https://the-internet.herokuapp.com/login');

//     // Username
//     const username = await $('input#username');
//     // Enter Value
//     await username.setValue('tomsmithHi');

//     //Password
//     const password = await $('input#password');
//     // Enter Value
//     await password.setValue('SuperSecretPassword!');

//     //Submit Button
//     const submitBtn = await $('button[type="submit"]');
//     await submitBtn.click();

//     const message = await $('#flash');
//     await expect(message).toBeExisting();
//     console.log("What is the message?: " + await message.getText());
//     await expect(message).toHaveText(expect.stringContaining('Your username is invalid!'));


//     await browser.pause(3000);



//     // receive url
//     console.log(await browser.getUrl()); // outputs: "https://webdriver.io"

//    });


//    it.skip('Test Unsuccessful Password Login Functionality', async () => {
//     // navigate to a new URL
//     await browser.url('https://the-internet.herokuapp.com/login');

//     // Username
//     const username = await $('input#username');
//     // Enter Value
//     await username.setValue('tomsmith');

//     //Password
//     const password = await $('input#password');
//     // Enter Value
//     await password.setValue('SuperSecretPassword!!!!!!');

//     //Submit Button
//     const submitBtn = await $('button[type="submit"]');
//     await submitBtn.click();

//     const message = await $('#flash');
//     await expect(message).toBeExisting();
//     console.log("What is the message?: " + await message.getText());
//     await expect(message).toHaveText(expect.stringContaining('Your password is invalid!'));


//     await browser.pause(3000);



//     // receive url
//     console.log(await browser.getUrl()); // outputs: "https://webdriver.io"

//    });
// });
