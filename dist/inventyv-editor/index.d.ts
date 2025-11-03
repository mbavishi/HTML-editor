import * as i0 from '@angular/core';
import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { EditorView } from 'prosemirror-view';
import * as orderedmap from 'orderedmap';
import { Schema, NodeSpec, MarkSpec } from 'prosemirror-model';
import * as prosemirror_state from 'prosemirror-state';
import { Plugin } from 'prosemirror-state';

declare class InventyvHtmlEditorComponent implements AfterViewInit {
    editorHost: ElementRef<HTMLDivElement>;
    contentTemplate: string;
    contentTemplateChange: EventEmitter<string>;
    html: EditorView;
    ngAfterViewInit(): void;
    loadTemplate(template: string | null): void;
    setContentFromHTML(html: string): void;
    getHTML(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InventyvHtmlEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InventyvHtmlEditorComponent, "lib-inventyv-html-editor", never, { "contentTemplate": { "alias": "contentTemplate"; "required": false; }; }, { "contentTemplateChange": "contentTemplateChange"; }, never, never, true, never>;
}

declare class ToolbarComponent {
    content: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarComponent, "app-toolbar-component", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}

declare const editorSchema: Schema<keyof orderedmap.default<NodeSpec>, keyof orderedmap.default<MarkSpec>>;

declare const editorPlugins: Plugin<any>[];

declare function buildKeymap(schema: Schema): prosemirror_state.Plugin<any>;

export { InventyvHtmlEditorComponent, ToolbarComponent, buildKeymap, editorPlugins, editorSchema };
