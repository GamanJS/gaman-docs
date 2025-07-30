---
title: TextFormat Utility
description: The `TextFormat` utility provides ANSI escape codes for styling terminal output, such as applying colors, bold, italic, underline, and other text effects. It also includes a `format()` method for applying styles using Minecraft-style formatting codes.
---

## Importing TextFormat

To use `TextFormat`, import it from the `@gaman/common` package:

```ts
import { TextFormat } from "@gaman/common/utils/textformat";
```

---

## Available Constants

### Text Styles

| Constant                   | Description                    |
| -------------------------- | ------------------------------ |
| `TextFormat.RESET`         | Reset all styles               |
| `TextFormat.BOLD`          | Bold text                      |
| `TextFormat.DIM`           | Dim text                       |
| `TextFormat.UNDERLINE`     | Underlined text                |
| `TextFormat.BLINK`         | Blinking text                  |
| `TextFormat.REVERSE`       | Reversed foreground/background |
| `TextFormat.HIDDEN`        | Hidden text                    |
| `TextFormat.ITALIC`        | Italic text                    |
| `TextFormat.STRIKETHROUGH` | Strikethrough text             |

---

### Foreground Colors

| Constant                  | Color Name   |
| ------------------------- | ------------ |
| `TextFormat.BLACK`        | Black        |
| `TextFormat.BLUE`         | Blue         |
| `TextFormat.GREEN`        | Green        |
| `TextFormat.CYAN`         | Cyan         |
| `TextFormat.RED`          | Red          |
| `TextFormat.MAGENTA`      | Magenta      |
| `TextFormat.YELLOW`       | Yellow       |
| `TextFormat.WHITE`        | White        |
| `TextFormat.GRAY`         | Gray         |
| `TextFormat.LIGHT_BLUE`   | Light Blue   |
| `TextFormat.LIGHT_GREEN`  | Light Green  |
| `TextFormat.LIGHT_RED`    | Light Red    |
| `TextFormat.LIGHT_PURPLE` | Light Purple |
| `TextFormat.LIGHT_YELLOW` | Light Yellow |
| `TextFormat.BRIGHT_WHITE` | Bright White |

---

### Background Colors

| Constant                     | Background Color |
| ---------------------------- | ---------------- |
| `TextFormat.BG_BLACK`        | Black            |
| `TextFormat.BG_BLUE`         | Blue             |
| `TextFormat.BG_GREEN`        | Green            |
| `TextFormat.BG_CYAN`         | Cyan             |
| `TextFormat.BG_RED`          | Red              |
| `TextFormat.BG_MAGENTA`      | Magenta          |
| `TextFormat.BG_YELLOW`       | Yellow           |
| `TextFormat.BG_WHITE`        | White            |
| `TextFormat.BG_GRAY`         | Gray             |
| `TextFormat.BG_LIGHT_BLUE`   | Light Blue       |
| `TextFormat.BG_LIGHT_GREEN`  | Light Green      |
| `TextFormat.BG_LIGHT_RED`    | Light Red        |
| `TextFormat.BG_LIGHT_PURPLE` | Light Purple     |
| `TextFormat.BG_LIGHT_YELLOW` | Light Yellow     |
| `TextFormat.BG_BRIGHT_WHITE` | Bright White     |

---

## format(text: string): string

The `TextFormat.format()` method allows you to apply styles dynamically using codes similar to Minecraft’s `§` codes.

### Supported Codes

- Foreground Colors: `§0`–`§9`, `§a`–`§f`
- Background Colors: `§b0`–`§b9`, `§ba`–`§bf`
- Styles:

  - `§l` – Bold
  - `§n` – Underline
  - `§o` – Italic
  - `§m` – Strikethrough
  - `§r` – Reset
  - `§k` – Obfuscated (Not supported)

### Example

```ts
console.log(TextFormat.format("§eHello §b1World§r!"));
```

This will output "Hello World!" with yellow text and a blue background.

---

## Example Usage

### Using Constants

```ts
console.log(TextFormat.GREEN + "Success!" + TextFormat.RESET);
console.log(TextFormat.BOLD + TextFormat.RED + "Error!" + TextFormat.RESET);
```

### Using format()

```ts
console.log(TextFormat.format("§l§cCritical Error!§r Something went wrong."));
```

---

## Best Practices

- Always use `TextFormat.RESET` at the end to avoid affecting subsequent console output.
- Prefer `format()` for inline formatting within messages.
- Use predefined constants when styling static messages.

---

## Compatibility

This utility works in terminal environments that support ANSI escape sequences. It is not intended for use in web environments or non-ANSI consoles.
