$('input[name="display"]').change(function() {
  var val = $(this).val();
  $('.output').toggleClass('grid');
});
