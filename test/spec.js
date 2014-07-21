var assert  = require('assert')
var testdom = require('../index')('<html><body><div id="div"></div></body></html>')

describe('testdom', function() {

    it('has a document', function() {
        assert(document != undefined)
    })

    it('has the passed markup', function() {
        var div = document.querySelectorAll('#div')
        assert(div.length, 1)
    })

    it('has localStorage', function() {
        assert(localStorage != undefined)
        assert(localStorage.setItem != undefined)
        assert(localStorage.removeItem != undefined)
    })

})