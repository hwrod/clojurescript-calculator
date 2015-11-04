// Compiled by ClojureScript 1.7.145 {}
goog.provide('calculator.calculator');
goog.require('cljs.core');
calculator.calculator.calculation = document.getElementById("calculation");
calculator.calculator.operators = document.getElementsByClassName("operator");
goog.object.forEach(calculator.calculator.operators,(function (operator){
return operator.onclick = calculator.calculator.calculate = (function calculator$calculator$calculate(){
calculator.calculator.a = document.getElementById("a").value;

calculator.calculator.b = document.getElementById("b").value;

calculator.calculator.result = eval([cljs.core.str(calculator.calculator.a),cljs.core.str(operator.value),cljs.core.str(calculator.calculator.b)].join(''));

return calculator.calculator.calculation.value = calculator.calculator.result;
});
}));

//# sourceMappingURL=calculator.js.map