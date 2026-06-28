"use client";

import { Skeleton } from "boneyard-js/react";

interface SkeletonWrapperProps {
  name: string;
  children: React.ReactNode;
}

export function SkeletonWrapper({ name, children }: SkeletonWrapperProps) {
  return (
    <Skeleton name={name} loading={false}>
      {children}
    </Skeleton>
  );
}
