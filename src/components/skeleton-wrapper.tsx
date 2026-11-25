"use client";

import { Skeleton } from "boneyard-js/react";

interface SkeletonWrapperProps {
  name: string;
  children: React.ReactNode;
}

export function SkeletonWrapper({ name, children }: SkeletonWrapperProps) {
  return (
    <Skeleton name={name} loading={false} animate="shimmer">
      {children}
    </Skeleton>
  );
}

export function SectionSkeleton({ name }: { name: string }) {
  return (
    <Skeleton name={name} loading animate="shimmer">
      {null}
    </Skeleton>
  );
}
