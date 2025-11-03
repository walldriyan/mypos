// types.ts
export interface IconProps {
  name: string;
  className?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
  subItems?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
}

export interface WorkspaceItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  active?: boolean;
}

export interface SidebarProps {
  menuItems: MenuItem[];
  workspaces?: WorkspaceItem[];
  onCreateNew?: () => void;
  onNavigate?: (href: string) => void;
  userInitials?: string;
  logo?: React.ReactNode;
  bottomItems?: MenuItem[];
}