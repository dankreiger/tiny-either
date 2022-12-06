---
title: Either/transformers/fromNullable/fromNullable.ts
nav_order: 7
parent: Modules
---

## fromNullable overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Either](#either)
  - [fromNullable](#fromnullable)

---

# Either

## fromNullable

**Signature**

```ts
export declare function fromNullable<T>(value: NonNullable<T>): I_Right<T>
export declare function fromNullable<T extends null | undefined>(value: T): I_Left<T>
```

Added in v1.0.7
