// todo...

/// <reference types="./range" />

declare namespace monaco {

  /**
   * 编辑器中的一个选择区域。
   * 选择区域是一个有方向的范围。
   */
  export interface ISelection {
    //
  }

  /**
   * 一个选择区域的方向
   */
  export const enum SelectionDirection {
    /** 选择区域在它结束的地方的上方开始（从左到右） */
    LTR,
    /** 选择区域在它结束的地方的下方开始（从右到左） */
    RTL
  }

  /**
   * 编辑器中的一个选择区域。
   * 选择区域是一个有方向的范围。
   */
  export class Selection extends Range {
    //
  }
}
