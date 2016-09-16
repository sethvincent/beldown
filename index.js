var marked = require('marked')
var bel = require('bel')
var fm = require('front-matter')

module.exports = function beldown (strings) {
  var parts = []
  var l = strings.length
  var i = 0
  
  // use front-matter to get options for marked
  if (fm.test(strings[i])) {
    var content = fm(strings[i])
    var opts = content.attributes
    marked.setOptions(opts)
    strings = [].concat(strings)
    strings[i] = content.body
  }

  // strip leading whitespace (hopefully this doesn't break anything)
  for (i; i < l; i++) {
    var lines = strings[i].trim().split('\n')
    var str = lines.map(function (line) {
      return line.replace(/^\s+/gm, '');
    }).join('\n')
    parts[i] = i === 0 ? '<div>\n' + marked(str) : marked(str)
  }

  // Can't think of a way around wrapping the markdown in a div
  // multiple root elements must be wrapped in an enclosing tag
  parts.push('</div>')
  arguments[0] = parts
  return bel.apply(null, arguments)
}
