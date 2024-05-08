"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strokeSize = exports.strokeColor = exports.defaultToolOption = exports.default = exports.TextSize = exports.ShapeType = exports.MIN_SCALE = exports.MAX_SCALE = void 0;
var Tool;
(function (Tool) {
  Tool["Select"] = "Select";
  Tool["Pan"] = "Pan";
  Tool["Stroke"] = "Stroke";
  Tool["Shape"] = "Shape";
  Tool["Text"] = "Text";
  Tool["Image"] = "Image";
  Tool["Undo"] = "Undo";
  Tool["Redo"] = "Redo";
  Tool["Clear"] = "Clear";
  Tool["Eraser"] = "Eraser";
  Tool["Zoom"] = "Zoom";
  Tool["Save"] = "Save";
  Tool["Update"] = "Update";
  Tool["LazyUpdate"] = "LazyUpdate";
  Tool["Remove"] = "Remove";
  Tool["Background"] = "Background";
  Tool["RemoveBackground"] = "RemoveBackground";
})(Tool || (Tool = {}));
var ShapeType;
(function (ShapeType) {
  ShapeType["Rectangle"] = "Rectangle";
  ShapeType["Oval"] = "Oval";
})(ShapeType || (exports.ShapeType = ShapeType = {}));
var MAX_SCALE = exports.MAX_SCALE = 2;
var MIN_SCALE = exports.MIN_SCALE = 0.1;
var strokeSize = exports.strokeSize = [2, 4, 6];
var strokeColor = exports.strokeColor = ['#4a4a4a', '#f55b6c', '#f7c924', '#63d321', '#50e3c2', '#59b9ff', '#bd10e0', '#ffffff'];
var TextSize;
(function (TextSize) {
  TextSize[TextSize["Small"] = 12] = "Small";
  TextSize[TextSize["Default"] = 20] = "Default";
  TextSize[TextSize["Large"] = 28] = "Large";
})(TextSize || (exports.TextSize = TextSize = {}));
var defaultToolOption = exports.defaultToolOption = {
  strokeSize: strokeSize[1],
  strokeColor: strokeColor[0],
  shapeType: ShapeType.Rectangle,
  shapeBorderColor: strokeColor[0],
  shapeBorderSize: 4,
  textColor: strokeColor[0],
  textSize: TextSize.Default,
  defaultText: {
    id: 'umi.block.sketch.text.placeholder'
  }
};
var _default = exports.default = Tool;