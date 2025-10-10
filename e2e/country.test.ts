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

  it('should filter countries using the search bar', async () => {
    //activate search
    await element(by.id(TEST_IDS.SEARCH_BAR)).tap();

    //search
    await element(by.id(TEST_IDS.SEARCH_INPUT)).typeText('Denmark');

    // check if Denmark is visible
    await expect(
      element(by.id(TEST_IDS.COUNTRY_ITEM_ID('Denmark'))),
    ).toBeVisible();

    // no results scenario
    await element(by.id(TEST_IDS.SEARCH_INPUT)).clearText();
    await element(by.id(TEST_IDS.SEARCH_INPUT)).typeText('NonExistentCountry');
    await expect(element(by.id(TEST_IDS.NO_COUNTRIES_FOUND))).toBeVisible();
  });
});
