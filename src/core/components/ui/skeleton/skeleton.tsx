import type React from "react";
import { cn } from "../../../utils/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: string;
}

export function Skeleton({
  width,
  height,
  rounded = "8px",
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 dark:bg-gray-700", className)}
      style={{
        width,
        height,
        borderRadius: rounded,
        ...props.style,
      }}
      {...props}
    />
  );
}

export default Skeleton;
