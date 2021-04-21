describe("App's Landing Page", () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should have logo on welcome screen', async () => {
    await expect(element(by.id('logo'))).toBeVisible();
  });

  it("should diplay two options for the user to navigate: 'How To' and 'Get Started'", async () => {
    await expect(element(by.text('How To'))).toBeVisible();
    await expect(element(by.text('Get Started'))).toBeVisible();
  });

  it("should display a tutorial of the app when a user cliks on 'How To' button", async () => {
    await element(by.text('How To')).tap();
    await expect(element(by.text('Welcome to HotTakes!'))).toBeVisible();
    await expect(element(by.id('logo'))).toNotExist();
  });

  it("should be able to swipe through the tutorial", async () => {
    await element(by.id('tutorial')).swipe('left');
    await expect(element(by.text("Once you click 'Get Started', you will be taken to the main dashboard where you will see a list of categories."))).toBeVisible();
    await element(by.id('tutorial')).swipe('left');
    await expect(element(by.text("After you have selected a category, you will be prompted the hot takes to give your Einstein-esque opinions!"))).toBeVisible();
    await element(by.id('tutorial')).swipe('left');
    await expect(element(by.text("Now you know what to do, so let's get HotTake'n!"))).toBeVisible();
  });

  it("should be able to go to the categories page on the last slide of the tutorial", async () => {
    await element(by.text('Get Started')).tap();
    await expect(element(by.text('Pick a Category'))).toBeVisible();
  });

  it("should be able to travel back to the landing page using the footer navigation", async () => {
    await element(by.text('About')).tap();
    await expect(element(by.id('logo'))).toBeVisible();
  });

  it("should be able to go to categories page straight from landing page without going through tutorial", async () => {
    await element(by.text('Get Started')).tap();
    await expect(element(by.text('Pick a Category'))).toBeVisible();
  })
});
