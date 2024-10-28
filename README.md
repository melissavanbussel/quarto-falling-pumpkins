# Quarto Falling Pumpkins Extension For Quarto

This Quarto extension will add falling pumpkin confetti on your Quarto webpage.

## Installing

```bash
quarto add melissavanbussel/quarto-falling-pumpkins
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

After installing the extension, use the following in your Quarto page. 

```
---
title: "My Document"
format: html
filters:
  - quarto-falling-pumpkins
---
```

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).