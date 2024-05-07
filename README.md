# Javascript Library Skeleton

[![Runs All Unit tests](https://github.com/cesargb/javascript-library-skeleton/actions/workflows/test.yml/badge.svg)](https://github.com/cesargb/javascript-library-skeleton/actions/workflows/test.yml)

This is a skeleton for a Javascript library.

## Build

```bash
npm install
npm run build
```

## Usage

### Module Usage

```javascript
import { inspire } from "myLibrary";

console.log(inspire());
```

### Browser Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="myLibrary.js"></script>
  </head>
  <body>
    <script>
      console.log(myLibrary.inspire());
    </script>
  </body>
</html>
```

## Installation

```bash
npm install myLibrary
```
