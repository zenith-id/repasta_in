"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** Returns true after first client render (SSR hydration guard). */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
