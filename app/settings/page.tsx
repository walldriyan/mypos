// app/settings/page.tsx
'use client';


import { useRouter } from 'next/navigation';
import { SettingsSidebar } from '../components/SettingsSidebar';
import { settingsBottomItems, settingsMenuData } from '../data/settingsData';

export default function SettingsPage() {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    console.log('Navigate to:', href);
    // router.push(href);
  };

  return (
    <SettingsSidebar
      title="Settings"
      menuItems={settingsMenuData}
      bottomItems={settingsBottomItems}
      onNavigate={handleNavigate}
      userInitials="AB"
    />
  );
}