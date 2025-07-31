---
title: Routing
description: The GamanJS routing system is designed to be flexible and intuitive, using a tree-like structure to represent routes.
---

## Overview

The routing system allows developers to define routes modularly and clearly using a nested object structure. This promotes a clean and maintainable backend architecture.

---

## Example: Route Definition

```ts
export default defineRoutes(() => ({
  "/getUser/*": (ctx) => {
    // Middleware for all routes under /getUser/*
    return next();
  },
  "/getUser": {
    GET: (ctx) => {
      return Res.json({ message: "OK!" });
    },
    "/detail": {
      GET: (ctx) => {
        return Res.json({ message: "Detail Get User" });
      },
      "/super-detail": [
        otherMiddleware(),
        (ctx) => {
          Log.info("middleware");
          return next();
        },
        (ctx) => {
          return Res.json({ message: "Super-Detail Get User" });
        },
      ],
    },
  },
  "/delete-all": {
    DELETE: [
      cors({ origin: "https://example.com" }),
      (ctx) => {
        return Res.json({ message: "OK!" });
      },
    ],
  },
}));
```

## Supported Methods

- HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, etc.

---

## Best Practices

- Organize routes by feature for clarity.
- Use nested route structures for better grouping.
- Apply wildcard middleware (`/route/*`) for reusable logic.

---

## Additional Notes

- Middleware functions should return `next()` to continue the chain.
- Wildcards (`*`) allow scoped global logic under a route prefix.

For more details, refer to the official GamanJS documentation or real-world examples.
