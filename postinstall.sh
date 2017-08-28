#!/bin/bash

if [ $NODE_ENV ]; then
  if [ $NODE_ENV == development ]; then
    yarn styleguide:build
  fi
fi
