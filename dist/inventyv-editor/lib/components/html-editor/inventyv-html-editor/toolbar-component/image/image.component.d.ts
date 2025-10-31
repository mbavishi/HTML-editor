import { EditorView } from 'prosemirror-view';
import * as i0 from "@angular/core";
export declare class ImageComponent {
    content: EditorView;
    showImageDialog: boolean;
    imageUrl: string;
    imageAlt: string;
    imageTitle: string;
    imageWidth: string;
    imageHeight: string;
    schema: import("prosemirror-model").Schema<keyof import("orderedmap").default<import("prosemirror-model").NodeSpec>, keyof import("orderedmap").default<import("prosemirror-model").MarkSpec>>;
    openImageDialog(): void;
    cancelImageDialog(): void;
    insertImage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageComponent, "app-image", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}
