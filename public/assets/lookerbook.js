//(function(d) {
  if (!($ = window.jQuery)) {
    script = document.createElement('script');
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = startHacking;
    document.body.appendChild(script);
  }
  else {
    startHacking();
  }

  function startHacking() {
    alert('hacking!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    var selectors = ['#lk-nav-main','.alert-banner','#lk-control', '.lk-bar.filters', '.lk-vis-table-stuck-header-wrapper'];
    var selector;

    for(var i = 0; i< selectors.length; i++) {
      selector = selectors[i];

      if($(selector).is(':visible')) {
        $(selector).hide();
      } else {
        $(selector).show();
      }
    }

    $('#lk-title').css('background', '#f6f8fa');
    $('#lk-title').css('color', 'black');
  }
//}(document));
