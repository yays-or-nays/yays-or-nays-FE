describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have logo on welcome screen', async () => {
    await expect(element(by.id('logo'))).toBeVisible();
  });

});