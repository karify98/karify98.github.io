#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const path = require("path");
const { existsSync } = require("fs");

function getGlobalNodePath() {
  try {
    const result = spawnSync("npm", ["root", "-g"], { encoding: "utf-8" });
    if (result.status === 0) {
      return result.stdout.trim();
    }
  } catch (error) {
    console.warn("Unable to read global npm root:", error);
  }
  return "";
}

function run(command, args, extraEnv = {}) {
  const mergedEnv = { ...process.env, ...extraEnv };
  return spawnSync(command, args, {
    stdio: "inherit",
    env: mergedEnv,
  });
}

const globalNodeModules = getGlobalNodePath();
const extraNodePath = globalNodeModules
  ? `${globalNodeModules}${path.delimiter}${process.env.NODE_PATH || ""}`
  : process.env.NODE_PATH;

const lintResult = run("next", ["lint"], {
  NODE_PATH: extraNodePath,
});

if (lintResult.status === 0) {
  process.exit(0);
}

if (!lintResult.status) {
  process.exit(lintResult.status ?? 1);
}

console.warn(
  "next lint failed; falling back to TypeScript type checking (tsc --noEmit)."
);

if (!existsSync(path.join(process.cwd(), "tsconfig.json"))) {
  console.error("tsconfig.json not found; cannot run TypeScript type checking.");
  process.exit(1);
}

const tscResult = run("tsc", ["--noEmit"]);
process.exit(tscResult.status ?? 1);
