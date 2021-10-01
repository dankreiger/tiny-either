---
title: Either/Left/interfaces/I_Left.interfaces.ts
nav_order: 2
parent: Modules
---

## I_Left.interfaces overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [I_Left (interface)](#i_left-interface)

---

# utils

## I_Left (interface)

**Signature**

```ts
export interface I_Left<T> {
  chain: (f: never) => I_Left<T>
  map: (f: never) => I_Left<T>
  fold: <R>(f: (x: T) => R, _: never) => R
  inspect: () => `Left(${string})`
}
```

Added in v1.0.0
