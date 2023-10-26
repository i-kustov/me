import { FC, useEffect, useState } from 'react';

import { Item } from './Item/Item';
import style from './MenuBar.module.css';

export const MenuBar: FC = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const dayOfWeek = currentDate.toLocaleString('en-us', { weekday: 'short' });

  const dayNum = currentDate.toLocaleString('en-us', { day: '2-digit' });

  const month = currentDate.toLocaleString('en-us', { month: 'short' });

  const hours = ('' + currentDate.getHours()).padStart(2, '0');

  const minutes = ('' + currentDate.getMinutes()).padStart(2, '0');


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className={style['menu-bar']}>
    <div className='flex'>
      <Item isBold>Finder</Item>
      <Item>File</Item>
      <Item>Edit</Item>
      <Item>View</Item>
      <Item>Go</Item>
      <Item>Window</Item>
      <Item>Help</Item>
    </div>

    <div className='flex items-center'>
      <div className={style['date']}>
        {dayOfWeek + ' ' + dayNum + ' ' + month + ' ' + `${hours}:${minutes}`}
      </div>
    </div>
  </div>;
};
