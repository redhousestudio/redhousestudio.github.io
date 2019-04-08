var feed = new Instafeed({
  get: 'user',
  userId: '4169714895',
  accessToken: '4169714895.4727e70.a1d858cd642c42eab46cc994d168262d',
  limit: 12,
  template: '<div class="col-sm-4 col-xs-4 studio-item"><a href="{{link}}" target="_blank"><img src="{{image}}" alt=""></a></div>'
});
feed.run();