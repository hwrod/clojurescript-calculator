(ns calculator.calculator)

(set! calculation (.getElementById js/document "calculation"))

(set! operators (.getElementsByClassName js/document "operator"))

(goog.object/forEach operators
 (fn [operator]
  (set!  (.-onclick operator)
   (defn calculate []
    (set! a (.-value (.getElementById js/document "a")))
    (set! b (.-value (.getElementById js/document "b")))
    (set! result (js/eval (str a (.-value operator) b)))
    (set! (.-value calculation) result)))))
