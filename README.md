stamm-luchs
===========

webcontent of http://stamm-luchs.de
   

## Setup
Install node.js/npm.    
    
Then install grunt followed by all npm modules
```sh
npm install grunt -g
cd path/to/project/
npm install
```
   
Generate the page using
```sh
grunt
```
   
will create a new folder `/bin` which contains all files that need to be uploaded.

## Warning
Not included are resources as photos and music.   
`res/music` and `res/photos`
Those need to be manually copied into `source/res` since they're too large to check into this repository.
