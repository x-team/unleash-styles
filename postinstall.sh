#!/bin/bash

if [ $NODE_ENV == development ]; then
  yarn styleguide:build
fi;
