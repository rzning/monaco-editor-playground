// todo...

declare namespace monaco {

  /**
   * 统一资源标识符 ( Uniform Resource Identrfier )
   * 
   * 这个类是一个简单的解析器，它使用最少的验证和编码创建基本组件部分。
   * 
   * @see http://tools.ietf.org/html/rfc3986
   * 
   * ```
   * Uri = scheme:[//authority]path[?query][#fragment]
   * 
   * authority = [userinfo@]host[:port]
   * ```
   * 
   * 示例：
   * 
   * ```
   *  foo://example.com:8042/over/there?name=ferret#nose
   *  \_/   \______________/\_________/ \_________/ \__/
   *   |           |            |            |        |
   * scheme    authority       path        query   fragment
   *   |   _____________________|__
   *  / \ /                        \
   *  urn:example:animal:ferret:nose
   * ```
   */
  export class Uri implements UriComponents { // :113

    static isUri(thing: any): thing is Uri;

    readonly scheme: string;
    readonly authority: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
  }

  export interface UriComponents { // :394
    scheme: string;
    authority: string;
    path: string;
    query: string;
    fragment: string;
  }

}
