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
const chalk = require('chalk')

const number = cli.input[0]
const options = cli.flags

const msg = chalk.magenta(fbt(number, options))

console.log(msg)
