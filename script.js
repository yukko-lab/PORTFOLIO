const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');
const loading = document.getElementById('loading');


var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('.a').offset().top;//#area-2の位置まできたら
  var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
    //IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
    //ヘッダーが上から出現する
    $('#header').removeClass('UpMove'); //#headerにUpMoveというクラス名を除き
    $('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
    //ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
    $('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
//$(window).scroll(function () {
 // ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
//});

// ページが読み込まれたらすぐに動かしたい場合の記述
//$(window).on('load', function () {
  //ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
//});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
   // var headerH = $("#header").outerHeight(true);//headerの高さを取得    
    //$('#g-navi li a').click(function () {
  //var elmHash = $(this).attr('href'); 
  //var pos = $(elmHash).offset().top-headerH;//header分の高さを引いた高さまでスクロール
  //$('body,html').animate({scrollTop: pos}, 1000);
  //return false;
//});


document.addEventListener('DOMContentLoaded', function(){
  tabs = document.querySelectorAll('#js-tab li');
  for(i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  function tabSwitch(){
    tabs = document.querySelectorAll('#js-tab li');
    var node = Array.prototype.slice.call(tabs, 0);
    node.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');

    content = document.querySelectorAll('.tab-content');
    var node = Array.prototype.slice.call(content, 0);
    node.forEach(function (element) {
      element.classList.remove('active');
    });

    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    
    document.querySelectorAll('.tab-content')[index].classList.add('active');
  };
});





// 確認
//console.log(main);
//console.log(thumbs);
//↑constを使って、HTMLの要素を定数（箱）に格納しています。
//以前の作例で使った、getElementById や getElementsByClassName などは、idか、classか…など種類によって使い分ける必要がありますが、querySelector では、idもclassも一緒に扱うことができます。
//CSSでの書き方と同じように「#（idの場合）」「.（classの場合）」で区別できるので、視覚的にもidとclassが区別しやすいです。
//1つのみ取得するときは、querySelector、全て取得するときはquerySelectorAllを使います。「.thumb」クラスは、複数ありますので、querySelectorAllを使っています。


//thumbs.forEach(function(item, index) {
  //item.onclick = function() {
   // console.log(this.dataset.image);
  //  main.src = this.dataset.image;
 // }
//});
//クリックすると、コンソール上に、dataset-imageの内容が出力されます。

// マウスオーバー
//thumbs.forEach(function(item, index) {
  //item.onmouseover = function() {
    //main.src = this.dataset.image;
    //text.textContent = this.title;
 // }
//});




// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}


//画面が読み込まれたら animation を呼び出す
window.addEventListener('load', animation);

