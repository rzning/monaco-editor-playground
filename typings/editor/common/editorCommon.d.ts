// todo...

/// <reference types="../../base/common/lifecycle" />
/// <reference types="./config/editorOptions" />
/// <reference types="./core/position" />
/// <reference types="./core/range" />
/// <reference types="./core/selection" />
/// <reference types="./model" />

declare namespace monaco.editor {

  /**
   * 一个差异编辑器的模型
   */
  export interface IDiffEditorModel { // :93
    /** 原始文本模型 */
    original: ITextModel;
    /** 修改的文本模型 */
    modified: ITextModel;
  }

  /**
   * 一个包含 `width` 和 `height` 的尺寸
   */
  export interface IDimension { // :118
    /** 宽度 */
    width: number;
    /** 高度 */
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
   * 一个编辑器的模型
   */
  export type IEditorModel = ITextModel | IDiffEditorModel;

  /**
   * 光标状态（可序列化）
   */
  export interface ICursorState {
    inSelectionMode: boolean;
    selectionStart: IPosition;
    position: IPosition;
  }

  /**
   * 视图状态（可序列化）
   */
  export interface IViewState {
    /** 由以前的版本编写 */
    scrollTop?: number;
    /** 由以前的版本编写 */
    scrollTopWithoutViewZones?: number;
    scrollLeft: number;
    firstPosition: IPosition;
    firstPositionDeltaTop: number;
  }

  /**
   * 代码编辑器的状态（可序列化）
   */
  export interface ICodeEditorViewState { // :215
    cursorState: ICursorState[];
    viewState: IViewState;
    contributionsState: { [id: string]: any };
  }

  /**
   * 差异编辑器的视图状态（可序列化）
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
   * 滚动类型
   */
  export const enum ScrollType {
    /** 平滑滚动 */
    Smooth = 0,
    /** 即时滚动 */
    Immediate = 1,
  }
  

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

    /**
     * 从 `saveViewState` 生成的可序列化对象中恢复编辑器的视图状态
     */
    restoreViewState(state: IEditorViewState): void;

    /**
     * 给定一个位置，返回一个将标签宽度考虑在内的列号
     * @returns 列号
     */
    getVisibleColumnFromPosition(position: IPosition): number;

    /**
     * 返回主光标的位置
     */
    getPosition(): Position | null;

    /**
     * 设置主光标位置。这将移除所有辅助光标。
     * @param position 新的主光标位置
     */
    setPosition(position: IPosition): void;

    /**
     * 显示 `lineNumber` 指定行，必要时进行垂直滚动。
     * @param lineNumber 行号
     * @param scrollType 滚动类型
     */
    revealLine(lineNumber: number, scrollType?: ScrollType): void;

    /**
     * 垂直居中显示 `lineNumber` 指定行，必要时垂直滚动。
     * @param lineNumber 行号
     * @param scrollType 滚动类型
     */
    revealLineInCenter(lineNumber: number, scrollType?: ScrollType): void;

    /**
     * 仅当 `lineNumber` 指定行在可视窗口之外时，将其垂直滚动到中间位置。
     * @param lineNumber 行号
     * @param scrollType 滚动类型
     */
    revealLineInCenterIfOutsideViewport(lineNumber: number, scrollType?: ScrollType): void;

    /**
     * 显示 `position` 指定位置，必要时进行垂直或水平滚动。
     * @param position 位置
     * @param scrollType 滚动类型
     */
    revealPosition(position: IPosition, scrollType?: ScrollType): void;

    /**
     * 居中显示 `position` 指定位置，必要时进行垂直或水平滚动。
     * @param position 位置
     * @param scrollType 滚动类型
     */
    revealPositionInCenter(position: IPosition, scrollType?: ScrollType): void;

    /**
     * 仅当 `position` 指定位置在可视窗口之外时，进行必要垂直或水平滚动使其居中显示。
     * @param position 位置
     * @param scrollType 滚动类型
     */
    revealPositionInCenterIfOutsideViewport(position: IPosition, scrollType?: ScrollType): void;

    /**
     * 返回编辑器的主选择区域
     */
    getSelection(): Selection | null;

    /**
     * 返回编辑器中所有选择区域
     */
    getSelections(): Selection[] | null;

    /**
     * 设置编辑器的主选择区域。
     * 这将移除所有辅助光标。
     * @param selection 新的选择区域对象
     */
    setSelection(selection: IRange): void;
    setSelection(selection: Range): void;
    setSelection(selection: ISelection): void;
    setSelection(selection: Selection): void;

    /**
     * 为编辑器的所有光标设置选择区域。
     * 必要时将删除或添加光标。
     * @param selections 选择区域组
     */
    setSelections(selections: ISelection[]): void;

    /**
     * 显示指定范围多行，必要时进行垂直滚动。
     * @param startLineNumber 起始行号
     * @param endLineNumber 结束行号
     * @param scrollType 滚动类型
     */
    revealLines(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;

    /**
     * 垂直居中显示指定范围的多行，必要时进行垂直滚动。
     * @param lineNumber 起始行号
     * @param endLineNumber 结束行号
     * @param scrollType 滚动类型
     */
    revealLinesInCenter(lineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;

    /**
     * 仅当指定范围多行在可视窗口之外时，进行必要的垂直滚动使其居中显示。
     * @param lineNumber 起始行号
     * @param endLineNumber 结束行号
     * @param scrollType 滚动类型
     */
    revealLinesInCenterIfOutsideViewport(lineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;

    /**
     * 显示 `range` 指定区域，必要时进行垂直或水平滚动。
     * @param range 区域范围
     * @param scrollType 滚动类型
     */
    revealRange(range: IRange, scrollType?: ScrollType): void;

    /**
     * 居中显示 `range` 指定区域，必要时进行垂直或水平滚动。
     * @param range 区域范围
     * @param scrollType 滚动类型
     */
    revealRangeInCenter(range: IRange, scrollType?: ScrollType): void;

    /**
     * 在可视窗口顶部显示 `range` 指定区域，必要时进行垂直或水平滚动。
     * @param range 区域范围
     * @param scrollType 滚动类型
     */
    revealRangeAtTop(range: IRange, scrollType?: ScrollType): void;

    /**
     * 仅当 `range` 指定区域不在可视窗口内时，进行必要的垂直或水平滚动使其居中显示。
     * @param range 区域范围
     * @param scrollType 滚动类型
     */
    revealRangeInCenterIfOutsideViewport(range: IRange, scrollType?: ScrollType): void;

    /**
     * 直接触发一个处理方法或一个编辑器操作
     * @param source 触发源
     * @param handlerId 处理方法或一个贡献的 ID
     * @param payload 要发送给处理方法的额外数据
     */
    trigger(source: string, handlerId: string, payload: any): void;

    /**
     * 获取附加到此编辑器的当前模型
     */
    getModel(): IEditorModel | null;

    /**
     * 设置附加到此编辑器的当前模型。
     * 
     * 如果先前的模型是由编辑器通过 `options` 文字对象中的 `value` 键创建的，则它将被销毁。
     * 否则，如果先前的模型是通过 `setModel` 设置的，或者是 `options` 文字对象中的 `model` 键，则不会销毁先前的模型。
     * 
     * 调用 `setModel(null)` 可以安全地从编辑器中分离当前模型。
     * 
     * @param model 一个编辑器模型实例
     */
    setModel(model: IEditorModel | null): void;

    /**
     * 改变装饰组。
     * 
     * 通过此 `changeAccessor` 访问器添加的所有装饰，将获得编辑器的 `ownerId`
     * （这意味着它们不会出现在其他编辑器中）。
     * 
     * @param callback 
     * @see `ITextModel.changeDecorations`
     * @internal
     */
    changeDecorations(callback: (changeAccessor: IModelDecorationsChangeAccessor) => any): any;
  }


  /**
   * 一个差异编辑器
   * @internal
   */
  export interface IDiffEditor extends IEditor { // :467

    /**
     * 获取当前差异编辑器模型
     */
    getModel(): IDiffEditorModel | null;

    /**
     * 获取 `original` 编辑器
     */
    getOriginalEditor(): IEditor;

    /**
     * 获取 `modified` 编辑器
     */
    getModifiedEditor(): IEditor;
  }

  /**
   * 每次创建新编辑器时都会一同创建的编辑器贡献，并在编辑器销毁时一同被销毁。
   */
  export interface IEditorContribution { // :488
    
    /**
     * 获取此贡献的唯一标识
     */
    getId(): string;

    /**
     * 销毁此贡献
     */
    dispose(): void;

    /**
     * 保存视图状态
     */
    saveViewState?(): any;

    /**
     * 恢复 `state` 指定视图状态
     * @param state 视图状态
     */
    restoreViewState?(state: any): void;
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
