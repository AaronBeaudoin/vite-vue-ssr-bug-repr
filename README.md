## What is the Bug?

For some reason I can't begin to imagine, HMR doesn't work when a certain part of a Vue component is changed, but **does** work when another part of the **exact same component** is changed.


## How to Reproduce Bug

1.  `npm i` to install dependencies then `npm run dev` to run.
2.  In your browser go to `http://localhost:3000`.
3.  In your code editor go to `pages/index.page.vue`.
4.  Change the "WORKS" text to something else (Ex: "WORKS 2").
5.  Save the file. Note that HMR instantly does it's thing.
5.  Change the "DOESN'T WORK" text to something else (Ex: "DOESN'T WORK 2").
5.  Save the file. HMR doesn't work. Note the error in your browser console.

_I am running Node v14.16.0 on macOS._
