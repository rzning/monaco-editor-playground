// todo...

declare namespace monaco.editor {

  /**
   * 在 `domElement` 下创建一个新的编辑器。
   * `domElement` 应该为空（不包含任何 DOM 节点）。
   * 编辑器将读取 `domElement` 的大小。
   */
  export function create (domElement: HTMLElement, options?: IEditorConstructionOptions, override?: IEditorOverrideServices):  IStandaloneCodeEditor;


  
  export interface IEditorOverrideServices {
    [index: string]: any;
  }

}
