import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={`
        bg-white rounded-lg shadow-lg p-6 
        ${hover ? 'transition-all duration-300 hover:shadow-xl' : ''} 
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;