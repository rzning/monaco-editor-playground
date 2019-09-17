// todo...

declare namespace monaco {

  /**
   * 格式化选项，此接口用于格式化一个模型
   */
  export interface FormattingOptions { // :942

    /**
     * 一个制表符所占的空格数
     */
    tabSize: number;

    /**
     * 使用空格覆盖制表符
     */
    insertSpaces: boolean;
  }

}
