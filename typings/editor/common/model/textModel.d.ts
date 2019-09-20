// todo...

/// <reference types="../../../base/common/lifecycle" />
/// <reference types="../model" />

declare namespace monaco.editor {

  /**
   * 一个文本编辑器模型
   */
  export class TextModel extends Disposable implements ITextModel { // :160
    
    /** 编辑器模型 ID */
    public readonly id: string; // :240
    /** 是否是一个简单小部件 */
    public readonly isForSimpleWidget: boolean;
    /** 关联的编辑器数量 */
    private _attachedEditorCount: number;
    /** 缓冲区 */
    private _buffer: ITextBuffer;
    /** 已解析的选项 */
    private _options: TextModelResolvedOptions;

    /** 
     * 指示当前编辑器为已处理状态
     * 
     * - 若为 `true` 时，调用此模型的部分方法时不做任何处理。
     */
    private _isDisposed: boolean;
    /**
     * 指示当前编辑器模型正在进行处理操作
     */
    private _isDisposing: boolean;

    /**
     * 编辑器模型的当前版本 ID
     * 
     * - 当用户执行操作时，内部调用 {@link _increaseVersionId} 方法，使版本 ID 递增。
     * 
     * ```js
     * this._increaseVersionId()
     * ```
     * 
     * - 可调用 {@link getVersionId} 方法获取当前版本 ID 值。
     */
    private _versionId: number;

    /**
     * 设置编辑器模型内编辑的文本
     * 
     * ```js
     * const textBuffer = createTextBuffer(value, this._options.defaultEOL);
     * this.setValueFromTextBuffer(textBuffer);
     * ```
     * 
     * @see [[setValueFromTextBuffer]]
     */
    public setValue(value: string): void; // :374

    public setValueFromTextBuffer(textBuffer: ITextBuffer): void; // :401

    // public get uri(): Uri; // :556
    public uri: Uri;

    //#region Options :560

    /**
     * 获取当前模型的已解析选项
     */
    public getOptions(): TextModelResolvedOptions;

    /**
     * 获取此模型的格式化选项
     */
    public getFormattingOptions(): FormattingOptions;

    //#endregion

    //#region Reading :650

    /**
     * 获取此模型的当前版本 ID
     * 
     * ```js
     * return this._versionId;
     * ```
     * 
     * @see [[_versionId]]
     */
    public getVersionId(): number;

    /**
     * `this._buffer.mightContainRTL();`
     */
    public mightContainRTL(): boolean;

    public mightContainNonBasicASCII(): boolean;

    public getAlternativeVersionId(): number;

    /**
     * 增加版本 ID
     * 
     * ```js
     * this._versionId = this._versionId + 1;
     * this._alternativeVersionId = this._versionId;
     * ```
     */
    private _increaseVersionId(): void;

    //#endregion

  }
}
