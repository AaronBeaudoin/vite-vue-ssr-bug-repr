## What This Example Shows

In this example, a comment at the end of a `<transition>` component causes hydration to fail.


## How to Reproduce Issue

1.  `npm i` to install dependencies then `npm run dev` to run.
2.  In your browser go to `http://localhost:3001`. Note the error in the console.
3.  In your code editor go to `src/App.vue`.
4.  Remove the comment and reload the page. The error should be gone.

_I am running Node v14.16.0 on macOS._
