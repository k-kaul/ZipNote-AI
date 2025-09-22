import { cn } from "@/lib/utils";
import { itemVariants } from "@/utils/contants";
import React from "react";
import { MotionH1, MotionH2 } from "../common/motion-wrapper";

export function GridSmallBackground() {
  return (
    <div className="absolute flex h-[37rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] "></div>
    </div>
  );
}
