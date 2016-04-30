#!/usr/bin/env node
"use strict";

var fbt = require("..");
var cli = require("meow")({
    pkg: "../package.json",
    alias: {
        wide: "widescreen"
    }
});

var number = cli.input[0];
var options = cli.flags;

console.log(fbt(number, options));
