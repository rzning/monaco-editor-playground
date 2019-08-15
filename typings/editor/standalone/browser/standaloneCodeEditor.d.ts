// todo...

/// <reference types="../../browser/editorBrowser" />
/// <reference types="../../common/config/editorOptions" />
/// <reference types="../../common/model/textModel" />

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

  export interface IStandaloneCodeEditor extends ICodeEditor {
    //
  }

  /**
   * 用于创建一个差异 ( Diff ) 编辑器的选项
   */
  export interface IDiffEditorConstructionOptions extends IDiffEditorOptions { // :115
    theme?: string;
  }

  export interface IStandaloneDiffEditor extends IDiffEditor { // :131
    //
  }

  export interface IDiffEditor extends editorCommon.IEditor { // :836
    //
  }

}
