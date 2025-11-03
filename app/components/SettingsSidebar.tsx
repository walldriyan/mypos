// components/SettingsSidebar.tsx
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Icon } from './Icon';
import { NavLink } from './NavLink';
import { SettingsMenuItem, SettingsSidebarProps } from '../types/settings.types';

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  menuItems,
  onNavigate,
  userInitials = 'AB',
  logo,
  bottomItems = [],
  title = 'Settings',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: SettingsMenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      // If has sub items, show in right panel
      setSelectedItem(selectedItem === item.id ? null : item.id);
    } else if (item.onClick) {
      item.onClick();
    } else if (item.href && onNavigate) {
      onNavigate(item.href);
    }
  };

  const selectedMenuItem = menuItems.find(item => item.id === selectedItem);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          isCollapsed ? 'w-20' : 'w-72'
        }`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-3">
                {logo || (
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <div className="text-white font-bold">L</div>
                  </div>
                )}
                <h1 className="text-xl font-semibold">{title}</h1>
              </div>
            </>
          ) : (
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mx-auto">
              <div className="text-white font-bold">L</div>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 transition-colors ${
                selectedItem === item.id
                  ? 'bg-gray-100'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex-shrink-0">
                <Icon name={item.icon} className="w-5 h-5 text-gray-600" />
              </div>
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left text-sm font-medium text-gray-900">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {(item.hasArrow || (item.subItems && item.subItems.length > 0)) && (
                    <ChevronRight size={18} className="text-gray-400" />
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom Items */}
        <div className="p-4 border-t border-gray-200">
          {bottomItems.map(item => (
            <NavLink
              key={item.id}
              href={item.href}
              onClick={item.onClick}
              onNavigate={onNavigate}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer mb-2"
            >
              <Icon name={item.icon} className="w-5 h-5 text-gray-600 flex-shrink-0" />
              {!isCollapsed && (
                <span className="flex-1 text-sm font-medium text-gray-900">{item.label}</span>
              )}
            </NavLink>
          ))}
          <div className="flex items-center gap-3 p-3 mt-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
              {userInitials}
            </div>
            {!isCollapsed && (
              <span className="text-sm font-medium text-gray-900">Profile</span>
            )}
          </div>
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-3 border-t border-gray-200 hover:bg-gray-50 flex items-center justify-center"
        >
          {isCollapsed ? (
            <ChevronRight size={20} className="text-gray-600" />
          ) : (
            <ChevronLeft size={20} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Right Panel - Sub Items */}
      {selectedMenuItem && selectedMenuItem.subItems && (
        <div className="w-80 bg-white border-r border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-6">{selectedMenuItem.label}</h2>
          <div className="space-y-2">
            {selectedMenuItem.subItems.map(subItem => (
              <NavLink
                key={subItem.id}
                href={subItem.href}
                onClick={subItem.onClick}
                onNavigate={onNavigate}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  {subItem.icon && (
                    <Icon name={subItem.icon} className="w-5 h-5 text-gray-600" />
                  )}
                  <span className="text-sm font-medium text-gray-900">{subItem.label}</span>
                </div>
                {subItem.badge === 'active' && (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                )}
                {typeof subItem.badge === 'number' && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {subItem.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {selectedMenuItem ? (
          <div>
            <h1 className="text-2xl font-bold mb-2">{selectedMenuItem.label}</h1>
            <p className="text-gray-600">
              Configure your {selectedMenuItem.label.toLowerCase()} settings here.
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-400 mb-2">
                Select a setting
              </h2>
              <p className="text-gray-400">Choose an option from the sidebar to get started</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};