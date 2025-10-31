import { ConfigService } from '../../../../shared/config.service';
import * as i0 from "@angular/core";
export declare class ColorFormat {
    private configService;
    content: any;
    constructor(configService: ConfigService);
    colors: string[];
    setFontColor(event: Event): void;
    setBackgroundColor(event: Event): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorFormat, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorFormat, "app-color-format", never, { "content": { "alias": "content"; "required": false; }; }, {}, never, never, true, never>;
}
