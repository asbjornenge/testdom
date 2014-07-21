# Testdom

Testdom is a [jsdom](https://github.com/tmpvar/jsdom) wrapper to help developers write test code that works both in the browser and in node.

It works by checking if a global document exists in it's current environment. If it does it bails out and expects the browser to provide all available browser globals. If a global document does not exists, it will create one using jsdom. It will also create other appropriate browser globals using jsdom and a few other libraries.

**WANTED!** *PRs and issues with missing globals and appropriate libraries.*

## Install

    npm install testdom

## Usage

    require('testdom')('<html><body></body></html>')
    console.log(document)

## Testling

Testling uses [browserify](http://browserify.org/) to create a browser compatible bundle of your javascripts. Unfortunately jsdom is not compatible with browserify, so we have to tell testling to ignore it.

In your <code>package.json</code> add a *browser* field and add tell browserify to ignore *jsdom*.

    $ vi package.json
    
    ...
    "browser" : {
        "jsdom" : false
    },
    ...

Since testdom only tries to require jsdom if no document exists; the browser will never reach that code and we are good. The tests will use the browser's DOM.

enjoy.