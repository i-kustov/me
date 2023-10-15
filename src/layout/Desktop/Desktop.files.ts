interface File {
  /**
   * Type of the file
   */
  type: 'file' | 'folder';
  /**
   * X coordinate of the file on the desktop
   */
  x: number;
  /**
   * Y coordinate of the file on the desktop
   */
  y: number;
  /**
   * Name of the file
   */
  name: string;
  /**
   * Program associated with the file
   */
  linkedProgram: string;
  /**
   * Additional arguments for the program
   */
  programArguments?: string;
}

export const files: File[] = [
  {
    type: 'file',
    linkedProgram: 'pdfViewer',
    name: 'Ivan Kustov CV',
    x: 0,
    y: 0
  },
  {
    type: 'folder',
    linkedProgram: 'finder',
    name: 'Do not open!',
    x: 0,
    y: 1
  }
];