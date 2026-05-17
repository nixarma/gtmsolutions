// src/types/html-inert.d.ts
// TypeScript does not yet include `inert` in its HTML element type definitions.
// This declaration adds it so JSX usage does not cause a build error.

declare namespace React {
    interface HTMLAttributes<T> {
      inert?: '' | undefined
    }
  }