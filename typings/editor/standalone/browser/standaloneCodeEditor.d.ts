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
   * 用于创建一个差异编辑器的选项
   */
  export interface IDiffEditorConstructionOptions extends IDiffEditorOptions { // :115

    /**
     * //
     * @see [IDiffEditorConstructionOptions.theme](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html#theme)
     */
    theme?: string;

  }

  /**
   * 一个独立的差异编辑器
   */
  export interface IStandaloneDiffEditor extends IDiffEditor { // :131
    //
  }

}
