#!/usr/bin/env node
"use strict";

var fbt = require("..");
var cli = require("meow")({
    pkg: "../package.json",
    help: [
        "Usage",
        " $ 4by3 <number> [options]"
    ].join("\n")
});

var number = cli.input[0];

console.log(fbt(number));
