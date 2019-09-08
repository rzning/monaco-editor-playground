// todo...

/// <reference types="../../base/common/uri" />

declare namespace monaco.editor {

  /**
   * 一个可以添加、更改或移除模型装饰的访问器
   * @internal
   */
  export interface IModelDecorationsChangeAccessor { // :189
    //
  }

  /**
   * 一个文本编辑器的模型
   */
  export interface ITextModel { // :501

    /**
     * 获取与此编辑器模型关联的资源
     */
    readonly uri: Uri;

    /**
     * 与此模型关联的唯一标识符
     */
    readonly id: string;

    /**
     * 指示此模型是为一个简单小部件代码编辑器而构建
     * @internal
     */
    readonly isForSimpleWidget: boolean;
  }

}