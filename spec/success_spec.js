describe('accessibility', function() {
  it('should get a file to test', function() {
    browser.get('index.html');

    element.all(by.css('input')).then(function(inputs) {
      expect(inputs.length).toEqual(2);
    });
  });
});
