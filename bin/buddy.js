#!/usr/bin/env node
const {program} = require("commander");
const setCommand = require("../src/commands/set");
const fetchCommand = require("../src/commands/fetch");

program
  .name("buddy")
  .version("1.0.0")
  .description("CLI tool to manage directory shortcuts");

program
  .command("set <shortcutName>")
  .description("Save the current directory as a shortcut")
  .action(setCommand);

program
  .command("fetch <shortcutName>")
  .description("Fetch the shortcuts path")
  .action(fetchCommand);

program.parse(process.argv);
