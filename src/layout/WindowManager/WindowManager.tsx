import { FC } from 'react';
import { useAtomValue } from 'jotai';

import { activeWindowsStore } from '@/stores/activeWindows';

export const WindowManager: FC = () => {
  const windows = useAtomValue(activeWindowsStore);

  return <>
    {windows.map((window) => window.element)}
  </>;
};
