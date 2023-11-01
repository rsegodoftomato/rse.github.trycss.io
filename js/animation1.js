'use strict';

(() => {

  var id = $('input[type="text"]').attr('id');

  $('#btn').click(function() {
    var val = $('#' + id).val();
    if (val.match('[0-9]*(ms)$')) {
      var time = parseFloat(val.split('').slice(0, -2).join(''));
      if (time <= 10000) {
        $('#' + id).css({ background: '#fff' });
        move(time, id);
      } else {
        $('#' + id).css({ background: 'rgb(250, 206, 206)' });
      }
    } else if (val.match('[0-9]*s$')) {
      var time = parseFloat(val.split('').slice(0, -1).join('')) * 1000;
      if (time <= 10000) {
        $('#' + id).css({ background: '#fff' });
        move(time, id);
      } else {
        $('#' + id).css({ background: 'rgb(250, 206, 206)' });
      }
    } else {
      $('#' + id).css({ background: 'rgb(250, 206, 206)' });
    }
  });

  function move(time, id) {
    $('#btn').prop('disabled', true);
    $('.change').css({ height: '200px', marginLeft: '100px' });
    if (id === 'delay') {
      $('.waiting').css({ display: 'block' });
      setTimeout(function() {
        $('.waiting').css({ display: 'none' });
        animate(3000);
      }, time);
    } else {
      animate(time);
    }
  }

  function animate(time) {
    $('.change').animate({ height: '300px', marginLeft: '500px' }, {
      duration: time,
      complete: function() {
        $('#btn').prop('disabled', false);
      }
    });
  }

})();
