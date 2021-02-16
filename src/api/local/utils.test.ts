import { getPageUrls } from './utils';

describe('The getPageUrls function', () => {
  it('constructs pagination URLs correctly', () => {
    const { prevPageUrl, nextPageUrl } = getPageUrls(
      10,
      50,
      712,
      'abc',
      'prospects/snoozed'
    );

    expect(prevPageUrl).toMatch(/prospects\/snoozed\/\?page=9$/);
    expect(nextPageUrl).toMatch(/prospects\/snoozed\/\?page=11$/);
  });

  it('leaves the previous page URL empty on the first page', () => {
    const { prevPageUrl, nextPageUrl } = getPageUrls(
      1,
      50,
      200,
      'abc',
      'prospects'
    );

    expect(prevPageUrl).toEqual('');
    expect(nextPageUrl).toMatch(/prospects\/\?page=2$/);
  });

  it('leaves the next page URL empty on the last page', () => {
    const { prevPageUrl, nextPageUrl } = getPageUrls(
      4,
      50,
      188,
      'abc',
      'prospects'
    );

    expect(prevPageUrl).toMatch(/prospects\/\?page=3$/);
    expect(nextPageUrl).toEqual('');
  });

  it("leaves both URLs empty if there is only one page's worth of results", () => {
    const { prevPageUrl, nextPageUrl } = getPageUrls(
      1,
      50,
      12,
      'abc',
      'prospects'
    );

    expect(prevPageUrl).toEqual('');
    expect(nextPageUrl).toEqual('');
  });
});
