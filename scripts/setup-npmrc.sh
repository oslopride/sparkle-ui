#!/bin/bash

FILE="./.npmrc"

if [ -f "$FILE" ] && [ -z "$CI" ]; then
  echo "⚠️ A file was already present and CI environment was not true"
else
  echo "//npm.pkg.github.com/:_authToken=\${NPM_TOKEN}" >> $FILE
  echo "🦄 .npmrc was changed to:" 
  cat $FILE
fi