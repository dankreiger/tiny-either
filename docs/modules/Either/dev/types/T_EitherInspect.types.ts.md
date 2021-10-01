---
title: Either/dev/types/T_EitherInspect.types.ts
nav_order: 3
parent: Modules
---

## T_EitherInspect.types overview

Added in v1.0.6

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [T_EitherInspect (type alias)](#t_eitherinspect-type-alias)

---

# utils

## T_EitherInspect (type alias)

**Signature**

```ts
export type T_EitherInspect = I_Either & {
  Left: <T>(x: T) => I_Left<T> & { inspect: () => T_InspectVal<'Left'> }
  Right: <T>(x: T) => I_Right<T> & { inspect: () => T_InspectVal<'Right'> }
}
```

Added in v1.0.6
