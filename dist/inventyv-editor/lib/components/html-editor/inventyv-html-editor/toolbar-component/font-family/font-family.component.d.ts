import { ConfigService } from '../../../../shared/config.service';
import * as i0 from "@angular/core";
export declare class FontFamilyComponent {
    private configService;
    content: any;
    fontFamilies: any;
    constructor(configService: ConfigService);
    setFontFamily(event: Event): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontFamilyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FontFamilyComponent, "app-font-family", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}
