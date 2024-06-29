$(".openbtn").click(function () {//ボタンがクリックされたら
  $("#menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
$(".menu__link").click(function() { // リンクがクリックされたら
  $("#menu").removeClass('panelactive'); // ナビゲーションからpanelactiveクラスを削除
});