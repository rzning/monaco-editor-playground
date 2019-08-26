// todo...

/// <reference types="./config/editorOptions" />

declare namespace monaco.editor {

  /**
   * 一个编辑器
   */
  export interface IEditor { // :240
    
    /**
     * 编辑器已被处理时触发的事件
     * @param listener 一个监听器回调
     * @event
     */
    onDidDispose(listener: () => void): IDisposable;

    /**
     * 处理编辑器
     */
    dispose(): void;

    /**
     * 获取此编辑器实例的唯一 ID
     */
    getId(): string;

    /**
     * 获取编辑器类型，请参阅 `EditorType` 。
     * 这是为了避免 instanceof 检查。
     */
    getEditorType(): string;

    /**
     * 在创建编辑器后，更新编辑器的选项
     */
    updateOptions(newOptions: IEditorOptions): void;
  }

  /**
   * `IEditor` 的类型
   */
  export const EditorType: { // :609
    /**
     * `'vs.editor.ICodeEditor'`
     */
    ICodeEditor: string,
    /**
     * `'vs.editor.IDiffEditor'`
     */
    IDiffEditor: string
  };

}
