// todo...

/// <reference types="../../../base/common/lifecycle" />
/// <reference types="./standaloneCodeEditor" />
/// <reference types="./standaloneServices" />

declare namespace monaco.editor {

  /**
   * 在 `domElement` 下创建一个新的编辑器。
   * `domElement` 应该为空（不包含任何 DOM 节点）。
   * 编辑器将读取 `domElement` 的大小。
   */
  export function create (domElement: HTMLElement, options?: IEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneCodeEditor;

  /**
   * 创建编辑器时触发。
   * 创建 Diff 编辑器可能会导致此侦听器被两个编辑器调用。
   * @event
   */
  export function onDidCreateEditor(listener: (codeEditor: ICodeEditor) => void): IDisposable;

  /**
   * 
   */
	export function createDiffEditor(domElement: HTMLElement, options?: IDiffEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneDiffEditor;

}
