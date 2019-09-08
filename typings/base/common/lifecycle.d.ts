// todo...

declare namespace monaco {

  /**
   * 一次性的，用完即可销毁的对象
   */
  export interface IDisposable { // :47
    dispose(): void;
  }

  export abstract class Disposable implements IDisposable { // :139
    static None: Readonly<IDisposable>;
    public dispose(): void;
  }
}
