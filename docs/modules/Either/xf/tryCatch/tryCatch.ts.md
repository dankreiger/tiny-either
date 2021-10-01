---
title: Either/xf/tryCatch/tryCatch.ts
nav_order: 7
parent: Modules
---

## tryCatch overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [tryCatch](#trycatch)

---

# utils

## tryCatch

**Signature**

```ts
export declare function tryCatch<T extends Error>(f: () => T): I_Left<T>
export declare function tryCatch<T>(f: () => T): I_Right<T>
```

Added in v0.0.0
