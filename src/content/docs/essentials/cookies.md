---
title: Cookies
description: GamanJS provides a simple and expressive API to manage HTTP cookies. Using the `ctx.cookies` object, you can easily **set**, **get**, **check**, and **delete** cookies in your routes and middlewares.
---

## Overview

The `ctx.cookies` utility is accessible in any handler or middleware and supports a clean, fluent interface:

```ts
(ctx) => {
  ctx.cookies.set("theme", "dark");
  const theme = ctx.cookies.get("theme").value;
};
```

---

## API Reference

### `ctx.cookies.set(key, value, options?)`

Sets a cookie on the client.

- `key` (`string`) – The name of the cookie.
- `value` (`string | number | boolean | Record<string, any>`) – The cookie's value. Objects will be automatically serialized to JSON.
- `options` (`GamanCookieSetOptions`) – Optional configuration for the cookie (see below).

#### Example:

```ts
(ctx) => {
  ctx.cookies.set("token", "abc123", {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    secure: true,
    sameSite: "strict",
  });
};
```

### Available Options (`GamanCookieSetOptions`):

| Option     | Type    | Description                                         |
| ---------- | ------- | --------------------------------------------------- |
| `httpOnly` | boolean | Prevent client-side JS access to the cookie.        |
| `secure`   | boolean | Cookie is only sent over HTTPS.                     |
| `maxAge`   | number  | Max age in seconds before the cookie expires.       |
| `expires`  | Date    | Alternative to `maxAge`, for exact expiration time. |
| `path`     | string  | URL path the cookie is valid for.                   |
| `sameSite` | string  | "lax", "strict", or "none".                         |
| `domain`   | string  | The domain the cookie is available to.              |

---

### `ctx.cookies.get(key)`

Retrieves the value of a cookie.

Returns an object with fluent methods to convert the value:

- `.value` → raw string or parsed object
- `.json()` → parses the value as JSON
- `.number()` → parses the value as number
- `.boolean()` → parses the value as boolean

#### Example:

```ts
(ctx) => {
  const raw = ctx.cookies.get("token").value;
  const tokenAsNumber = ctx.cookies.get("token").number();
  const user = ctx.cookies.get("user").json();
};
```

---

### `ctx.cookies.has(key)`

Checks if a cookie with the given key exists.

#### Example:

```ts
(ctx) => {
  if (ctx.cookies.has("token")) {
    // token is present
  }
};
```

---

### `ctx.cookies.delete(key)`

Deletes a cookie by setting its expiration to the past.

#### Example:

```ts
(ctx) => {
  ctx.cookies.delete("token");
};
```

---

## JSON Support

If you store an object using `ctx.cookies.set`, it will be automatically serialized and parsed:

```ts
(ctx) => {
  ctx.cookies.set("user", { id: 1, name: "Angga" });

  const user = ctx.cookies.get("user").json();
  // => { id: 1, name: "Angga" }
};
```

---

## Example Workflow

```ts
export default defineRoutes(() => ({
  "/set": (ctx) => {
    ctx.cookies.set("mode", "dark", { httpOnly: true });
    return r.json({ status: "cookie set" });
  },
  "/check": (ctx) => {
    if (ctx.cookies.has("mode")) {
      return r.json({ mode: ctx.cookies.get("mode").value });
    }
    return r.json({ mode: "not set" });
  },
  "/delete": (ctx) => {
    ctx.cookies.delete("mode");
    return r.json({ status: "cookie deleted" });
  },
}));
```

---

## Best Practices

- Always use `httpOnly` for security-sensitive cookies.
- Use `secure` in production environments (HTTPS).
- Avoid storing large data or sensitive info directly in cookies.
- Use `sameSite: "strict"` unless cross-site cookies are needed.

---

For advanced usage, `ctx.cookies` is extensible and compliant with most cookie parsers used in modern fra
