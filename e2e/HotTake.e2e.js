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
    await expect(element(by.id('image'))).toBeVisible();
    await element(by.id('card')).swipe('right')
  });

  it('should be able to see votes for and against a hot take after voting', async () => {
    await expect(element(by.text('And the people say...'))).toBeVisible();
    await expect(element(by.text('Next Hot Take'))).toBeVisible();
    await expect(element(by.id('yes-vote'))).toBeVisible();
    await expect(element(by.id('no-vote'))).toBeVisible();
  });

  it('should be able to see another hot take and vote again', async () => {
    await element(by.text('Next Hot Take')).tap();
    await expect(element(by.id('text'))).toBeVisible();
    await expect(element(by.id('image'))).toBeVisible();
    await element(by.id('card')).swipe('left')
    await expect(element(by.id('yes-vote'))).toBeVisible();
    await expect(element(by.id('no-vote'))).toBeVisible();
    await expect(element(by.text('And the people say...'))).toBeVisible();
    await expect(element(by.text('Next Hot Take'))).toBeVisible();
  });

  it('should be able to return to categories and start a different round of hot takes', async () => {
    await element(by.text('Categories')).tap();
    await element(by.text('Food & Beverage')).tap();
    await expect(element(by.id('text'))).toBeVisible();
    await expect(element(by.id('image'))).toBeVisible();
    await element(by.id('card')).swipe('right')
    await expect(element(by.id('yes-vote'))).toBeVisible();
    await expect(element(by.id('no-vote'))).toBeVisible();
    await expect(element(by.text('And the people say...'))).toBeVisible();
    await expect(element(by.text('Next Hot Take'))).toBeVisible();
  })

});
