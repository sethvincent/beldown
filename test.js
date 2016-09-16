var test = require('tape')
var md = require('./index')

test('hi', function (t) {
  var html = md`hi`
  t.equal(html.toString(), `<div>\n<p>hi</p>\n</div>`)
  t.end()
})

test('options', function (t) {
  var gfmOff = md`---
  gfm: false
  ---
  
  ~~cool~~
  `
  
  var gfmOn = md`---
  gfm: true
  ---
  
  ~~cool~~
  `
  
  t.equal(gfmOff.toString(), '<div>\n<p>~~cool~~</p>\n</div>')
  t.equal(gfmOn.toString(), '<div>\n<p><del>cool</del></p>\n</div>')
  t.end()
})
