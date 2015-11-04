(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'calculator.calc\tulator
   :output-to "out/main.js"})
