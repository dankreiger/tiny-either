---
title: Either/transformers/fromNullable/fromNullable.ts
nav_order: 10
parent: Modules
---

## fromNullable overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [fromNullable](#fromnullable)

---

# utils

## fromNullable

**Signature**

```ts
export declare function fromNullable<T>(x: NonNullable<T>): I_Right<T>
export declare function fromNullable<T extends null | undefined>(x: T): I_Left<T>
```

Added in v0.0.0
