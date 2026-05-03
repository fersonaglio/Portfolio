import React from "react";
import { cn } from "../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tech,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tech?: string[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-none p-6 md:p-8 industrial-border bg-white/5 justify-between flex flex-col space-y-6",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Project Spec
          </div>
        </div>
        <div className="font-semibold text-xl text-foreground mb-2 text-balance">
          {title}
        </div>
        <div className="font-normal text-muted-foreground text-sm leading-relaxed text-balance opacity-80">
          {description}
        </div>
        {tech && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <span key={t} className="font-mono text-[9px] px-2 py-0.5 industrial-border rounded-full bg-white/5 text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
