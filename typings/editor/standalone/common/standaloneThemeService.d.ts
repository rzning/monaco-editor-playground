// todo...

/**
 * 独立的主题服务
 */

/// { ITokenThemeRule, TokenTheme }
/// <reference types="../../common/modes/supports/tokenization" />
/// { ITheme, IThemeService }
/// <reference types="../../../platform/theme/common/themeService" />

declare namespace monaco.editor {

  /**
   * 内置主题
   */
  export type BuiltinTheme = 'vs' | 'vs-dark' | 'hc-black';

  /**
   * 颜色组
   */
  export type IColors = { [colorId: string]: string; };

  /**
   * 一个独立的主题数据
   */
  export interface IStandaloneThemeData {
		base: BuiltinTheme;
		inherit: boolean;
		rules: ITokenThemeRule[];
		encodedTokensColors?: string[];
		colors: IColors;
	}

  /**
   * 一个独立的主题
   */
  export interface IStandaloneTheme extends ITheme {
    tokenTheme: TokenTheme;
    themeName: string;
  }
  
}
