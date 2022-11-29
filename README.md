# BEST Training Weekend website with [Astro](https://astro.build)

WoOoOo!

Alright, we switched from WordPress to plain old HTML and now from plain old HTML to slightly more organized "HTML", with the help of [Astro](https://astro.build)! Some parts are written as Preact components. Don't expect a huge load of consistency (e.g. BTW "first section" is a component, HTS "first section" is inlined in the page, even though they serve the same purpose and have the same structure) but the code should at least be half-sane :)

Development version deployed on [https://btw-dev.paxule.cf](https://btw-dev.paxule.cf)

# Getting started

Clone this repo and run `npm install`.

## When developing, do

```
npm run dev
```

or use the fancy button in VS Code that this supposedly creates.

## When deploying, do

```
npm run build
```

and upload the contents of the created `dist/` folder to the web server. Don't commit `dist/` :)

# I want to...

## ...Add a new page

Create a file in `src/pages`. It can be a markdown file (see `*.md` for the structure) or an `.astro` file (or a bunch of others, see the astro docs. It can also be plain `.html` but we're shooting ourselves in the foot if we do that)

## ...Change the layout common to all pages (navbar, footer, colors)

Check out `src/layours/Layout.astro`!

## ...Add some images / resources

Add them to `public/` and then just reference them as if they're in the root directory:

```html
<img src='hello.png' /> goes to public/hello.png
```

## ...Make a JS component

Check out the Astro documentation :)

## ...Break free

```
I want to break free
I want to break free from your lies
You're so self-satisfied, I don't need you
```
