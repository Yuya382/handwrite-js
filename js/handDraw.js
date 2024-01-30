var canvas = null;
var canvasHistory = {
  bookid: "",
  history: {},
};

/**
 * 画面の初期化を行う
 */
function drawInitialization(_height, _width) {
  canvas = new fabric.Canvas(
    "draw-able", //描画するエリアのIDを指定
    {
      isDrawingMode: true, // 手書き入力ON
      height: _height,
      width: _width,
    }
  );
  setPenBrush(); // ペンの色とか種類を指定
}

/**
 * ペンの設定
 */
function setPenBrush() {
  if (canvas.freeDrawingBrush) {
    const brush = canvas.freeDrawingBrush;//画面上におくオボジェクトの指定
    brush.color = "#FFFFFF"; // ブラシの色指定(#FFFFFFやrgb(255,255,255)等の書き方でも可)
    if (brush.getPatternSrc) {
      brush.source = brush.getPatternSrc.call(brush); // 設定を反映
    }
    brush.width = 3; // 線の太さを指定
  }
}

/**
 * マーカーの設定
 * ペンを太く・色を変更し、擬似的にマーカーっぽくしている
 */
function setMarkerBrush() {
  if (canvas.freeDrawingBrush) {
    const brush = canvas.freeDrawingBrush;
    brush.color = "rgba(231, 238, 97, 1)"; // ブラシの色指定(#FFFFFFやrgb(255,255,255)等の書き方でも可)
    if (brush.getPatternSrc) {
      brush.source = brush.getPatternSrc.call(brush); // 設定を反映
    }
    brush.width = 12; // 線の太さを指定
  }
}

/**
 * すべて削除する
 */
function clearPage() {
  canvas._objects = [];
  canvas.renderAll();
}

/**
 * 1画戻る
 */
function undoBrash() {
  canvas._objects.pop();
  canvas.renderAll();
}
