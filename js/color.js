'use strict';

(() => {

  var ColorSelect = {
    template: '\
      <div class="c-select">\
        <div id="text">色を選択</div>\
        <input type="color" id="color" @input="colorSelect">\
      </div>\
    ',
    props: ['prop'],
    methods: {
      colorSelect() {
        this.$emit('color-select', this.prop);
      }
    }
  }

  var colors = new Vue({
    el: '#colors',
    components: {
      'color-select': ColorSelect
    },
    methods: {
      colorSelect(prop) {
        var color = $('#color').val();
        $('.change').css( prop, color );
      }
    }
  });

})();
