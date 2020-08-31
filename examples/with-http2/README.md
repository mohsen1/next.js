# HTTP2 server example

This example shows the most basic example using an HTTP2 server. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-http2 with-http2-app
# or
yarn create next-app --example with-http2 with-http2-app
```

### Create certificates

Use `openssl` to generate a pair of public private keys for your local development

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
    -keyout localhost-privkey.pem -out localhost-cert.pem
```

### Enable `allow-insecure-localhost` in Chrome

Visit [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhos) and enable this flag to allow Chrome access localhost with self signed certificate. Alternatively you can make Chrome trust your certificates. See [this StackOverflow answer](https://stackoverflow.com/a/60516812/12338700) for more details

### Visit **https://** localhost:3000

Make sure you are visiting the localhost URL with the HTTPS protocol

https://localhost:3000/

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
