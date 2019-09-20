// todo...

/// <reference types="../../../base/common/lifecycle" />
/// <reference types="../model" />

declare namespace monaco.editor {

  /**
   * 一个文本编辑器模型
   */
  export class TextModel extends Disposable implements ITextModel { // :160
    
    public readonly id: string; // :240
    public readonly isForSimpleWidget: boolean;
    private _attachedEditorCount: number;
    private _buffer: ITextBuffer;
    private _options: TextModelResolvedOptions;
  
    /**
     * 
     */
    public setValue(value: string): void; // :374

    public setValueFromTextBuffer(textBuffer: ITextBuffer): void; // :401

    // public get uri(): Uri; // :556
    public uri: Uri;

    //#region Options :560

    public getOptions(): TextModelResolvedOptions;

    public getFormattingOptions(): FormattingOptions;

    //#endregion

    //#region Reading :650

    public getVersionId(): number;

    /**
     * `this._buffer.mightContainRTL();`
     */
    public mightContainRTL(): boolean;

    public mightContainNonBasicASCII(): boolean;

    public getAlternativeVersionId(): number;

    //#endregion

  }
}
