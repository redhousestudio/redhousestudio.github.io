var feed = new Instafeed({
  get: 'user',
  userId: '1657841451',
  accessToken: '1657841451.5b0904f.41d07641ab6248dd90e3456afab10678',
  limit: 9,
  template: '<div class="col-sm-4 col-xs-4 studio-item"><a href="{{link}}" target="_blank"><img src="{{image}}" alt=""></a></div>'
});
feed.run();