const assert = require('assert');

var tpl = require("./template.ejs");
assert.equal(tpl({noun: "World"}), 'Hello, World!\n');

var tpl4 = require("./htmlmin.ejs");
assert.equal(tpl4({test: 123}), '123\n');

var tpl2 = require("!!../?delimiter=?!./template2.ejs");
assert.equal(tpl2({hobbies: ["food", "code"]}).trimRight(), "  I like food.\n  I like code.");
