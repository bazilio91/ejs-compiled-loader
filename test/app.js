var tpl = require("./template.ejs");
console.log(tpl({noun: "World"}));

var tpl2 = require("!!../?delimiter=?!./template2.ejs");
console.log( tpl2({hobbies: ["food", "code"]}).trimRight() );

var tpl3 = require("./subdir/parent.ejs");
console.log(tpl3({foo: "foo"}));
