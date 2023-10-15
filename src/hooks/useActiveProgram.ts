import { useAtom } from 'jotai';
import { activeWindowsStore, maxWindowZIndexStore } from '@/stores/activeWindows';

export const useActiveProgram = (id: number) => {
  const [activeWindows, setActiveWindows] = useAtom(activeWindowsStore);

  const [maxWindowZIndex, setMaxWindowZIndex] = useAtom(maxWindowZIndexStore);

  const activeProgram = activeWindows.find((window) => window.id === id);

  if (!activeProgram) {
    throw new Error('Incorrect ID');
  }

  const closeProgram = () => {
    setActiveWindows((prev) => [...prev.filter((elem) => elem.id !== id)]);
  };

  const moveWindowToFront = () => {
    setMaxWindowZIndex((prev) => prev + 1);
  };

  return {
    close: closeProgram,
    moveWindowToFront,
    maxWindowZIndex
  } as const;
};