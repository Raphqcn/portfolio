---
title: "ClientSwap"
summary: "A free file converter that runs entirely in your browser. Your files never leave your device."
category: "Tool"
year: "2026"
role: "Solo developer"
order: 1
thumbnail: "clientswap.png"
link: "https://clientswap.io"
source: ""
stack:
  - "TypeScript"
  - "WebAssembly"
  - "Web Workers"
---

## The idea

Most online converters upload your files to a server you know nothing about. ClientSwap does the opposite: every conversion happens locally, in the browser, and nothing is ever sent anywhere.

## How it works

Conversions run client-side, in the browser itself. Heavy work is moved off the main thread so the interface stays responsive, even with large files. The main challenge was getting good performance and broad format support without any server, while keeping the app light enough to load quickly.

## What I learned

Modern browsers are far more capable than they're often given credit for: a lot of work that usually lives on a server can run locally. Building around privacy from the start also shaped every technical decision, and made the product simpler to explain.
