import React, { FC } from 'react';
import { Desktop, Dock, MenuBar, WindowManager } from '@/layout';

const App: FC = () => {
  return <main className='flex flex-col h-screen'>
    <MenuBar />
    <Desktop />
    <Dock />

    <WindowManager />
  </main>;
};

export default App;