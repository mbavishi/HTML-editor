import { EditorView } from 'prosemirror-view';
import * as i0 from "@angular/core";
export declare class TextFormatComponent {
    content: EditorView;
    toggleBold(): void;
    toggleItalic(): void;
    toggleUnderLine(): void;
    toggleStrike(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFormatComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFormatComponent, "app-text-format-component", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}
