// components/NavLink.tsx
import React from 'react';

interface NavLinkProps {
  href?: string;
  onClick?: () => void;
  onNavigate?: (href: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  onClick,
  onNavigate,
  children,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (href && onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <a href={href || '#'} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};