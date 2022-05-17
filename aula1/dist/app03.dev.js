"use strict";

var colecao = require("./colecoes"); //Obtendo um subconjunto da lista de nomes, com base em um critério.


var filtroNomes = colecao.nomes.filter(function (n) {
  return n.includes('le');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = filtroNomes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var nome = _step.value;
    console.log("Nome: ".concat(nome));
    console.log('*********************');
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}