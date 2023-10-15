import React, { FC } from 'react';

import { files } from './Desktop.files';

import { File } from './File/File';

export const Desktop: FC = () => {
  return <div className='flex-1 p-4 space-y-2'>
    {files.map((file) => <File
      key={file.name}
      type={file.type}
      name={file.name}
      linkedProgram={file.linkedProgram}
      programArguments={file.programArguments}
      className=''
    />)}
  </div>;
};
