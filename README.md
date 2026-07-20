# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Debouncing

typing slow = 200ms
typing fast = 30ms

Performance:

- without debouncing: iphone pro max = 14 letter API calls \* 1000 = 14000
- with debouncing: 3 API calls \* 1000 = 3000

Debouncing with 200ms:

- if difference between 2 key strokes <200ms - DECLINE API CALL
- > 200ms make an api call

## Search suggestions caching

Cache:
time complexity to search in array = O(n)
[i, ip, iph, iphone]

time complexity to search in object = O(1) [** Recommended because it is far... more better than O(n)]
{
i:,
ip:,
iph:,
iphone:
}

new Map();
