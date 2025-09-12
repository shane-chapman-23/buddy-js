#!/usr/bin/env node
const {program} = require("commander");
const setCommand = require("../src/commands/set");

program
  .name("buddy")
  .version("1.0.0")
  .description("CLI tool to manage directory shortcuts");

program
  .command("set <shortcutName>")
  .description("Save the current directory as a shortcut")
  .action(setCommand);

program.parse(process.argv);
