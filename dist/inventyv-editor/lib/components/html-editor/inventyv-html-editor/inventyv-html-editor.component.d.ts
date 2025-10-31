import { ElementRef } from '@angular/core';
import { EditorView } from 'prosemirror-view';
import * as i0 from "@angular/core";
export declare class InventyvHtmlEditorComponent {
    editorHost: ElementRef<HTMLDivElement>;
    contentTemplate: string;
    html: EditorView;
    ngOnInit(): void;
    loadTemplate(template: string | null): void;
    setContentFromHTML(html: string | null): void;
    getHTML(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InventyvHtmlEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InventyvHtmlEditorComponent, "lib-inventyv-html-editor", never, { "contentTemplate": { "alias": "contentTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
