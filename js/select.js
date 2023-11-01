'use strict';

(() => {

  var StyleComponent = {
    template: '<div class="style" :class="{ selected: value.isSelected }" @click="changeSelected">{{ title }}: {{ value.text }};</div>',
    props: ['title', 'value', 'index'],
    methods: {
      changeSelected() {
        this.$emit('change-selected', this.index, this.value.text, this.title);
      }
    }
  }

  var StylesList = {
    components: {
      'style-component': StyleComponent
    },
    template: '\
      <div>\
        <style-component\
          v-for="(value, index) in values"\
          :key="value.id"\
          :title="title"\
          :value="value"\
          :index="index"\
          @change-selected="changeSelected"\
        ></style-component>\
      </div>\
    ',
    props: ['title', 'values'],
    methods: {
      changeSelected(index, value, title) {
        this.$emit('change-selected', index, value, title);
      }
    }
  }

  var styles = new Vue({
    el: '#styles',
    components: {
      'styles-list': StylesList
    },
    data: {
      now: 0
    },
    methods: {
      changeSelected(index, value, title) {
        change(this.now, index, value, title);
        this.now = index;
      }
    }
  });

  function toPascalCase(str) {
    var els = str.split('-');
    var nels = els.map(el => {
      if (els.indexOf(el) != 0) {
        return el.charAt(0).toUpperCase() + el.slice(1);
      }
      return el;
    });
    return nels.join('');
  };

  function change(now, index, value, title) {
    $('.style').eq(now).removeClass('selected');
    $('.style').eq(index).addClass('selected');
    $('.change').css(toPascalCase(title), value);
  };

})();
