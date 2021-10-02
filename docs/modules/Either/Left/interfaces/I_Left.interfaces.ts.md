---
title: Either/Left/interfaces/I_Left.interfaces.ts
nav_order: 3
parent: Modules
---

## I_Left.interfaces overview

Added in v1.0.7

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
  readonly _meta: { _tag: 'Left'; _value: T }
  readonly chain: (f: (x: unknown) => unknown) => I_Left<T>
  readonly map: (f: (x: unknown) => unknown) => I_Left<T>
  readonly fold: <R>(f: (x: T) => R, g: (x: unknown) => unknown) => R
}
```

Added in v1.0.7
