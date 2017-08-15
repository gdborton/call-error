# Call Error

This is a repo created for easy recreation of a bug I'm experiencing in webpack.

`Uncaught TypeError: Cannot read property 'call' of undefined`

For some reason, marking `handlebars/runtime` as an external breaks any place that is importing `log.js`, and is producing the error above.

Removing either the `config.externals` function or the `CommonsChunkPlugin`, or removing any of the imports will make the error disappear.

## How to recreate

```bash
git clone git@github.com:gdborton/call-error.git;
cd call-error;
npm install;
npm start;
open http://localhost:8080/index.html;
```

^ That will show the error in webpack 3. To see that it isn't an issue in 2, you can run...

```bash
npm uninstall webpack;
npm install webpack@2;
npm start;
open http://localhost:8080/index.html;
```

^ No error.
