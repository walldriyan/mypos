// data/sidebarData.ts

import { MenuItem, WorkspaceItem } from "../types";


export const workspaceData: WorkspaceItem[] = [
  {
    id: '1',
    name: 'EasyWeek',
    icon: 'calendar',
    description: 'Jozefov-ny-decin-2, Kyiv',
    active: true,
  },
  {
    id: '2',
    name: 'Happy Vibes',
    icon: 'gift',
    description: 'Zagreb 185, 10 Kyiv',
  },
  {
    id: '3',
    name: 'Angry squirrel',
    icon: 'users',
    description: 'Charlottenlunde 60, 10117 Berlin',
  },
];

export const menuData: MenuItem[] = [
  { id: 'calendar', label: 'Calendar', icon: 'calendar', href: '/calendar' },
  { id: 'orders', label: 'Orders', icon: 'cart', href: '/orders' },
  { id: 'analytics', label: 'Analytics', icon: 'clock', href: '/analytics' },
  { id: 'clients', label: 'Clients', icon: 'users', href: '/clients' },
  { id: 'inventory', label: 'Inventory', icon: 'package', href: '/inventory' },
  { id: 'promo', label: 'Promo', icon: 'megaphone', href: '/promo' },
  {
    id: 'business',
    label: 'Business',
    icon: 'briefcase',
    subItems: [
      { id: 'company', label: 'Company', href: '/business/company', badge: 'active' },
      { id: 'locations', label: 'Locations', href: '/business/locations' },
      { id: 'services', label: 'Services', href: '/business/services' },
    ],
  },
  {
    id: 'admin',
    label: 'Administration',
    icon: 'settings',
    href: '/admin',
  },
  {
    id: 'sms',
    label: 'SMS Notifications',
    icon: 'bell',
    href: '/sms',
  },
  {
    id: 'push',
    label: 'Push Notifications',
    icon: 'bell',
    href: '/push',
  },
  {
    id: 'email',
    label: 'Email Notifications',
    icon: 'mail',
    href: '/email',
  },
  {
    id: 'data',
    label: 'Data',
    icon: 'database',
    href: '/data',
  },
  {
    id: 'dev',
    label: 'Developer menu',
    icon: 'code',
    href: '/developer',
  },
];

export const bottomMenuData: MenuItem[] = [
  { id: 'help', label: 'Help', icon: 'gift', href: '/help' },
  { id: 'settings-bottom', label: 'Settings', icon: 'settings', href: '/settings' },
];