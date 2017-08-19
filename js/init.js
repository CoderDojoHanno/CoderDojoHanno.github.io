$(function () {
  $("#header").coolfixed({
    dulay: 120,//アニメーション速度
    easing: "swing", //アニメーションイージング
    displayHeight: 0 //隠れた際に残す表示領域
  });
  $("#homeBottom div.panel-body").eq(1).height($("#homeBottom div.panel-body").eq(0).height());
});
