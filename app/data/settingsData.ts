// data/settingsData.ts

import { SettingsMenuItem } from "../types/settings.types";

export const settingsMenuData: SettingsMenuItem[] = [
  {
    id: 'business',
    label: 'Business',
    icon: 'briefcase',
    hasArrow: true,
    subItems: [
      {
        id: 'company',
        label: 'Company',
        icon: 'building',
        href: '/settings/business/company',
        badge: 'active',
      },
      {
        id: 'locations',
        label: 'Locations',
        icon: 'mapPin',
        href: '/settings/business/locations',
      },
      {
        id: 'services',
        label: 'Services',
        icon: 'wrench',
        href: '/settings/business/services',
      },
    ],
  },
  {
    id: 'administration',
    label: 'Administration',
    icon: 'settings',
    hasArrow: true,
    href: '/settings/administration',
  },
  {
    id: 'sms-notifications',
    label: 'SMS Notifications',
    icon: 'bell',
    hasArrow: true,
    href: '/settings/sms',
  },
  {
    id: 'push-notifications',
    label: 'Push Notifications',
    icon: 'bell',
    hasArrow: true,
    href: '/settings/push',
  },
  {
    id: 'email-notifications',
    label: 'Email Notifications',
    icon: 'mail',
    hasArrow: true,
    href: '/settings/email',
  },
  {
    id: 'data',
    label: 'Data',
    icon: 'database',
    hasArrow: true,
    href: '/settings/data',
  },
  {
    id: 'developer',
    label: 'Developer menu',
    icon: 'code',
    hasArrow: true,
    href: '/settings/developer',
  },
];

export const settingsBottomItems: SettingsMenuItem[] = [
  {
    id: 'help',
    label: 'Help docs',
    icon: 'gift',
    href: '/help',
  },
  {
    id: 'gifts',
    label: 'Gifts',
    icon: 'gift',
    href: '/gifts',
  },
];