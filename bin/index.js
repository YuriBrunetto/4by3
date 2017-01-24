#!/usr/bin/env node
'use strict';

const fbt = require('..');
const cli = require('meow')({
  pkg: '../package.json',
  alias: {
    wide: 'widescreen',
    ultrawide: 'ultra'
  }
})

const number = cli.input[0]
const options = cli.flags

console.log(fbt(number, options))
