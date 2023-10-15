import React, { FC, useEffect, useLayoutEffect, useRef } from 'react';

import { useActiveProgram } from '@/hooks/useActiveProgram';

import { BaseWindowProps } from './BaseWindow.props';
import style from './BaseWindow.module.css';

export const BaseWindow: FC<BaseWindowProps> = (props) => {
  const { windowId, title } = props;

  const { close, maxWindowZIndex, moveWindowToFront } = useActiveProgram(windowId);

  const toolbarRef = useRef<HTMLDivElement>(null);

  const windowRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = () => {
    close();
  };

  const handleWindowMousedown = () => {
    if (!windowRef.current) {
      return;
    }

    const currentZIndex = +windowRef.current.style.zIndex;

    if (currentZIndex !== maxWindowZIndex) {
      windowRef.current.style.zIndex = String(maxWindowZIndex + 1);
      moveWindowToFront();
    }
  };

  useLayoutEffect(() => {
    if (!windowRef.current) {
      return;
    }

    const windowEl = windowRef.current;

    windowEl.style.top = `${window.innerHeight / 2 - windowEl.clientHeight / 2}px`;
    windowEl.style.left = `${window.innerWidth / 2 - windowEl.clientWidth / 2}px`;

    windowEl.style.zIndex = String(maxWindowZIndex + 1);
    moveWindowToFront();
  }, []);

  useEffect(() => {
    let isMouseDown = false;

    let mouseX: number;

    let mouseY: number;

    if (!toolbarRef.current || !windowRef.current) {
      return;
    }

    const toolbarEl = toolbarRef.current;

    const windowEl = windowRef.current;

    const handleToolbarMousedown = (e: MouseEvent) => {
      isMouseDown = true;

      if (!mouseX) {
        mouseX = e.clientX;
      }

      if (!mouseY) {
        mouseY = e.clientY;
      }
    };

    const handleToolbarMouseup = () => {
      isMouseDown = false;
      mouseX = 0;
      mouseY = 0;
    };

    const handleWindowMousemove = (e: MouseEvent) => {
      if (!isMouseDown) {
        return;
      }

      const prevX = parseFloat(windowEl.style.left);

      const prevY = parseFloat(windowEl.style.top);

      windowEl.style.left = `${prevX + e.clientX - mouseX}px`;
      windowEl.style.top = `${prevY + e.clientY - mouseY}px`;

      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    toolbarEl.addEventListener('mousedown', handleToolbarMousedown);
    toolbarEl.addEventListener('mouseup', handleToolbarMouseup);

    window.addEventListener('mousemove', handleWindowMousemove);

    return () => {
      toolbarEl.removeEventListener('mousedown', handleToolbarMousedown);
      toolbarEl.removeEventListener('mouseup', handleToolbarMouseup);

      window.removeEventListener('mousemove', handleWindowMousemove);
    };
  }, []);

  return <div
    className={style.window}
    ref={windowRef}
    onMouseDown={handleWindowMousedown}
  >
    <div className={style.toolbar} ref={toolbarRef}>
      <div className='flex space-x-2 flex-1'>
        <div
          className='w-3 h-3 rounded-full bg-sunsetOrange cursor-pointer'
          onClick={handleCloseClick}
        />
        <div
          className='w-3 h-3 rounded-full bg-ripeMango cursor-pointer'
        />
        <div
          className='w-3 h-3 rounded-full bg-limeGreen cursor-pointer'
        />
      </div>

      <div className={style.toolbar__title}>{title}</div>
    </div>
    <div className={style.content}></div>
  </div>;
};
