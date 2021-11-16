const proxy = require("cors-anywhere");

const host = "127.0.0.1";
const port = 8080;

proxy
    .createServer({
        originWhitelist: [],
        requireHeader: ["origin", "x-requested-with"],
        removeHeaders: ["cookie", "cookie2"],
    })
    .listen(port, host, () =>
        console.log(`Proxy server running on ${host}:${port}`)
    );
