#!/usr/bin/env node

// webserver
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());

const {exec} = require("child_process");

app.use(async (ctx, next) => {
    console.log(ctx.method, ctx.url);
    await next();
});

app.use(async ctx => {
    const p = ctx.request.body;
    const req = ctx.request.method + ctx.url;

    console.log(p.commits);
    console.log(p.respository);
    console.log(p.commits.length);

    if (p.repository == "getmeramen" && p.commits.length > 0) {
        exec("git pull", (err, stdout, stderr) => {
            if (err) return;
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
});

app.listen(1251, function() {
    console.log("listening http://0.0.0.0:1251");
});
