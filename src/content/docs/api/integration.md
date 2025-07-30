---
title: Integration API
description: The Integration API allows you to extend your application's functionality through a modular integration system. Each integration follows a lifecycle pattern with hooks for different stages of the application's execution.
---

## Integration types

There are two ways to create integrations in Gaman:

### 1. Direct Integration

For simple integrations without configuration options:

```typescript
const myIntegration = defineIntegration((app) => ({
  name: "my-integration",
  priority: "normal",
}));

// Usage
integrations: [myIntegration];
```

### 2. Factory Function Integration

For integrations that need customizable options:

```typescript
export function myIntegration(options: MyOptions) {
  return defineIntegration((app) => ({
    name: "my-integration",
    priority: "normal",
  }));
}

// Usage
integrations: [myIntegration({ option: "value" })];
```

## Integration Structure

An integration is defined using the `IntegrationFactory` interface which includes the following properties:

- **name** (required): The unique identifier for your integration
- **priority** (required): Determines the execution order of integrations
- **onLoad** (optional): Called when the integration is initialized
- **onDisabled** (optional): Called when the integration is disabled
- **onRequest** (optional): Called on each incoming request
- **onResponse** (optional): Called before sending response to client

### Priority Levels

The priority system determines the order in which integrations are executed:

- `high` - Executes first
- `normal` - Standard execution order
- `low` - Executes last

## Creating an Integration

### Basic Integration

Create a new file with the `.integration.ts` suffix:

```typescript
// example.integration.ts
export default defineIntegration((app) => ({
  name: "example-integration",
  priority: "normal",
  onLoad: () => {
    console.log("Integration loaded!");
  },
  onRequest: (ctx) => {
    // Handle incoming requests
    console.log("Request received:", ctx.request.url);
  },
  onResponse: (ctx, res) => {
    // Modify response before sending
    console.log("Response being sent");
    return res;
  },
}));
```

### Integration with Configuration Options

For integrations that need customizable options:

```typescript
// auth.integration.ts
interface AuthOptions {
  secret?: string;
  enabled?: boolean;
  protectedRoutes?: string[];
}

export function authIntegration(options: AuthOptions = {}) {
  return defineIntegration((app) => ({
    name: "auth-middleware",
    priority: "high",
    onLoad: () => {
      // Initialize authentication system with options
      app.config.auth = {
        enabled: options.enabled ?? true,
        secret: options.secret ?? process.env.JWT_SECRET,
        protectedRoutes: options.protectedRoutes ?? ["/api/protected"],
      };
    },
    onRequest: (ctx) => {
      const token = ctx.request.headers.get("Authorization");
      const isProtected = app.config.auth.protectedRoutes.some((route) =>
        ctx.request.url.includes(route)
      );

      if (!token && isProtected) {
        return new Response("Unauthorized", { status: 401 });
      }
    },
    onDisabled: () => {
      delete app.config.auth;
    },
  }));
}
```

## Using Integrations

### Registering Integrations

In your main application file (`index.ts`), register your integrations:

```typescript
// index.ts

defineBootstrap(..., (app) => {
  app.registerIntegration(
    authIntegration({
      secret: "my-secret",
      protectedRoutes: ["/api/admin", "/api/user"],
    }),
    exampleIntegration
    );
})
```

### Multiple Integrations

You can register multiple integrations, and they will execute based on their priority:

```typescript
// index.ts

defineBootstrap(..., (app) => {
  app.registerIntegration(
    corsIntegration(), // with options
    rateLimitIntegration({ maxRequests: 100 }), // with options
    loggingIntegration, // direct integration
  )
})
```

## Integration Lifecycle

### Execution Order

1. **onLoad**: Called during application startup (ordered by priority)
2. **onRequest**: Called for each incoming request (ordered by priority)
3. **onResponse**: Called before sending response (ordered by priority)
4. **onDisabled**: Called when integration is disabled

### Context Access

Integrations receive the application context and request context, allowing you to:

- Access application configuration
- Modify request/response data
- Share data between integrations
- Implement middleware logic

## Best Practices

### Naming Convention

- Use descriptive names with kebab-case: `auth-middleware`, `rate-limiter`
- Add `.integration.ts` suffix to integration files
- Keep integration names unique across your application

This documentation provides a complete guide for creating and using integrations in the Gaman framework. The modular approach allows for flexible and maintainable application architecture.
