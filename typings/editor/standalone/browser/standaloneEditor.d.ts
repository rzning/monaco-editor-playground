// todo...

/// { IDisposable } :7
/// <reference types="../../../base/common/lifecycle" />
/// { URI } :8
/// <reference types="../../../base/common/uri" />
/// { IDiffEditorConstructionOptions, IEditorConstructionOptions, IStandaloneCodeEditor, IStandaloneDiffEditor, StandaloneDiffEditor, StandaloneEditor } :27
/// <reference types="./standaloneCodeEditor" />
/// { DynamicStandaloneServices, IEditorOverrideServices, StaticServices } :28
/// <reference types="./standaloneServices" />
/// { IMarker, IMarkerData }
/// <reference types="../../../platform/markers/common/markers" />

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
   * 在 `domElement` 下创建一个新的差异编辑器。
   * `domElement` 应该为空（不包含任何 DOM 节点）。
   * 编辑器将读取 `domElement` 的大小。
   */
	export function createDiffEditor(domElement: HTMLElement, options?: IDiffEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneDiffEditor;

  /**
   * 一个差异导航
   */
  export interface IDiffNavigator {
    canNavigate(): boolean;
    next(): void;
    previous(): void;
    dispose(): void;
  }

  /**
   * 用于创建一个差异导航的选项
   */
  export interface IDiffNavigatorOptions {
    readonly followsCaret?: boolean;
    readonly ignoreCharChanges?: boolean;
    readonly alwaysRevealFirst?: boolean;
  }
  
  /**
   * 创建一个差异导航
   */
  export function createDiffNavigator(diffEditor: IStandaloneDiffEditor, opts?: IDiffNavigatorOptions): IDiffNavigator; // :139

  /**
   * 创建一个新的编辑器模型。
   * 你可以指定应该为该模型设置的语言，或者从 `uri` 中推断该语言。
   */
  export function createModel(value: string, language?: string, uri?: Uri): ITextModel; // :151

  /**
   * 更改指定模型的语言
   */
  export function setModelLanguage(model: ITextModel, languageId: string): void; // :169

  /**
   * 设置指定模型的标记
   */
  export function setModelMarkers(model: ITextModel, owner: string, markers: IMarkerData[]): void; // :176

}
