#!/bin/sh
SERVER=$1
DIRECTORY=$2
./minify.sh
jekyll b
cd _site
scp -r . $SERVER:$DIRECTORY
ssh $SERVER chmod a+rX $DIRECTORY
