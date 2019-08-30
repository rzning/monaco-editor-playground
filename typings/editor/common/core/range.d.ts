// todo...

declare namespace monaco {
  /**
   * 编辑器中的一个区域范围。该接口适用于序列化。
   */
  export interface IRange {
    readonly startLineNumber: number;
    readonly startColumn: number;
    readonly endLineNumber: number;
    readonly endColumn: number;
  }

  /**
   * 编辑器中的一个区域范围
   */
  export class Range {
    //
  }
}
