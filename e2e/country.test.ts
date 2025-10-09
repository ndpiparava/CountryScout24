import {TEST_IDS} from '@CountryScout24/__specs__/testIDs';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id(TEST_IDS.COUNTRY_LIST))).toBeVisible();
  });

  it('should show detail screen after selecting country(Denmark)', async () => {
    await element(by.id(TEST_IDS.COUNTRY_ITEM_ID('Denmark'))).tap();
    await expect(element(by.id(TEST_IDS.AREA_DETAIL))).toBeVisible();
  });

  it('should go back to list screen on back press', async () => {
    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.id(TEST_IDS.BACK_BUTTON)).tap();
    }
    await expect(element(by.id(TEST_IDS.COUNTRY_LIST))).toBeVisible();
  });
});
