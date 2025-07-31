---
title: Context
description: The Context (`ctx`) object is the heart of GamanJS request handling. It provides access to request data, response utilities, and application state. Every route handler and middleware receives a context object as their first parameter.
links:
- overview/routing
- overview/middleware
- module/routes
- essentials/session
- essentials/locals
- essentials/cookies
---

## Overview

The context object gives you everything you need to handle HTTP requests:

```ts
(ctx) => {
  const userId = ctx.param("id");
  const name = await ctx.input("name");
  ctx.cookies.set("lastVisit", new Date());
  
  return Response.json({ userId, name });
}
```

---

## Request Information

### `ctx.url`

A `URL` object containing the full request URL with parsed components.

```ts
(ctx) => {
  console.log(ctx.url.hostname); // "localhost"
  console.log(ctx.url.pathname); // "/api/users"
  console.log(ctx.url.search);   // "?page=1&limit=10"
}
```

### `ctx.request`

The full request object containing all HTTP request details including method, headers, and body parsing utilities.

```ts
(ctx) => {
  console.log(ctx.request.method);   // "POST"
  console.log(ctx.request.pathname); // "/api/users"
  console.log(ctx.request.ip);       // "127.0.0.1"
}
```

---

## Headers

### `ctx.headers`

Access request headers through the `GamanHeaders` instance.

```ts
(ctx) => {
  const contentType = ctx.headers.get("content-type");
  const userAgent = ctx.headers.get("user-agent");
}
```

### `ctx.header(key)`

Get a specific header value by name (case-insensitive).

```ts
(ctx) => {
  const auth = ctx.header("authorization");
  const accept = ctx.header("Accept");
}
```

---

## Route Parameters

### `ctx.param(name)`

Get a single route parameter by name.

```ts
// Route: /users/:id
(ctx) => {
  const userId = ctx.param("id"); // "123"
}
```

### `ctx.params`

Get all route parameters as an object.

```ts
// Route: /posts/:postId/comments/:commentId
(ctx) => {
  const { postId, commentId } = ctx.params;
  // { postId: "123", commentId: "456" }
}
```

---

## Query Parameters

### `ctx.query`

Access URL query parameters. Supports both function call and object access.

```ts
// URL: /search?q=hello&page=2&tags=js&tags=web
(ctx) => {
  const search = ctx.query("q");        // "hello"
  const page = ctx.query.page;          // "2"
  const tags = ctx.query.tags;          // ["js", "web"]
}
```

---

## Request Body

### `ctx.text()`

Read the request body as plain text.

```ts
(ctx) => {
  const textData = await ctx.text();
  console.log(textData); // "Hello, world!"
}
```

### `ctx.json()`

Parse the request body as JSON with optional typing.

```ts
(ctx) => {
  const data = await ctx.json();
  const user = await ctx.json<{ name: string; email: string }>();
}
```

### `ctx.formData()`

Parse form data from the request body.

```ts
(ctx) => {
  const form = await ctx.formData();
  const name = form.get("name")?.asString();
  const file = form.get("avatar")?.asFile();
}
```

### `ctx.input(name)`

Get a specific form field value directly.

```ts
(ctx) => {
  const username = await ctx.input("username");
  const email = await ctx.input("email");
}
```

**Alternative access:**

```ts
(ctx) => {
  const username = await ctx.request.input("username");
  const email = await ctx.request.input("email");
}
```

---

## Application State

### `ctx.locals`

Store and access request-scoped data. Perfect for sharing data between middlewares and route handlers.

```ts
// In middleware
(ctx, next) => {
  ctx.locals.startTime = Date.now();
  ctx.locals.user = { id: 1, name: "Angga" };
  return next();
}

// In route handler
(ctx) => {
  const user = ctx.locals.user;
  const duration = Date.now() - ctx.locals.startTime;
}
```

<!-- ### `ctx.env`

Access environment variables and application configuration.

```ts
(ctx) => {
  const dbUrl = ctx.env.DATABASE_URL;
  const apiKey = ctx.env.API_KEY;
}
``` -->

---

## Cookies

### `ctx.cookies`

Manage HTTP cookies with a simple API. See the Cookies documentation for detailed usage.

```ts
(ctx) => {
  ctx.cookies.set("theme", "dark");
  const theme = ctx.cookies.get("theme").value;
  
  if (ctx.cookies.has("session")) {
    ctx.cookies.delete("session");
  }
}
```

---


## Best Practices

- Use `ctx.locals` to share data between middlewares and handlers
- Always validate input data from `ctx.input()` and `ctx.json()`
- Check for required parameters and headers before processing
- Use appropriate content type parsing (`json`, `text`, `formData`)
- Handle file uploads with proper validation and size limits
- Store user context in `ctx.locals` after authentication
<!-- - Access environment variables through `ctx.env` for consistency -->

---

The context object provides a unified interface to all request data and application state, making it easy to build robust and maintainable web applications.