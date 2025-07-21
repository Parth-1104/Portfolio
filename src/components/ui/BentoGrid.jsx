import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        // Mobile-first responsive design
        "w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pt-[8vh] pb-[5vh] sm:pt-[12vh] sm:pb-[8vh] lg:pt-[15vh] lg:pb-[10vh]",
        // Grid layout - mobile to desktop
        "grid max-w-7xl gap-4 sm:gap-6 lg:gap-7",
        // Responsive columns: 1 on mobile, 2 on tablet, 3 on desktop
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        // Auto rows for better mobile layout
        "auto-rows-auto",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        // Base layout and spacing
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-3 sm:space-y-4",
        // Mobile-responsive padding
        "p-3 sm:p-4 pb-3 sm:pb-3.5",
        // Responsive border radius and borders
        "rounded-lg sm:rounded-xl border border-neutral-200 dark:border-white/[0.2]",
        // Background and theme colors
        "bg-black dark:bg-white",
        // Responsive transitions and hover effects
        "transition duration-200 hover:shadow-lg sm:hover:shadow-xl dark:shadow-none",
        // Mobile touch improvements
        "active:scale-[0.98] sm:active:scale-100",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1 sm:group-hover/bento:translate-x-2">
        {icon && (
          <div className="mb-2 text-neutral-700 dark:text-neutral-300">
            {icon}
          </div>
        )}
        <div
          className="mt-2 mb-2 text-lg sm:text-xl lg:text-2xl font-bold text-neutral-600 dark:text-[#222222] leading-tight">
          {title}
        </div>
        <div
          className="font-sans text-xs sm:text-sm font-normal text-neutral-600 dark:text-[#555555] leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};