import * as React from "react"
import { motion, HTMLMotionProps } from "motion/react"
import { cn } from "@/src/lib/utils"

const buttonVariants = {
  primary: "bg-gradient-to-br from-[#6366F1] to-[#A855F7] text-white shadow-[0_10px_20px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_10px_20px_-2px_rgba(99,102,241,0.5)] hover:-translate-y-0.5",
  secondary: "bg-[rgba(255,255,255,0.03)] text-white border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] hover:-translate-y-0.5",
  outline: "bg-transparent text-brand-muted border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] hover:text-white",
  ghost: "bg-transparent text-brand-muted hover:bg-[rgba(255,255,255,0.05)] hover:text-white",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg font-semibold",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof sizes
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
