module.exports = function(markup, additional_globals) {
    if (typeof document !== 'undefined') return
    var jsdom           = require("jsdom").jsdom
    global.document     = jsdom(markup || '')
    global.window       = document.parentWindow
    global.navigator    = window.navigator
    global.HTMLElement  = window.HTMLElement
    if (typeof additional_globals == 'object') Object.keys(additional_globals).forEach(function(global_key) {
        global[global_key] = require(additional_globals[global_key])
    })
}
