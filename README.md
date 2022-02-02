## What This Example Shows

In this example, a single line comment in a `<slot>` fragment doesn't get rendered in SSR HTML, but one keystroke to make it multiline causes it to suddenly be rendered and cause a hydration mismatch.


## How to Reproduce Issue

1.  `npm i` to install dependencies then `npm run dev` to run.
2.  In your browser go to `http://localhost:3001`.
3.  Assuming you are in Chrome, go to the "Network" tab in Devtools.
4.  Look at the response for the document. The `#app` element should look like this:
    ```html
    <div id="app"><div><!--[--><!--]--></div></div>
    ```
5.  Note that the `<!-- test -->` comment is missing.
6.  In your code editor go to `src/App.vue`.
7.  Add a space in the comment, like for example before `test` like so:
    ```html
    <Test>
      <!-- 
        test -->
    </Test>
    ```
8.  Reload the browser. Note the hydration mismatch error in the console.
9.  Check the document response again. The `#app` element should look like this:
    ```html
    <div id="app"><div><!--[--><!-- 
      test --><!--]--></div></div>
    ```

_I am running Node v14.16.0 on macOS._
