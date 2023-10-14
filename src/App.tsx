import React, { FC } from 'react';
import { Desktop, Dock, MenuBar } from '@/layout';

const App: FC = () => {
  return <main className='flex flex-col h-screen'>
    <MenuBar />
    <Desktop />
    <Dock />
  </main>;
};

export default App;