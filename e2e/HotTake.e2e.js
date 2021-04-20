describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should be able to view all categories of hot takes', async () => {
    await element(by.text('Get Started')).tap();
    await expect(element(by.text('Entertainment'))).toBeVisible();
    await expect(element(by.text('Food & Beverage'))).toBeVisible();
    await expect(element(by.text('Software Development'))).toBeVisible();
    await expect(element(by.text('Miscellaneous'))).toBeVisible();
  });

  it('should be able to select a category and vote on hot takes', async () => {
    await element(by.text('Entertainment')).tap();
    await expect(element(by.id('text'))).toBeVisible();
    await element(by.id('card')).swipe('right')
  });

  it('should be able to see votes for and against a hot take after voting', async () => {
    await expect(element(by.text('Yes Votes'))).toBeVisible();
  });

});
