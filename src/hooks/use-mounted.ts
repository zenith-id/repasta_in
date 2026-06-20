"use client";

import { useEffect, useState } from "react";

/** Returns true after first client render (SSR hydration guard). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
