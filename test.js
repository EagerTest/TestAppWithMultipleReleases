;(function(){
  var EagerTestAppWithMultipleReleases = {
    init: function(element, options) {
      element.innerHTML = '' +
        '<div style="background: ' + options.color + '; height: ' + options.size + '; width: ' + options.size + '">' +
          '<pre data="color">' +
            'Color: ' + options.color + '</div>' +
          '</pre>' +
          '<pre data="size">' +
            'Size: ' + options.size + '</div>' +
          '</pre>' +
        '</div>' +
      '';
    }
  };

  window.EagerTestAppWithMultipleReleases = EagerTestAppWithMultipleReleases;
}();
