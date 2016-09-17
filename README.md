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

Use YAML at the top of the markdown string to pass options to marked.

```js
var md = require('beldown')

var html = md`---
  gfm: false
  ---

  ~~Github flavored markdown is off~~
`
```

This returns:

```html
<div>
<p>~~Github flavorded markdown is off~~</p>
</div>
```

To turn gfm back on you would do this:

```js
var html = md`---
  gfm: true
  ---

  ~~Github flavored markdown is back on~~
`
```

This returns:

```html
<div>
<p><del>Github flavorded markdown is back on</del></p>
</div>
```

## Caveats:
The wrapping div is required because multiple root elements must be wrapped in an enclosing tag. I'm not sure if there's a great way around that.

Leading whitespace of each line is currently stripped. Maybe there's a case where that breaks things?

## License
[ISC](LICENSE.md)
