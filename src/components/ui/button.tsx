// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
//         outline:
//           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2 rounded-md",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9 rounded-md",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export { Button, buttonVariants }

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'floating' | 'link';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150";

  let variantStyle = "";
  switch (variant) {
    case 'primary':
      variantStyle = "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500";
      break;
    case 'secondary':
      variantStyle = "bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-500";
      break;
    case 'ghost':
      variantStyle = "text-green-600 hover:bg-green-50 focus:ring-green-500";
      break;
    case 'floating':
      variantStyle = "bg-white text-gray-700 shadow-lg hover:bg-gray-50 focus:ring-gray-400";
      break;
    case 'link':
      variantStyle = "text-green-600 hover:text-green-700 underline";
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case 'sm': sizeStyle = "px-3 py-1.5 text-sm"; break;
    case 'md': sizeStyle = "px-4 py-2 text-base"; break;
    case 'lg': sizeStyle = "px-6 py-3 text-lg"; break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
export default Button;