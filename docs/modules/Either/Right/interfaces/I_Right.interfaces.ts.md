---
title: Either/Right/interfaces/I_Right.interfaces.ts
nav_order: 5
parent: Modules
---

## I_Right.interfaces overview

Added in v1.0.7

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
  readonly _meta: { _tag: 'Right'; _value: T }
  readonly chain: <U>(f: (x: T) => U) => U
  readonly map: <U>(f: (x: T) => U) => I_Right<U>
  readonly fold: <R>(f: (x: unknown) => unknown, g: (x: T) => R) => R
}
```

Added in v1.0.7
