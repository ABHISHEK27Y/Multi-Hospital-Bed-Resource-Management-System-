import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
    error: 'bg-red-100 text-red-700',
    neutral: 'bg-neutral-100 text-neutral-700',
  };

  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variantClasses[variant]} 
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;