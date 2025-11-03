import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { EditorView } from 'prosemirror-view';
import * as i0 from "@angular/core";
export declare class InventyvHtmlEditorComponent implements AfterViewInit {
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
