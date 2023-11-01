'use strict';

(() => {

  var RangeSelect = {
    template: '\
      <div class="conditions">\
        <p>{{ props.msg }}を入力してください。値の範囲は <b>{{ props.min }}{{ props.unit }}</b> ～ <b>{{ props.max }}{{ props.unit }}</b> です。</p>\
        <div class="text">\
          <label for="range">大きさ：</label>\
          <input type="range" id="range" name="range" :min="props.min" :max="props.max" :value="props.min" :step="props.step" @input="rangeSelect">\
          <section id="result">{{ props.min }}</section>\
        </div>\
      </div>\
    ',
    props: ['props'],
    methods: {
      rangeSelect() {
        this.$emit('range-select', this.props.prop, this.props.unit);
      }
    }
  }

  var range = new Vue({
    el: '#ranges',
    components: {
      'range-select': RangeSelect
    },
    methods: {
      rangeSelect(prop, unit) {
        var val = $('#range').val();
        document.getElementById('result').innerText = val;
        $('.change').css( prop, val + unit );
      }
    }
  });

})();
