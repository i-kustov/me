export interface FileProps {
  /**
   * Name of the file
   */
  name: string;
  /**
   * Type of the file
   */
  type: 'file' | 'folder';
  /**
   * Classname for the file
   */
  className: string;
  /**
   * Program associated with the file
   */
  linkedProgram: string;
  /**
   * Additional arguments for the program
   */
  programArguments?: string;
}