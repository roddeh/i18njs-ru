assert = function(val, expected) {
  if (val === expected) {
    return console.log("PASS -> " + val);
  } else {
    return console.error("\033[31m" + ("FAIL -> Expected: '" + expected + "' but got '" + val + "'") + "\033[0m");
  }
};



russianExt = require("../dist/i18n-ru")

let data = {
  "zero": "нет результатов",
  "one": "%n результат",
  "few": "%n результата",
  "many": "%n результатов",
  "other": "%n результаты"
}

assert(russianExt("%n results", 0, null, data), "нет результатов")
assert(russianExt("%n results", 1, null, data), "%n результат")
assert(russianExt("%n results", 4, null, data), "%n результата")
assert(russianExt("%n results", 5, null, data), "%n результатов")
assert(russianExt("%n results", 11, null, data), "%n результатов")
assert(russianExt("%n results", 14, null, data), "%n результатов")
assert(russianExt("%n results", 15, null, data), "%n результатов")
assert(russianExt("%n results", 44, null, data), "%n результата")
assert(russianExt("%n results", 100, null, data), "%n результатов")
assert(russianExt("%n results", 101, null, data), "%n результат")
assert(russianExt("%n results", 111, null, data), "%n результатов")