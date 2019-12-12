import { TestTimelineAppPage } from './app.po';

describe('test-timeline-app App', function() {
  let page: TestTimelineAppPage;

  beforeEach(() => {
    page = new TestTimelineAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
