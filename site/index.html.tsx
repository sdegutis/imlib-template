import { Css } from "./components/css.js";
import { Uppercaser } from "./uppercaser.js";

export default <>
  {`<!DOCTYPE html>`}
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id='site-root'>
        <Css src="./index.css" />
        <h1>Hello world!</h1>
        <p>This app runs on <a href='https://github.com/sdegutis/imlib'>imlib</a></p>
        <p>Here's a little dynamic script for fun:</p>
        <Uppercaser />
      </div>
    </body>
  </html>
</>;
