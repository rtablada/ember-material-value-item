# Ember-material-value-item

This addon provides a `mdl-value-item` to work similarly to the `mdl-menu-item`, but pass a value on click instead of the component instance.
This can be helpful for doing things like replacing a `select` box with a Material Lite menu.

## Install

```sh
ember install ember-material-lite ember-material-value-item
```

## Usage

This example shows making a pseudo-select using `mdl-menu-item` and `mdl-menu`:

```hbs
<label>Favorite Book: <strong>{{model.book}}</strong></label>
{{#mdl-menu}}
  {{#mdl-value-item action=(mut model.book) value='The Hobbit'}}The Hobbit{{/mdl-value-item}}
  {{#mdl-value-item action=(mut model.book) value='The Martian'}}The Martian{{/mdl-value-item}}
  {{#mdl-value-item action=(mut model.book) value='The Catcher in the Rye'}}The Catcher in the Rye{{/mdl-value-item}}
{{/mdl-menu}}
```
