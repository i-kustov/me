import { BaseWindow } from '@/components';
import { atom } from 'jotai';
import React, { ReactElement } from 'react';

interface Window {
  id: number;
  element: ReactElement;
}

export const maxWindowZIndexStore = atom(1);

export const activeWindowsStore = atom<Window[]>(
  [
    {
      id: 0,
      element: React.createElement(BaseWindow, {
        windowId: 0,
        key: 0,
        title: 'Test'
      })
    },
    {
      id: 1,
      element: React.createElement(BaseWindow, {
        windowId: 1,
        key: 1,
        title: 'Another test'
      })
    },
  ]
);