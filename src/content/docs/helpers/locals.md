---
title: Locals
description: GamanJS provides a simple `ctx.locals` object to store and pass data between middlewares and route handlers during a single request lifecycle.
---

## Overview

`ctx.locals` is a per-request storage that allows you to attach data that can be shared across the current handler chain.

This is especially useful for passing user info, preprocessed data, or any temporary values that you don't want to attach to global state.

---

## Usage Example

### Block Example with Middleware

```ts
export default defineRoutes(() => ({
  "*": (ctx) => {
    // Simulate user fetched from cookie or elsewhere
    ctx.locals.user = ctx.cookies.get("user").json();
    return next();
  },
  "/user": (ctx) => {
    const user = ctx.locals.user;
    return r.json({ user });
  },
}));
```

---

## Typing Locals

To get proper autocomplete and type safety for `ctx.locals`, declare the expected structure in your global namespace.

### `index.d.ts`

```ts
declare namespace Gaman {
  interface Locals {
    example: string;
    user?: {
      id: number;
      name: string;
    };
  }
}
```

With the type declared, `ctx.locals.user` will have autocomplete and type checking based on your interface.

---

## Best Practices

- Use `ctx.locals` to pass shared data like user objects or computed values.
- Avoid using it as a global storage across requests — it resets per request.
- Define your custom types in `index.d.ts` for maintainability and DX.

---

## Summary

| Feature      | Description                                |
| ------------ | ------------------------------------------ |
| `ctx.locals` | Request-scoped storage object for handlers |
| Typable      | Extendable via `Gaman.Locals` in `d.ts`    |
| Safe         | Reset every request — no global pollution  |

GamanJS’s `locals` feature makes sharing temporary context across a route seamless, clean, and fully typed!
