'use strict';

(() => {

  var AList = {
    template: '<a :href="path">{{ title }}</a>',
    props: ['title', 'path']
  }

  var CList = {
    // template: '<a :href="path">{{ title }}</a>',
    template: '<p>{{ title }}</p>',
    props: ['title', 'path']
  }

  var HeaderComponent = {
    template: '\
    <header>\
      <a :href="homepath"><img :src="imgpath" alt="馬のアイコン"><p>RSE CSS Page</p></a>\
      <form :action="actionpath" method="GET" class="inq">\
        <input type="search" name="search" placeholder="キーワードを入力">\
        <input type="submit" name="submit" value="検索">\
      </form>\
    </header>\
    ',
    props: ['homepath', 'imgpath', 'actionpath']
  }

  var indexes = new Vue({
    el: '#indexes',
    components: {
      'a-list': AList,
      'c-list': CList
    },
    data: {
      alists: [
        { id: 1, title: 'A', path: '#a' },
        { id: 2, title: 'B', path: '#b' },
        { id: 3, title: 'C', path: '#c' },
        { id: 4, title: 'D', path: '#d' },
        { id: 5, title: 'E', path: '#e' },
        { id: 6, title: 'F', path: '#f' },
        { id: 7, title: 'G', path: '#g' },
        { id: 8, title: 'H', path: '#h' },
        { id: 9, title: 'I', path: '#i' },
        { id: 10, title: 'J', path: '#j' },
        { id: 11, title: 'K', path: '#k' },
        { id: 12,title: 'L', path: '#l' },
        { id: 13, title: 'M', path: '#m' },
        { id: 14, title: 'N', path: '#n' },
        { id: 15, title: 'O', path: '#o' },
        { id: 16, title: 'P', path: '#p' },
        { id: 17, title: 'Q', path: '#q' },
        { id: 18, title: 'R', path: '#r' },
        { id: 19, title: 'S', path: '#s' },
        { id: 20, title: 'T', path: '#t' },
        { id: 21, title: 'U', path: '#u' },
        { id: 22, title: 'V', path: '#v' },
        { id: 23, title: 'W', path: '#w' },
        { id: 24, title: 'X', path: '#x' },
        { id: 25, title: 'Y', path: '#y' },
        { id: 26, title: 'Z', path: '#z' },
        { id: 27, title: '他', path: '#other' }
      ],
      clists: [
        { id: 1, title: '開発中です。', path: '#' }
      ]
    }
  });

  var header = new Vue({
    el: '#header',
    components: {
      'header-component': HeaderComponent
    },
    data: {
      homepath: 'index.html',
      imgpath: 'images/horse.png',
      actionpath: ''
    }
  });

  function toggle() {
    $('input[name="display"]').change(function() {
      var val = $(this).val();
      $('.output').toggleClass('grid');
    });
  }

})();
