// todo...

declare namespace monaco.editor {

  /**
   * 主题类型
   */
  export type ThemeType = 'light' | 'dark' | 'hc';


  /**
   * 一个主题
   */
  export interface ITheme { // :46

    readonly type: ThemeType;

    // getColor(color: ColorIdentifier, useDefault?: boolean): Color | undefined;

    // defines(color: ColorIdentifier): boolean;

  }

}
