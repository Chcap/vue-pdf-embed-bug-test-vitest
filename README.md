# vue-pdf-embed-bug-test-vitest

## Presentation
Demonstration project for a bug encountered with [vue-pdf-embed](https://github.com/hrynko/vue-pdf-embed).

To reproduce the bug
- Install the project with `npm install`
- run `npm run test`

The following error occurs:

```
FAIL  src/components/__tests__/PdfViewer.spec.ts [ src/components/__tests__/PdfViewer.spec.ts ]
Error: Inline worker is not supported
❯ e.exports node_modules/vue-pdf-embed/dist/vue3-pdf-embed.js:1:531371
```

This error is thrown by the dependency [worker-loader](https://github.com/webpack-contrib/worker-loader/blob/22275e9cb0b67bc008ea2b008542303493eede18/src/runtime/inline.js#L46).

## Lead

As the *work-loader* library is used in the deprecated version 3.0.0, would it be better to use an up to date version ?
