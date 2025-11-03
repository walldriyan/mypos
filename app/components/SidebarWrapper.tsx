// components/SidebarWrapper.tsx
'use client';

import { useRouter } from 'next/navigation';
import { SidebarProps } from '../types';
import { LSidebar } from './LSidebar';

interface SidebarWrapperProps extends Omit<SidebarProps, 'onNavigate' | 'onCreateNew'> {
  onCreateNew?: () => void;
}

export const SidebarWrapper: React.FC<SidebarWrapperProps> = (props) => {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const handleCreateNew = () => {
    if (props.onCreateNew) {
      props.onCreateNew();
    } else {
      // Default behavior
      console.log('Create new workspace');
    }
  };

  return (
    <LSidebar
      {...props}
      onNavigate={handleNavigate}
      onCreateNew={handleCreateNew}
    />
  );
};