# employee-recognition

Based on the Vue 3 Template for Vite.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Introduction

This is a mini-site for Obfuscated Company's Employee Recognition Program. It is built with Vue 3 and Vite. Employees can nominate fellow employees with the form on this page, and then view those nominations in a list that is also represented as an animated tree graphic.

## Sample nominations

The demo does not call Airtable. Forty-two fictional nominations live in `src/data/mockNominees.js` and load into the Vuex nominees store. A nomination submitted in the browser is added to that store for the current session. 

## Public Folder

The public folder contains any file that should be served as-is. This includes the favicon, videos, images, downloadable documents, fonts, the Netlify redirect file, etc.

## Assets

Assets include images and styles to be transformed. This project will contain a mixture of styles written in Scss and placed in this folder, as well as component level styles. 

## Components

Vue components are organized into a few different folders.

- content: These are components that are used to display content. They are mostly not interactive. 
- icons: These are SVG icons that are used in the project. They are imported as Vue components.
- svg: These are SVGs that are used in the project. They are imported as Vue components. Some, like the leaves, are animated and styled by props. 
- root: These are components that are used to display higher level content and may contain more logic or interactivity. 

## Router

The router is located in `src/router/index.js`. It is a simple router that uses the [vue-router](https://next.router.vuejs.org/) library.

## Stores

Nominees are stored in a Vuex store so they can be accessed where necessary and to speed up the loading of the Tree View page. The store is seeded from `src/data/mockNominees.js`.

Traits are also hardcoded here, as they are needed in multiple components.

## Views

The `views` folder contains the pages of the site. These are the main components that are rendered by the router.

## The Tree

The Tree component is an SVG graphic made up of `<g>` elements surrounding Leaf components. The Leaf component is an SVG that takes in props and runs its own animation. 

```vue
<g
	v-if="count > 41"
	data-name="Dark Green R"
	transform="translate(1782.816 559.497) rotate(85)"
>
	<Leaf
		v-if="filtered(41)"
		:trait="allNominees[41].fields.Trait"
		direction="right"
		@leafSelect="leafSelect"
		:index="41"
		:is-selected="isSelected(41)"
	/>
</g>
```

The `<g>` element sets the location of each leaf. The Leaf component is then placed inside of it. The Leaf component takes in a trait prop, which is used to determine the color of the leaf. It also takes in a direction prop, which is used to determine the direction the leaf faces. The Leaf also emits an event when clicked, as well as takes in whether it is selected or not.

Once there are over 41 nominees, the list becomes paginated, the Tree graphic maxes out at the ability to display 41 leaves.

## ReCaptchas and Gtag

This project uses Google's ReCaptcha and Gtag libraries. The ReCaptcha is used on the Nominate page, and the Gtag is used to track page views. These are set in the main index.html file.

## Dependencies

### Scss

Sass libraries are used to render Scss styles.

### Formkit

THe (formkit)[https://formkit.com/] library is used to render the form on the Nominate page and perform validation.

### Click Outside

The (click-outside)[https://www.npmjs.com/package/click-outside] is used in the menu component to close the menu when the user clicks outside of it.

### GSAP

The (GSAP)[https://greensock.com/gsap/] library is used to animate the leaves in the tree graphic. 

### Swiper

The (Swiper)[https://swiperjs.com/] library is used to create various simple carousels in mobile views.

### Throttle/Debounce

This is used to debounce window size change events. This is used to manage the navigation menus.