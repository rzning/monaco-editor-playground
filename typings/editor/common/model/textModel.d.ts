// todo...

/// <reference types="../../../base/common/lifecycle" />

declare namespace monaco.editor {

  /**
   * 一个文本编辑器模型
   */
  export class TextModel extends Disposable implements ITextModel { // :160
    
    public readonly id: string; // :240
    public readonly isForSimpleWidget: boolean;

    // public get uri(): Uri; // :556
    public uri: Uri;
  }
}
