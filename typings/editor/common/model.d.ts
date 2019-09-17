// todo...

/// <reference types="../../base/common/uri" />
/// <reference types="./modes" />

declare namespace monaco.editor {

  /**
   * 一个可以添加、更改或移除模型装饰的访问器
   * @internal
   */
  export interface IModelDecorationsChangeAccessor { // :189
    //
  }

  /**
   * 行结束符首选项
   */
  export const enum EndOfLinePreference { // :247
    /**
     * 使用文本缓冲区中标识的换行符
     */
    TextDefined = 0,
    /**
     * 使用换行 ( `\n` ) 作为换行符
     */
    LF = 1,
    /**
     * 使用回车和换行 ( `\r\n` ) 作为换行符
     */
    CRLF = 2
  }

  /**
   * 实例化模型时使用的默认换行符
   */
  export const enum DefaultEndOfLine { // :265
    /**
     * 使用换行 ( `\n` ) 作为行结束符
     */
    LF = 1,
    /**
     * 使用回车和换行 ( `\r\n` ) 作为行尾字符
     * - 回车 Carriage Return, CR, ASCII 13, \r
     * - 换行 Line Feed, LF, ASCII 10, \n
     */
    CRLF = 2
  }

  /**
   * 文本编辑器模型的已解析选项
   */
  export class TextModelResolvedOptions { // :369
    _textModelResolvedOptionsBrand: void;

    /** 制表符大小 */
    readonly tabSize: number;
    /** 缩进大小 */
    readonly indentSize: number;
    /** 是否插入空格 */
    readonly insertSpaces: boolean;
    /** 默认行尾结束符 */
    readonly defaultEOL: DefaultEndOfLine;
    /** 是否自动裁剪空格 */
    readonly trimAutoWhitespace: boolean;
  }

  /**
   * 一个文本编辑器的模型
   */
  export interface ITextModel { // :501

    /**
     * 获取与此编辑器模型关联的资源
     */
    readonly uri: Uri;

    /**
     * 与此模型关联的唯一标识符
     */
    readonly id: string;

    /**
     * 指示此模型是为一个简单小部件代码编辑器而构建
     * @internal
     */
    readonly isForSimpleWidget: boolean;

    /**
     * - 若为 `true` 则文本模型可能包含 RTL
     * - 若为 `false` 则文本模型只包含 LTR
     * @internal
     */
    mightContainRTL(): boolean;

    /**
     * - 若为 `true` 则文本模型可能包含非基本 ASCII
     * - 若为 `false` 则文本模型只包含基本 ASCII
     * @internal
     */
    mightContainNonBasicASCII(): boolean;

    /**
     * 获取模型的已解析选项
     */
    getOptions(): TextModelResolvedOptions;

    /**
     * 获取此模型的格式化选项
     * @internal
     */
    getFormattingOptions(): FormattingOptions;

    /**
     * 获取此模型的当前版本 ID
     * 
     * 每当模型发生改变（甚至是撤销或恢复 `undo/redo` 操作）时，版本 ID 都会增加。
     */
    getVersionId(): number;

    /**
     * 获取此模型的替代版本 ID
     * 
     * 此替代版本 ID 并不总是递增的，在撤销和恢复 `undo-redo` 操作时返回相同的值。
     */
    getAlternativeVersionId(): number;

    /**
     * 替换此模型中包含的整个文本缓冲区值
     * @param newValue 新的文本字符串
     */
    setValue(newValue: string): void;

    /**
     * 替换此模型中包含的整个文本缓冲区值
     * @param newValue 一个新的文本缓冲区对象
     */
    setValueFromTextBuffer(newValue: ITextBuffer): void;
  }

  /**
   * 一个文本缓冲区
   * @internal
   */
  export interface ITextBuffer { // :1185
    // todo...
  }

}