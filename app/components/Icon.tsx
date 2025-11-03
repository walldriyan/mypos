// components/Icon.tsx
import React from 'react';
import { IconProps } from '../types';
import { getIcon } from '../lib/iconMap';


export const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const IconComponent = getIcon(name);
  return <IconComponent className={className} />;
};