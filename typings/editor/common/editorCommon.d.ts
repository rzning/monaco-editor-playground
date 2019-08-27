// todo...

/// <reference types="../../base/common/lifecycle" />
/// <reference types="./config/editorOptions" />

declare namespace monaco.editor {

  /**
   * 一个包含 `width` 和 `height` 的尺寸
   */
  export interface IDimension { // :118
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
  }

  /**
   * 一个编辑器的操作
   */
  export interface IEditorAction { // :182
    readonly id: string;
    readonly label: string;
    readonly alias: string;
    isSupported(): boolean;
    run(): Promise<void>;
  }

  /**
   * 
   */
  export interface ICodeEditorViewState { // :215
    cursorState: ICursorState[];
    viewState: IViewState;
    contributionsState: { [id: string]: any };
  }

  /**
   * 
   */
  export interface IDiffEditorViewState {
    original: ICodeEditorViewState | null;
    modified: ICodeEditorViewState | null;
  }

  /**
   * 一个编辑器的视图状态
   */
  export type IEditorViewState = ICodeEditorViewState | IDiffEditorViewState;

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

    /**
     * 指示编辑器变为可见
     * @internal
     * @event
     */
    onVisible(): void;

    /**
     * 指示编辑器变为隐藏
     * @internal
     * @event
     */
    onHide(): void;

    /**
     * 指示编辑器重新测量其容器。
     * 当编辑器的容器调整大小时，应调用此方法。
     * @param dimension 
     */
    layout(dimension?: IDimension): void;

    /**
     * 将浏览器焦点放在编辑器文本上
     */
    focus(): void;

    /**
     * 编辑器的文本是否被聚焦
     */
    hasTextFocus(): boolean;

    /**
     * 返回与此编辑器关联的所有操作
     */
    getSupportedActions(): IEditorAction[];

    /**
     * 将编辑器的当前视图状态保存在可序列化对象中
     */
    saveViewState(): IEditorViewState | null;
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
