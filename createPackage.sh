#!/bin/sh

rm createEnum.package.zip

zip -r createEnum.package.zip . \
  -x node_modules/\*\
  -x .git/\*\
  -x *test\*\
  -x ".gitignore"\
  -x *test/\*\
  -x "createPackage.sh"
