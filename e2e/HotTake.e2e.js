describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should be able to select a category and vote on hot takes', async () => {
    await element(by.text('Get Started')).tap();
    await expect(element(by.text('Entertainment'))).toBeVisible();
    await expect(element(by.text('Food & Beverage'))).toBeVisible();
    await expect(element(by.text('Software Development'))).toBeVisible();
    await expect(element(by.text('Miscellaneous'))).toBeVisible();
    await element(by.text('Entertainment')).tap();
  });

});
