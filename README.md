# slidev-theme-digital-fossil

[![NPM version](https://img.shields.io/npm/v/slidev-theme-digital-fossil?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-digital-fossil)

A (...) theme for [Slidev](https://github.com/slidevjs/slidev).

<!--
  Learn more about how to write a theme:
  https://sli.dev/guide/write-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>digital-fossil</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Palettes

Parchment is the default. For gold traces on solder-mask green, opt a deck
into the circuit palette:

<pre><code>---
theme: digital-fossil
themeConfig:
  palette: <b>circuit</b>
---</code></pre>

Slides get a tiled gold-trace background, silkscreen text, gold line-fossil
bullets and solder-pad numbering, and Mermaid diagrams switch to heavy gold
traces. Artwork drawn for light paper (dark-ink SVGs, parchment renders) needs
recolouring before a deck opts in. Preview it with `example-circuit.md`.

## Layouts

This theme provides the following layouts:

> TODO:

## Components

This theme provides the following components:

> TODO:

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
