#!/bin/sh

rm createEnum.package.tar.gz

tar -czvf createEnum.package.tar.gz \
  --transform='s,^,package/,'\
  --exclude='test*'\
  ./../../LICENCE ./../../README.md\
  ./../package.json ./../src
