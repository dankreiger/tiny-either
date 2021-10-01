---
title: Either/Right/interfaces/I_Right.interfaces.ts
nav_order: 8
parent: Modules
---

## I_Right.interfaces overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [I_Right (interface)](#i_right-interface)

---

# utils

## I_Right (interface)

**Signature**

```ts
export interface I_Right<T> {
  chain: <U>(f: (x: T) => U) => U
  map: <U>(f: (x: T) => U) => I_Right<U>
  fold: <R>(f: (x: any) => any, g: (x: T) => R) => R
}
```

Added in v0.0.0
