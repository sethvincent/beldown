# beldown

Create dom nodes from markdown inside tagged template strings using [bel](https://github.com/shama/bel) & [marked](https://github.com/chjj/marked).

## Install

```
npm install --save beldown
```

## Why

Because maybe you're working with [yo-yo](https://github.com/maxogden/yo-yo) or [choo](https://github.com/yoshuawuyts/choo) and want a way to easily turn markdown into dom nodes they can use.

## Example

```js
var md = require('beldown')

var html = md`
  # hi

  this is markdown
`

console.log(html.toString())
```

This returns:

```html
<div>
<h1 id="hi">hi</h1>
<p>this is markdown</p>
</div>
```

## Passing options to [marked](https://github.com/chjj/marked)

```js
var md = require('beldown')

md.setOptions({
  gfm: false
})

var html = md`~~Github flavored markdown is off~~`
console.log(html.toString())
```

This returns:

```html
<div>
<p>~~Github flavored markdown is off~~</p>
</div>
```

## Caveats:
The wrapping div is required because multiple root elements must be wrapped in an enclosing tag. I'm not sure if there's a great way around that.

Leading whitespace of each line is currently stripped. Maybe there's a case where that breaks things?

## License
[ISC](LICENSE.md)
