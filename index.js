var marked = require('marked')
var bel = require('bel')

module.exports = function beldown (strings) {
  var parts = []
  var l = strings.length
  var i = 0

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
