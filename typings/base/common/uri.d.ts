// todo...

declare namespace monaco {

  export class Uri implements UriComponents {

    static isUri(thing: any): thing is Uri;

    readonly scheme: string;
    readonly authority: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
  }

  export interface UriComponents {
    scheme: string;
    authority: string;
    path: string;
    query: string;
    fragment: string;
  }

}
