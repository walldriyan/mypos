// types/settings.types.ts
export interface SettingsSubItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
  icon?: string;
}

export interface SettingsMenuItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
  subItems?: SettingsSubItem[];
  hasArrow?: boolean; // Right arrow indicator
}

export interface SettingsSidebarProps {
  menuItems: SettingsMenuItem[];
  onNavigate?: (href: string) => void;
  userInitials?: string;
  logo?: React.ReactNode;
  bottomItems?: SettingsMenuItem[];
  title?: string;
}