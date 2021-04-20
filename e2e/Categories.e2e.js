describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should route to a category from Get Started', async () => {
    await element(by.text('Get Started')).tap();

    await expect(element(by.text('Pick a Category'))).toBeVisible();
    await expect(element(by.text('Food & Beverage'))).toBeVisible();
    await expect(element(by.text('Entertainment'))).toBeVisible();
    await expect(element(by.text('Software Development'))).toBeVisible();
    await expect(element(by.text('Miscellaneous'))).toBeVisible();
    await element(by.text('Software Development')).tap();
  });

  it('should route to a category from How To', async () => {
    await element(by.text('About')).tap();
    await element(by.text('How To')).tap();
    await element(by.id('howTo')).swipe('left');
    await element(by.id('howTo')).swipe('left');
    await element(by.id('howTo')).swipe('left');
    await element(by.text('Get Started')).tap();

    await expect(element(by.text('Pick a Category'))).toBeVisible();
    await expect(element(by.text('Food & Beverage'))).toBeVisible();
    await expect(element(by.text('Entertainment'))).toBeVisible();
    await expect(element(by.text('Software Development'))).toBeVisible();
    await expect(element(by.text('Miscellaneous'))).toBeVisible();
  });

  it('should route to a category from the Nav Bar', async () => {
    await element(by.text('About')).tap();
    await element(by.text('Categories')).tap();

    await expect(element(by.text('Pick a Category'))).toBeVisible();
    await expect(element(by.text('Food & Beverage'))).toBeVisible();
    await expect(element(by.text('Entertainment'))).toBeVisible();
    await expect(element(by.text('Software Development'))).toBeVisible();
    await expect(element(by.text('Miscellaneous'))).toBeVisible();
  });
});
