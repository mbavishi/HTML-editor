import { EditorView } from 'prosemirror-view';
import { ConfigService } from '../../../../shared/config.service';
import * as i0 from "@angular/core";
export declare class FontSizeComponent {
    private configService;
    content: EditorView;
    fontSizes: number[];
    headings: any;
    constructor(configService: ConfigService);
    setBlockHeading(level: number | null): void;
    setFontSize(size: number): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontSizeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FontSizeComponent, "app-font-size", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}
