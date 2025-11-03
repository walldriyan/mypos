// components/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronRight, ChevronLeft, Menu } from 'lucide-react';
import { SidebarProps } from '../types';
import { NavLink } from './NavLink';
import { Icon } from './Icon';


export const LSidebar: React.FC<SidebarProps> = ({
  menuItems,
  workspaces = [],
  onCreateNew,
  onNavigate,
  userInitials = 'AB',
  logo,
  bottomItems = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (id: string) => {
    setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-full ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        {isExpanded ? (
          <>
            {logo || (
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <div className="text-white font-bold">L</div>
              </div>
            )}
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft size={20} />
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="p-1 hover:bg-gray-100 rounded mx-auto"
          >
            <Menu size={20} />
          </button>
        )}
      </div>

      {/* Workspaces */}
      {isExpanded && workspaces.length > 0 && (
        <div className="p-3 border-b border-gray-200 max-h-48 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 mb-2">WORKSPACES</div>
          {workspaces.map(ws => (
            <div
              key={ws.id}
              className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer mb-1 ${
                ws.active ? 'bg-gray-100' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Icon name={ws.icon} className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{ws.name}</div>
                <div className="text-xs text-gray-500 truncate">{ws.description}</div>
              </div>
              {ws.active && <div className="text-green-600">✓</div>}
            </div>
          ))}
          {onCreateNew && (
            <button
              onClick={onCreateNew}
              className="w-full flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded mt-2"
            >
              <span className="text-lg">+</span>
              <span>Create new</span>
            </button>
          )}
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 p-3 overflow-y-auto">
        {menuItems.map(item => (
          <div key={item.id} className="mb-1">
            {item.subItems ? (
              <Collapsible.Root
                open={openMenus[item.id]}
                onOpenChange={() => toggleMenu(item.id)}
              >
                <Collapsible.Trigger className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer group">
                  <Icon name={item.icon} className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  {isExpanded && (
                    <>
                      <span className="flex-1 text-left text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`text-gray-400 transition-transform ${
                          openMenus[item.id] ? 'rotate-90' : ''
                        }`}
                      />
                    </>
                  )}
                </Collapsible.Trigger>
                {isExpanded && (
                  <Collapsible.Content className="ml-8 mt-1">
                    {item.subItems.map(sub => (
                      <NavLink
                        key={sub.id}
                        href={sub.href}
                        onClick={sub.onClick}
                        onNavigate={onNavigate}
                        className="flex items-center justify-between p-2 hover:bg-gray-100 rounded text-sm text-gray-600 mb-1"
                      >
                        <span>{sub.label}</span>
                        {sub.badge && (
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        )}
                      </NavLink>
                    ))}
                  </Collapsible.Content>
                )}
              </Collapsible.Root>
            ) : (
              <NavLink
                href={item.href}
                onClick={item.onClick}
                onNavigate={onNavigate}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                <Icon name={item.icon} className="w-5 h-5 text-gray-600 flex-shrink-0" />
                {isExpanded && (
                  <span className="flex-1 text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                )}
                {isExpanded && item.badge && (
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="p-3 border-t border-gray-200">
        {bottomItems.map(item => (
          <NavLink
            key={item.id}
            href={item.href}
            onClick={item.onClick}
            onNavigate={onNavigate}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer mb-1"
          >
            <Icon name={item.icon} className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {isExpanded && (
              <span className="flex-1 text-sm font-medium text-gray-700">{item.label}</span>
            )}
          </NavLink>
        ))}
        {!isExpanded && (
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium mx-auto mt-2">
            {userInitials}
          </div>
        )}
        {isExpanded && (
          <div className="flex items-center gap-2 p-2 mt-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              {userInitials}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LSidebar;