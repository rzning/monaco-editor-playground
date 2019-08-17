// todo...

declare namespace monaco {

  /**
   * 一个词法分析生成的令牌集
   */
	export class Token {
		_tokenBrand: void;
		readonly offset: number;
		readonly type: string;
		readonly language: string;
		constructor(offset: number, type: string, language: string);
		toString(): string;
	}

}
