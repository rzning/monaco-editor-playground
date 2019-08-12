// todo...

declare namespace monaco.editor {
  /**
   * 用于创建一个编辑器的选项
   */
  export interface IEditorConstructionOptions extends IEditorOptions {
    /**
     * 与此代码编辑器相关联的初始原型 ( initial model )
     */
    model?: ITextModel | null;

    value?: string;
  }

  /**
   * 编辑器配置选项
   */
  export interface IEditorOptions {
    
    ariaLabel?: string;
  }
}