# removeNestedAttrs

Remove attributes nested within a block of HTML.

Uses jquery.

## Usage

```html
<div id="content" style="border: 1px solid red;">
	<figure style="border: 1px solid #111; margin: 1em; padding: 2px; border-radius: 2px;">
		<img src="http://placehold.it/350x150" alt="" width="350" height="150">
		<figcaption>Placeholder image</figcaption>
	</figure>
</div>
```

```js
removeNestedAttrs( '#content', [ 'style', 'width', 'height' ]);
```

will result in:

```html
<div id="content" style="border: 1px solid red;">
	<figure>
		<img src="http://placehold.it/350x150" alt="">
		<figcaption>Placeholder image</figcaption>
	</figure>
</div>
```

Note that attributes are only removed from descendent elements.
The element itself is untouched.
