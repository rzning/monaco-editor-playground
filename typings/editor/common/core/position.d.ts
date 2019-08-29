// todo...

declare namespace monaco {

  /**
   * 一个编辑器中的位置。
   * 此接口适用于序列化。
   */
  export interface IPosition {
    /**
     * 行号（以 1 起始）
     */
    readonly lineNumber: number;
    /**
     * 列号（一行中的第一个字符位于第 1 列和第 2 列之间）
     */
    readonly column: number;
  }

  /**
   * 编辑器中的一个位置
   */
  export class Position {
    //
  }
}
