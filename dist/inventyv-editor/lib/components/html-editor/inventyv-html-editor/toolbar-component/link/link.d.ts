import { OnInit, OnDestroy } from '@angular/core';
import { EditorView } from 'prosemirror-view';
import * as i0 from "@angular/core";
export declare class LinkComponent implements OnInit, OnDestroy {
    content: EditorView;
    isLinkActive: boolean;
    linkText: string;
    linkUrl: string;
    showLinkDialog: boolean;
    private selectionHandler;
    ngOnInit(): void;
    ngOnDestroy(): void;
    openLinkDialog(): void;
    applyLink(): void;
    cancelLinkDialog(): void;
    removeLink(): void;
    updateLinkState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkComponent, "app-link", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}
