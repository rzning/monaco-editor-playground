/**
 * 着色器
 */

declare namespace monaco.editor {

  /**
   * 一个着色选项
   */
  export interface IColorizerOptions {
    tabSize?: number;
  }
  
  /**
   * 一个着色元素选项
   */
  export interface IColorizerElementOptions extends IColorizerOptions {
    theme?: string;
    mimeType?: string;
  }  

  // export class Colorizer {}
}
