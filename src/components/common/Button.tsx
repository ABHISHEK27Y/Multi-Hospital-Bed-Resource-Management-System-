import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-4 focus:ring-secondary-300 shadow-lg shadow-secondary-500/30 hover:shadow-secondary-500/40',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-4 focus:ring-primary-100',
    text: 'text-primary-500 hover:text-primary-600 hover:bg-primary-50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5',
    lg: 'px-8 py-3 text-lg',
  };
  
  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''} 
    ${className}
  `;

  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={classes}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      type={type} 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;