---
title: Logger
description: The `Logger` utility offers an easy-to-use interface for logging messages at different levels of severity.
---

## Available Methods

### `Logger.info(message: string)`

Logs informational messages that provide general feedback or updates.

```ts
Logger.info("Server has started successfully.");
```

### `Logger.log(message: string)`

Logs standard messages, typically for routine operations.

```ts
Logger.log("User connected to the service.");
```

### `Logger.debug(message: string)`

Logs debug messages intended for development or troubleshooting purposes.

```ts
Logger.debug(
  "Debugging connection parameters: { host: 'localhost', port: 3431 }"
);
```

### `Logger.warn(message: string)`

Logs warning messages to signal potential problems or caution.

```ts
Logger.warn("Disk usage is nearing capacity.");
```

### `Logger.error(message: string)`

Logs error messages, useful for reporting issues or exceptions.

```ts
Logger.error("Failed to connect to the database.");
```

---

## Example Usage

### Basic Logging

Here’s an example of using the `Logger` utility to track server operations:

```ts
Logger.info("Server is starting...");
Logger.log("Listening on port 3431.");

try {
  // Simulating a successful operation
  Logger.debug("Attempting to connect to the database...");
  // Simulated operation succeeded
  Logger.info("Connected to the database successfully.");
} catch (error) {
  Logger.error("Database connection failed: " + error.message);
}
```

---

### Best Practices

- Use `Logger.info` for high-level updates and progress.
- Use `Logger.log` for normal operations and tracking.
- Use `Logger.debug` during development to trace issues or inspect application behavior.
- Use `Logger.warn` for important warnings or risks that aren't critical errors.
- Use `Logger.error` for critical failures or exceptions.

---

## Future Utilities

Additional utility modules may be introduced to expand GamanJS functionality. Stay tuned for updates in future releases.

For more advanced usage and examples, refer to the GamanJS documentation or code samples.
