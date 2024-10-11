import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  arrowRight?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = "primary",
    disabled = false,
    arrowRight = false,
    onClick,
    className,
    icon,
  } = props;
  const disabledStyles = "opacity-50 cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-primary-green text-center rounded-md hover:bg-green-700 transition duration-300 ease-in-out border border-green hover:border-primary-dark shadow-sm text-sm text-white",
    secondary:
      "border border-primary-green rounded-md bg-transparent hover:bg-primary-green hover:text-white transition duration-300 ease-in-out text-primary",
  };

  return (
    <button
      className={cn(
        "py-4 px-8 capitalize",
        variantStyles[variant],
        disabled && disabledStyles,
        arrowRight && "flex items-center space-x-2",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex gap-2 justify-center">
        <p> {children}</p>
        {icon && <ChevronRight />}
      </div>
    </button>
  );
};

export default Button;
