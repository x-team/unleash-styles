#!/bin/bash
cd styleguide
git init
git config --global user.email "karolsojko@gmail.com"
git config --global user.name "karolsojko"
cp ../CNAME ./CNAME
git add .
git commit -m "Deployed to Github Pages"
git push -f "https://github.com/x-team/unleash-styles" master:gh-pages
