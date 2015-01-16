module.exports = function(markup, es6) {
    if (typeof document !== 'undefined') return
    var jsdom           = require("jsdom").jsdom
    global.document     = jsdom(markup || '')
    global.window       = document.createWindow()
    global.navigator    = window.navigator
    global.HTMLElement  = window.HTMLElement
    global.localStorage = require('localStorage')

    if (es6) {
      require('es6-promise').polyfill();
    }
}
