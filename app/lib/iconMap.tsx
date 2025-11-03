// iconMap.tsx
import {
  Menu,
  Settings,
  Users,
  ShoppingCart,
  Calendar,
  Clock,
  Package,
  Megaphone,
  Bell,
  Mail,
  Database,
  Code,
  Briefcase,
  MapPin,
  Wrench,
  Building2,
  Gift,
  User,
  Home,
  FileText,
  TrendingUp,
  DollarSign,
} from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<any>> = {
  menu: Menu,
  settings: Settings,
  users: Users,
  cart: ShoppingCart,
  calendar: Calendar,
  clock: Clock,
  package: Package,
  megaphone: Megaphone,
  bell: Bell,
  mail: Mail,
  database: Database,
  code: Code,
  briefcase: Briefcase,
  mapPin: MapPin,
  wrench: Wrench,
  building: Building2,
  gift: Gift,
  user: User,
  home: Home,
  file: FileText,
  trending: TrendingUp,
  dollar: DollarSign,
};

// Default icon if not found
export const getIcon = (name: string): React.ComponentType<any> => {
  return iconMap[name.toLowerCase()] || Settings;
};