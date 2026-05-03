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
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tech?: string[];
  href?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-sm group/bento border-glow glass-card glass-hover justify-between flex flex-col space-y-6 p-6 md:p-8",
        className
      )}
    >
      {header}
      <div className="transition duration-300 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <div className="mono-detail">
            Project_Spec // 0.1
          </div>
        </div>
        <div className="font-semibold text-xl text-foreground mb-2 text-balance leading-tight">
          {title}
        </div>
        <div className="font-normal text-muted-foreground text-sm leading-relaxed text-balance opacity-80 mb-6">
          {description}
        </div>
        
        <div className="mt-auto space-y-6">
          {tech && (
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="font-mono text-[8px] px-2 py-0.5 border border-white/5 rounded-none bg-white/[0.03] text-muted-foreground uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          )}

          {href && (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/80 hover:text-emerald-400 transition-colors flex items-center gap-2 group/link"
            >
              <span className="opacity-50 group-hover/link:opacity-100 transition-opacity">[</span>
              <span>VISIT_DEPLOYMENT</span>
              <span className="opacity-50 group-hover/link:opacity-100 transition-opacity">]</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
