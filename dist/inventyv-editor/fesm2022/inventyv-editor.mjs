import * as i0 from '@angular/core';
import { Input, Component, Injectable, ViewChild } from '@angular/core';
import { Decoration, DecorationSet, EditorView } from 'prosemirror-view';
import { Plugin, EditorState } from 'prosemirror-state';
import { Schema, DOMParser as DOMParser$1, DOMSerializer } from 'prosemirror-model';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { toggleMark, setBlockType, baseKeymap } from 'prosemirror-commands';
import { undo, redo, history } from 'prosemirror-history';
import { liftListItem, wrapInList, addListNodes, sinkListItem } from 'prosemirror-schema-list';
import { schema } from 'prosemirror-schema-basic';
import { tableNodes, columnResizing, tableEditing } from 'prosemirror-tables';
import { keymap } from 'prosemirror-keymap';

class TextFormatComponent {
    content;
    // Bold, Italic, Underline functionality
    toggleBold() {
        toggleMark(this.content.state.schema.marks['strong'])(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    toggleItalic() {
        toggleMark(this.content.state.schema.marks['em'])(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    toggleUnderLine() {
        toggleMark(this.content.state.schema.marks['underline'])(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    toggleStrike() {
        toggleMark(this.content.state.schema.marks['strike'])(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    ngOnInit() {
        console.log("Text format content ", this.content);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: TextFormatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: TextFormatComponent, isStandalone: true, selector: "app-text-format-component", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleBold()\" title=\"Bold\"><i class=\"fas fa-bold\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleItalic()\" title=\"Italic\"><i class=\"fas fa-italic\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleUnderLine()\" title=\"Underline\"><i class=\"fas fa-underline\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleStrike()\" title=\"Strike\"><i class=\"fas fa-strikethrough\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: TextFormatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text-format-component', imports: [], template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleBold()\" title=\"Bold\"><i class=\"fas fa-bold\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleItalic()\" title=\"Italic\"><i class=\"fas fa-italic\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleUnderLine()\" title=\"Underline\"><i class=\"fas fa-underline\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleStrike()\" title=\"Strike\"><i class=\"fas fa-strikethrough\"></i></button>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class HeadingComponent {
    content;
    setBlockHeading(level) {
        const { state, dispatch } = this.content;
        const schema = state.schema;
        if (level === null) {
            setBlockType(schema.nodes['paragraph'])(state, dispatch);
        }
        else {
            const heading = schema.nodes['heading'];
            if (heading) {
                setBlockType(heading, { level })(state, dispatch);
            }
        }
        this.content.focus();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: HeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: HeadingComponent, isStandalone: true, selector: "app-heading-component", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"dropdown\">\n    <button class=\"btn toolbar-button fs-6 dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" title=\"Select Heading\">\n        <i class=\"fas fa-heading\"></i>\n    </button>\n    <ul class=\"dropdown-menu\">\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(null)\">Normal Text</a></li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(1)\"><span style=\"font-size: 1.6rem;\">Heading 1</span></a>\n        </li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(2)\"><span style=\"font-size: 1.3rem;\">Heading 2</span></a>\n        </li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(3)\"><span style=\"font-size: 1.1rem;\">Heading 3</span></a>\n        </li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(4)\"><span style=\"font-size: 1rem;\">Heading 4</span></a>\n        </li>\n    </ul>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: HeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-heading-component', imports: [], template: "<div class=\"dropdown\">\n    <button class=\"btn toolbar-button fs-6 dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" title=\"Select Heading\">\n        <i class=\"fas fa-heading\"></i>\n    </button>\n    <ul class=\"dropdown-menu\">\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(null)\">Normal Text</a></li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(1)\"><span style=\"font-size: 1.6rem;\">Heading 1</span></a>\n        </li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(2)\"><span style=\"font-size: 1.3rem;\">Heading 2</span></a>\n        </li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(3)\"><span style=\"font-size: 1.1rem;\">Heading 3</span></a>\n        </li>\n        <li><a class=\"dropdown-item\" (click)=\"setBlockHeading(4)\"><span style=\"font-size: 1rem;\">Heading 4</span></a>\n        </li>\n    </ul>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class SuperSubFormat {
    content;
    // Superscript and Subscript functionality
    toggleSuperscript() {
        toggleMark(this.content.state.schema.marks['sup'])(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    toggleSubscript() {
        toggleMark(this.content.state.schema.marks['sub'])(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: SuperSubFormat, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: SuperSubFormat, isStandalone: true, selector: "app-super-sub-format", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleSuperscript()\" title=\"Superscript\"><i class=\"fas fa-superscript\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleSubscript()\" title=\"Subscript\"><i class=\"fas fa-subscript\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: SuperSubFormat, decorators: [{
            type: Component,
            args: [{ selector: 'app-super-sub-format', imports: [], template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleSuperscript()\" title=\"Superscript\"><i class=\"fas fa-superscript\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleSubscript()\" title=\"Subscript\"><i class=\"fas fa-subscript\"></i></button>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class UndoRedo {
    content;
    undoAction() {
        undo(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    redoAction() {
        redo(this.content.state, this.content.dispatch);
        this.content.focus();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: UndoRedo, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: UndoRedo, isStandalone: true, selector: "app-undo-redo", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"undoAction()\" title=\"Undo\"><i class=\"fas fa-undo\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"redoAction()\" title=\"Redo\"><i class=\"fas fa-redo\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: UndoRedo, decorators: [{
            type: Component,
            args: [{ selector: 'app-undo-redo', imports: [], template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"undoAction()\" title=\"Undo\"><i class=\"fas fa-undo\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"redoAction()\" title=\"Redo\"><i class=\"fas fa-redo\"></i></button>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class Alignment {
    content;
    setAlign(align) {
        const { state, dispatch } = this.content;
        const { from, to } = state.selection;
        const tr = state.tr;
        state.doc.nodesBetween(from, to, (node, pos) => {
            if (node.type.name === 'paragraph' || node.type.name === 'heading') {
                tr.setNodeMarkup(pos, undefined, { ...node.attrs, align });
            }
        });
        if (tr.docChanged) {
            dispatch(tr);
            this.content.focus();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: Alignment, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: Alignment, isStandalone: true, selector: "app-alignment", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group border-end-1\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"setAlign('left')\" title=\"Align text left\"><i class=\"fas fa-align-left\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"setAlign('center')\" title=\"Align text center\"><i class=\"fas fa-align-center\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"setAlign('right')\" title=\"Align text right\"><i class=\"fas fa-align-right\"></i></button>\n    <button class=\"btn toolbar-button fs-6 border-end-1\" (click)=\"setAlign('justify')\" title=\"Align text justify\"><i class=\"fas fa-align-justify\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: Alignment, decorators: [{
            type: Component,
            args: [{ selector: 'app-alignment', imports: [], template: "<div class=\"btn-group border-end-1\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"setAlign('left')\" title=\"Align text left\"><i class=\"fas fa-align-left\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"setAlign('center')\" title=\"Align text center\"><i class=\"fas fa-align-center\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"setAlign('right')\" title=\"Align text right\"><i class=\"fas fa-align-right\"></i></button>\n    <button class=\"btn toolbar-button fs-6 border-end-1\" (click)=\"setAlign('justify')\" title=\"Align text justify\"><i class=\"fas fa-align-justify\"></i></button>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class ConfigService {
    // colors for font color and background color
    colors = [
        "#b71c1c", "#d32f2f", "#e53935", "#f46136", "#f57c00", "#ff9800", "#ffb200", "#ffeb3b",
        "#1b5e20", "#388e3c", "#4caf50", "#81c784", "#0d47a1", "#1976d2", "#2196f3", "#64b5f6"
    ];
    // font families for font family dropdown
    fontFamilies = [
        "Arial", "Calibri", "Cambria", "Candara", "Century Gothic", "Consolas", "Corbel", "Courier New",
        "Franklin Gothic Medium", "Georgia", "Segoe UI", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana",
        "Book Antiqua", "Garamond", "Palatino Linotype", "Lucida Console", "Lucida Sans Unicode", "Comic Sans MS"
    ];
    // All the standard font sizes in px
    fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    // Headings options for heading dropdown
    headings = [
        { label: 'Normal Text', size: '1rem', level: null },
        { label: 'Heading 1', size: '1.6rem', level: 1 },
        { label: 'Heading 2', size: '1.3rem', level: 2 },
        { label: 'Heading 3', size: '1.1rem', level: 3 },
        { label: 'Heading 4', size: '1rem', level: 4 },
    ];
    // Function to get configuration values
    getConfig(key) {
        return this[key];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class ColorFormat {
    configService;
    content;
    constructor(configService) {
        this.configService = configService;
    }
    colors = [];
    setFontColor(event) {
        const color = event.target.value;
        const { state, dispatch } = this.content;
        const markType = state.schema.marks["textColor"];
        toggleMark(markType, { color })(state, dispatch);
        this.content.focus();
    }
    setBackgroundColor(event) {
        const color = event.target.value;
        const { state, dispatch } = this.content;
        const markType = state.schema.marks["bgColor"];
        toggleMark(markType, { color })(state, dispatch);
        this.content.focus();
    }
    ngOnInit() {
        this.colors = this.configService.getConfig('colors') || [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ColorFormat, deps: [{ token: ConfigService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: ColorFormat, isStandalone: true, selector: "app-color-format", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"d-flex\">\n    <div class=\"color-palette\">\n        <!-- Font color -->\n        <button class=\"btn toolbar-button fs-6\" type=\"button\" title=\"Text Color\" (click)=\"fontColorPicker.click()\">\n            <i class=\"fas fa-paint-brush\"></i>\n        </button>\n        <input #fontColorPicker type=\"color\" class=\"color-picker\" (change)=\"setFontColor($event)\">\n    </div>\n    <!-- Background color -->\n    <div class=\"color-palette\">\n        <button class=\"btn toolbar-button fs-6\" type=\"button\" title=\"Background Color\" (click)=\"bgColorPicker.click()\">\n            <i class=\"fas fa-fill-drip\"></i>\n        </button>\n        <input #bgColorPicker type=\"color\" class=\"color-picker\" (change)=\"setBackgroundColor($event)\">\n    </div>\n</div>", styles: [".color-palette{position:relative}.color-picker{opacity:0;position:absolute;left:5px;top:12px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ColorFormat, decorators: [{
            type: Component,
            args: [{ selector: 'app-color-format', imports: [NgFor], template: "<div class=\"d-flex\">\n    <div class=\"color-palette\">\n        <!-- Font color -->\n        <button class=\"btn toolbar-button fs-6\" type=\"button\" title=\"Text Color\" (click)=\"fontColorPicker.click()\">\n            <i class=\"fas fa-paint-brush\"></i>\n        </button>\n        <input #fontColorPicker type=\"color\" class=\"color-picker\" (change)=\"setFontColor($event)\">\n    </div>\n    <!-- Background color -->\n    <div class=\"color-palette\">\n        <button class=\"btn toolbar-button fs-6\" type=\"button\" title=\"Background Color\" (click)=\"bgColorPicker.click()\">\n            <i class=\"fas fa-fill-drip\"></i>\n        </button>\n        <input #bgColorPicker type=\"color\" class=\"color-picker\" (change)=\"setBackgroundColor($event)\">\n    </div>\n</div>", styles: [".color-palette{position:relative}.color-picker{opacity:0;position:absolute;left:5px;top:12px}\n"] }]
        }], ctorParameters: () => [{ type: ConfigService }], propDecorators: { content: [{
                type: Input
            }] } });

class ListFormat {
    content;
    // Bullet and Numbered List functionality
    isInList(state, type) {
        const { $from } = state.selection;
        for (let d = $from.depth; d > 0; d--) {
            if ($from.node(d).type.name === type)
                return true;
        }
        return false;
    }
    toggleBulletList() {
        const { state, dispatch } = this.content;
        const schema = state.schema;
        const listNode = schema.nodes['bullet_list'];
        const listItem = schema.nodes['list_item'];
        if (this.isInList(state, 'bullet_list')) {
            liftListItem(listItem)(state, dispatch);
        }
        else {
            wrapInList(listNode)(state, dispatch);
        }
        this.content.focus();
    }
    toggleOrderedList() {
        const { state, dispatch } = this.content;
        const schema = state.schema;
        const listNode = schema.nodes['ordered_list'];
        const listItem = schema.nodes['list_item'];
        if (this.isInList(state, 'ordered_list')) {
            liftListItem(listItem)(state, dispatch);
        }
        else {
            wrapInList(listNode)(state, dispatch);
        }
        this.content.focus();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ListFormat, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: ListFormat, isStandalone: true, selector: "app-list-format", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleBulletList()\"\n        title=\"Insert unordered List\"><i class=\"fas fa-list-ul\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleOrderedList()\"\n        title=\"Insert ordered List\"><i class=\"fas fa-list-ol\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ListFormat, decorators: [{
            type: Component,
            args: [{ selector: 'app-list-format', imports: [], template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleBulletList()\"\n        title=\"Insert unordered List\"><i class=\"fas fa-list-ul\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleOrderedList()\"\n        title=\"Insert ordered List\"><i class=\"fas fa-list-ol\"></i></button>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class SourceCode {
    html;
    showSourceCode = false;
    toggleSourceCode() {
        this.showSourceCode = !this.showSourceCode;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: SourceCode, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: SourceCode, isStandalone: true, selector: "app-source-code", inputs: { html: "html" }, ngImport: i0, template: "<div class=\"btn-group me-2\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleSourceCode()\" title=\"Superscript\"><i class=\"bi bi-code-slash\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: SourceCode, decorators: [{
            type: Component,
            args: [{ selector: 'app-source-code', imports: [], template: "<div class=\"btn-group me-2\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"toggleSourceCode()\" title=\"Superscript\"><i class=\"bi bi-code-slash\"></i></button>\n</div>" }]
        }], propDecorators: { html: [{
                type: Input
            }] } });

class LinkComponent {
    content; // pass EditorView from parent
    isLinkActive = false;
    linkText = '';
    linkUrl = '';
    showLinkDialog = false;
    selectionHandler = () => this.updateLinkState();
    ngOnInit() {
        if (!this.content) {
            console.warn('LinkComponent: EditorView not provided via [view].');
            return;
        }
        // initial state
        this.updateLinkState();
        // listen to user-driven selection changes (mouse & keyboard).
        // This is simple and reliable for typical usage.
        this.content.dom.addEventListener('mouseup', this.selectionHandler);
        this.content.dom.addEventListener('keyup', this.selectionHandler);
        this.content.dom.addEventListener('focus', this.selectionHandler);
    }
    ngOnDestroy() {
        if (this.content) {
            this.content.dom.removeEventListener('mouseup', this.selectionHandler);
            this.content.dom.removeEventListener('keyup', this.selectionHandler);
            this.content.dom.removeEventListener('focus', this.selectionHandler);
        }
    }
    // Open the dialog and pre-fill text/url if possible
    openLinkDialog() {
        if (!this.content)
            return;
        const { state } = this.content;
        const { from, to, empty } = state.selection;
        const linkMark = state.schema.marks['link'];
        if (!empty) {
            // selected text → prefill text and try to find href in selection
            this.linkText = state.doc.textBetween(from, to, ' ');
            let href = '';
            state.doc.nodesBetween(from, to, (node) => {
                const m = node.marks.find(mark => mark.type === linkMark);
                if (m && !href)
                    href = m.attrs['href'];
            });
            this.linkUrl = href;
        }
        else {
            // empty selection → if cursor has link mark, prefill href
            const $pos = state.selection.$from;
            const mark = $pos.marks().find(m => m.type === linkMark);
            this.linkUrl = mark ? mark.attrs['href'] : '';
            this.linkText = '';
        }
        this.showLinkDialog = true;
    }
    // Insert or apply link mark
    applyLink() {
        if (!this.linkUrl || !this.content)
            return;
        const { state, dispatch } = this.content;
        const { schema, selection } = state;
        const { from, to } = selection;
        const linkMark = schema.marks['link'];
        if (from !== to) {
            dispatch(state.tr.addMark(from, to, linkMark.create({ href: this.linkUrl })));
        }
        else {
            const text = this.linkText && this.linkText.trim().length > 0 ? this.linkText.trim() : this.linkUrl;
            const node = schema.text(text, [linkMark.create({ href: this.linkUrl })]);
            dispatch(state.tr.insert(from, node));
        }
        // reset and close
        this.linkText = '';
        this.linkUrl = '';
        this.showLinkDialog = false;
        // ensure button state updates
        setTimeout(() => this.updateLinkState());
    }
    cancelLinkDialog() {
        this.linkText = '';
        this.linkUrl = '';
        this.showLinkDialog = false;
    }
    removeLink() {
        if (!this.content)
            return;
        const { state, dispatch } = this.content;
        const { from, to } = state.selection;
        const linkMark = state.schema.marks['link'];
        dispatch(state.tr.removeMark(from, to, linkMark));
        setTimeout(() => this.updateLinkState());
    }
    // Updates whether current selection/cursor is inside a link
    updateLinkState() {
        if (!this.content) {
            this.isLinkActive = false;
            return;
        }
        const state = this.content.state;
        const { from, to, empty } = state.selection;
        const linkMark = state.schema.marks['link'];
        if (empty) {
            const $pos = state.selection.$from;
            this.isLinkActive = $pos.marks().some(m => m.type === linkMark);
        }
        else {
            this.isLinkActive = state.doc.rangeHasMark(from, to, linkMark);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: LinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: LinkComponent, isStandalone: true, selector: "app-link", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n  <button class=\"btn toolbar-button fs-6\" title=\"Insert Link\" (click)=\"openLinkDialog()\">\n    <i class=\"fas fa-link\"></i>\n  </button>\n\n  <button class=\"btn toolbar-button fs-6\" title=\"Remove Link\" (click)=\"removeLink()\" [disabled]=\"!isLinkActive\">\n    <i class=\"fas fa-unlink\"></i>\n  </button>\n</div>\n\n<!-- Overlay to close dialog on outside click -->\n<div *ngIf=\"showLinkDialog\" class=\"position-fixed top-0 start-0 w-100 h-100\" style=\"z-index: 1999;\"\n  (click)=\"cancelLinkDialog()\"></div>\n\n<!-- Floating Link Dialog -->\n<div *ngIf=\"showLinkDialog\" class=\"p-3 border rounded bg-light mt-2\"\n  style=\"max-width: 320px; position: absolute; z-index: 2000;\">\n  <div class=\"mb-2\">\n    <label class=\"form-label\">Text</label>\n    <input type=\"text\" [(ngModel)]=\"linkText\" class=\"form-control form-control-sm\" />\n  </div>\n  <div class=\"mb-2\">\n    <label class=\"form-label\">URL</label>\n    <input type=\"text\" [(ngModel)]=\"linkUrl\" class=\"form-control form-control-sm\" placeholder=\"https://example.com\" />\n  </div>\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-secondary me-2\" (click)=\"applyLink()\">Insert</button>\n    <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-outline-secondary\" (click)=\"cancelLinkDialog()\">Cancel</button>\n  </div>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: LinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-link', standalone: true, imports: [NgIf, FormsModule], template: "<div class=\"btn-group\">\n  <button class=\"btn toolbar-button fs-6\" title=\"Insert Link\" (click)=\"openLinkDialog()\">\n    <i class=\"fas fa-link\"></i>\n  </button>\n\n  <button class=\"btn toolbar-button fs-6\" title=\"Remove Link\" (click)=\"removeLink()\" [disabled]=\"!isLinkActive\">\n    <i class=\"fas fa-unlink\"></i>\n  </button>\n</div>\n\n<!-- Overlay to close dialog on outside click -->\n<div *ngIf=\"showLinkDialog\" class=\"position-fixed top-0 start-0 w-100 h-100\" style=\"z-index: 1999;\"\n  (click)=\"cancelLinkDialog()\"></div>\n\n<!-- Floating Link Dialog -->\n<div *ngIf=\"showLinkDialog\" class=\"p-3 border rounded bg-light mt-2\"\n  style=\"max-width: 320px; position: absolute; z-index: 2000;\">\n  <div class=\"mb-2\">\n    <label class=\"form-label\">Text</label>\n    <input type=\"text\" [(ngModel)]=\"linkText\" class=\"form-control form-control-sm\" />\n  </div>\n  <div class=\"mb-2\">\n    <label class=\"form-label\">URL</label>\n    <input type=\"text\" [(ngModel)]=\"linkUrl\" class=\"form-control form-control-sm\" placeholder=\"https://example.com\" />\n  </div>\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-secondary me-2\" (click)=\"applyLink()\">Insert</button>\n    <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-outline-secondary\" (click)=\"cancelLinkDialog()\">Cancel</button>\n  </div>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

// with required cellAttributes
const myTableNodes = tableNodes({
    tableGroup: 'block',
    cellContent: 'block+',
    cellAttributes: {
        style: { default: null },
        class: { default: null },
        backgroundColor: {
            default: null, getFromDOM(dom) {
                return dom.style.backgroundColor || null;
            },
            setDOMAttr(value, attrs) {
                if (value)
                    attrs['style'] = (attrs['style'] || "") + `background-color:${value};`;
            }
        },
    },
});
// MARKS DEFINITIONS
// Font family
const fontFamilyMark = {
    attrs: { font: { default: null } },
    parseDOM: [{ style: 'font-family', getAttrs: (value) => ({ font: value }) }],
    toDOM: mark => ['span', { style: `font-family: ${mark.attrs['font']}` }, 0]
};
// Text color and background color
const COLORS = [
    '#b71c1c', '#d32f2f', '#e53935', '#f46136', '#f57c00', '#ff9800', '#ffb200', '#ffeb3b', '#333',
    '#1b5e20', '#388e3c', '#4caf50', '#81c784', '#0d47a1', '#1976d2', '#2196f3', '#64b5f6'
];
function createColorMark(name, cssProp) {
    return {
        attrs: { color: {} },
        parseDOM: COLORS.map(c => ({ style: cssProp, getAttrs: value => ({ color: value }) })),
        toDOM: node => ['span', { style: `${cssProp}: ${node.attrs['color']}` }, 0]
    };
}
// Link mark
const linkMark = {
    attrs: { href: {}, title: { default: null }, class: { default: null }, style: { default: null }, target: { default: '_blank' } },
    inclusive: false,
    parseDOM: [{
            tag: 'a[href]',
            getAttrs(dom) {
                return {
                    href: dom.getAttribute('href'),
                    title: dom.getAttribute('title'),
                    class: dom.getAttribute('class'),
                    style: dom.getAttribute('style'),
                    target: dom.getAttribute('target') || '_blank',
                };
            }
        }],
    toDOM(node) {
        return ['a', { ...node.attrs }, 0];
    }
};
// NODE DEFINITIONS
// Paragraph with alignment
const paragraphWithAlignAndIndent = {
    ...schema.spec.nodes.get('paragraph'),
    attrs: { align: { default: 'left' }, indent: { default: 0 } },
    parseDOM: [{ tag: 'p', getAttrs: (dom) => ({ align: dom.style.textAlign || 'left', indent: parseInt(dom.style.marginLeft) / 30 || 0 }) }],
    toDOM: (node) => ['p', { style: `text-align:${node.attrs.align}; margin-left:${node.attrs.indent * 30}px` }, 0]
};
// Heading with alignment
const headingWithAlign = {
    ...schema.spec.nodes.get('heading'),
    attrs: { ...schema.spec.nodes.get('heading')?.attrs, align: { default: 'left' } },
    parseDOM: Array.from({ length: 6 }).map((_, i) => ({
        tag: `h${i + 1}`,
        getAttrs: (dom) => ({ level: i + 1, align: dom.style.textAlign || 'left' })
    })),
    toDOM: (node) => [`h${node.attrs.level}`, { style: `text-align:${node.attrs.align}` }, 0]
};
// Image node (resizable via style max-width)
const imageNode = {
    inline: true,
    attrs: { src: {}, alt: { default: null }, title: { default: null }, width: { default: 'auto' }, height: { default: 'auto' }, align: { default: 'center' } },
    group: 'inline',
    draggable: true,
    parseDOM: [{
            tag: 'img[src]',
            getAttrs: (dom) => ({
                src: dom.getAttribute('src'),
                title: dom.getAttribute('title'),
                alt: dom.getAttribute('alt'),
                width: dom.getAttribute('width'),
                height: dom.getAttribute('height'),
                align: dom.style.textAlign || 'center',
            })
        }],
    toDOM: (node) => ['img', {
            src: node.attrs.src,
            title: node.attrs.title,
            alt: node.attrs.alt,
            width: node.attrs.width,
            height: node.attrs.height,
            style: 'max-width: {node.attrs.width}; height: {node.attrs.height}; cursor:nwse-resize; text-align:${node.attrs.align}',
        }]
};
// const imageNode: NodeSpec = {
//     inline: true,
//     group: 'inline',
//     draggable: true,
//     attrs: {
//         src: {},
//         alt: { default: null },
//         title: { default: null },
//         width: { default: null },
//         height: { default: null },
//         align: { default: 'center' },
//     },
//     parseDOM: [{
//         tag: 'img[src]',
//         getAttrs(dom: HTMLElement) {
//             return {
//                 src: dom.getAttribute('src'),
//                 title: dom.getAttribute('title'),
//                 alt: dom.getAttribute('alt'),
//                 width: dom.getAttribute('width'),
//                 height: dom.getAttribute('height'),
//                 align: dom.getAttribute('align') || 'center',
//             };
//         },
//     }],
//     toDOM(node) {
//         return ['img', {
//             src: node.attrs['src'],
//             title: node.attrs['title'],
//             alt: node.attrs['alt'],
//             width: node.attrs['width'] || undefined,
//             height: node.attrs['height'] || undefined,
//             style: `display:block; margin:0 auto; max-width:${node.attrs['width'] || '100%'}; height:${node.attrs['height'] || 'auto'};
//                     text-align:${node.attrs['align']}; cursor: nwse-resize;`
//             .trim(),
//         }];
//     },
// };
// MARKS COLLECTION
let marks = schema.spec.marks;
// remove
//     ? basicSchema.spec.marks.remove('size')
//     : basicSchema.spec.marks;
marks = marks
    .update('sup', { parseDOM: [{ tag: 'sup' }], toDOM: () => ['sup', 0] })
    .update('sub', { parseDOM: [{ tag: 'sub' }], toDOM: () => ['sub', 0] })
    .update('bold', { parseDOM: [{ tag: 'strong' }, { style: 'font-weight', getAttrs: v => v === 'bold' && null }], toDOM: () => ['strong', 0] })
    .update('italic', { parseDOM: [{ tag: 'em' }, { style: 'font-style', getAttrs: v => v === 'italic' && null }], toDOM: () => ['em', 0] })
    .update('underline', { parseDOM: [{ tag: 'u' }, { style: 'text-decoration', getAttrs: v => v === 'underline' && null }], toDOM: () => ['u', 0] })
    .update('strike', { parseDOM: [{ tag: 's' }, { tag: 'del' }, { style: 'text-decoration', getAttrs: v => v === 'line-through' && null }], toDOM: () => ['s', 0] })
    .update('bgColor', createColorMark('bgColor', 'background-color'))
    .update('textColor', createColorMark('textColor', 'color'))
    .update('fontFamily', fontFamilyMark)
    .update('link', linkMark)
    .update('fontSize', {
    attrs: { size: { default: null } },
    parseDOM: [
        {
            style: 'font-size',
            getAttrs: (value) => {
                // If size is 0px or empty, ignore and use default
                if (!value || value === '0px')
                    return { size: null };
                return { size: value };
            }
        }
    ],
    toDOM(mark) {
        if (!mark.attrs['size']) {
            return ['span', 0];
        }
        return ['span', { style: `font-size: ${mark.attrs['size']}` }, 0];
    }
});
// Final Schema
const editorSchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block')
        .append(myTableNodes)
        .update('paragraph', paragraphWithAlignAndIndent)
        .update('heading', headingWithAlign)
        .update('image', imageNode),
    marks
});

class ImageComponent {
    content;
    showImageDialog = false;
    imageUrl = '';
    imageAlt = 'image';
    imageTitle = 'image';
    imageWidth = 'auto';
    imageHeight = 'auto';
    schema = editorSchema;
    openImageDialog() {
        this.imageUrl = '';
        this.imageAlt = 'image';
        this.imageTitle = 'image';
        this.imageWidth = 'auto';
        this.imageHeight = 'auto';
        this.showImageDialog = true;
    }
    cancelImageDialog() {
        this.showImageDialog = false;
    }
    insertImage() {
        if (!this.imageUrl || !this.content)
            return;
        const { state, dispatch } = this.content;
        const { from, to } = state.selection;
        const imageNode = this.schema.nodes['image'].create({
            src: this.imageUrl,
            alt: this.imageAlt || 'image',
            title: this.imageTitle || 'image',
            width: this.imageWidth || '100%',
            height: this.imageHeight || 'auto',
            align: 'right',
        });
        dispatch(state.tr.replaceSelectionWith(imageNode).scrollIntoView());
        this.showImageDialog = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: ImageComponent, isStandalone: true, selector: "app-image", inputs: { content: "content" }, ngImport: i0, template: "<!-- Toolbar Button -->\n<button class=\"btn toolbar-button fs-6\" title=\"Insert Image\" (click)=\"openImageDialog()\">\n    <i class=\"fas fa-image\"></i>\n</button>\n<!-- Overlay (clicking this closes the dialog) -->\n<div *ngIf=\"showImageDialog\" class=\"position-fixed top-0 start-0 w-100 h-100\" style=\"z-index: 1999;\"\n    (click)=\"cancelImageDialog()\"></div>\n\n<!-- Floating Image Dialog -->\n<div *ngIf=\"showImageDialog\" class=\"p-3 border rounded bg-light mt-2 shadow\"\n    style=\"max-width: 320px; position: absolute; z-index: 2000;\">\n\n    <!-- Your existing fields -->\n    <div class=\"mb-2\">\n        <label class=\"form-label\">Image URL</label>\n        <input type=\"text\" [(ngModel)]=\"imageUrl\" class=\"form-control form-control-sm\"\n            placeholder=\"https://example.com/image.png\" />\n    </div>\n    <div class=\"mb-2\">\n        <label class=\"form-label\">Alt Text</label>\n        <input type=\"text\" [(ngModel)]=\"imageAlt\" class=\"form-control form-control-sm\" placeholder=\"Description\" />\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-6\">\n            <label class=\"form-label\">Width</label>\n            <input type=\"number\" [(ngModel)]=\"imageWidth\" class=\"form-control form-control-sm\" placeholder=\"Width\" />\n        </div>\n        <div class=\"col-6\">\n            <label class=\"form-label\">Height</label>\n            <input type=\"number\" [(ngModel)]=\"imageHeight\" class=\"form-control form-control-sm\" placeholder=\"Height\" />\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end\">\n        <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-secondary me-2\" (click)=\"insertImage()\">Insert</button>\n        <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-outline-secondary\" (click)=\"cancelImageDialog()\">Cancel</button>\n    </div>\n</div>", styles: [""], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-image', standalone: true, imports: [FormsModule, NgIf], template: "<!-- Toolbar Button -->\n<button class=\"btn toolbar-button fs-6\" title=\"Insert Image\" (click)=\"openImageDialog()\">\n    <i class=\"fas fa-image\"></i>\n</button>\n<!-- Overlay (clicking this closes the dialog) -->\n<div *ngIf=\"showImageDialog\" class=\"position-fixed top-0 start-0 w-100 h-100\" style=\"z-index: 1999;\"\n    (click)=\"cancelImageDialog()\"></div>\n\n<!-- Floating Image Dialog -->\n<div *ngIf=\"showImageDialog\" class=\"p-3 border rounded bg-light mt-2 shadow\"\n    style=\"max-width: 320px; position: absolute; z-index: 2000;\">\n\n    <!-- Your existing fields -->\n    <div class=\"mb-2\">\n        <label class=\"form-label\">Image URL</label>\n        <input type=\"text\" [(ngModel)]=\"imageUrl\" class=\"form-control form-control-sm\"\n            placeholder=\"https://example.com/image.png\" />\n    </div>\n    <div class=\"mb-2\">\n        <label class=\"form-label\">Alt Text</label>\n        <input type=\"text\" [(ngModel)]=\"imageAlt\" class=\"form-control form-control-sm\" placeholder=\"Description\" />\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-6\">\n            <label class=\"form-label\">Width</label>\n            <input type=\"number\" [(ngModel)]=\"imageWidth\" class=\"form-control form-control-sm\" placeholder=\"Width\" />\n        </div>\n        <div class=\"col-6\">\n            <label class=\"form-label\">Height</label>\n            <input type=\"number\" [(ngModel)]=\"imageHeight\" class=\"form-control form-control-sm\" placeholder=\"Height\" />\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-end\">\n        <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-secondary me-2\" (click)=\"insertImage()\">Insert</button>\n        <button type=\"button\" class=\"btn toolbar-buttonbtn-sm btn-outline-secondary\" (click)=\"cancelImageDialog()\">Cancel</button>\n    </div>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class FontSizeComponent {
    configService;
    content;
    fontSizes = [];
    headings = [];
    constructor(configService) {
        this.configService = configService;
    }
    setBlockHeading(level) {
        const { state, dispatch } = this.content;
        const schema = state.schema;
        if (level === null) {
            setBlockType(schema.nodes['paragraph'])(state, dispatch);
        }
        else {
            const heading = schema.nodes['heading'];
            if (heading) {
                setBlockType(heading, { level })(state, dispatch);
            }
        }
        this.content.focus();
    }
    setFontSize(size) {
        if (!this.content)
            return;
        const markType = editorSchema.marks['fontSize'];
        if (!markType)
            return;
        const { state, dispatch } = this.content;
        const { tr, selection } = state;
        const { from, to, empty } = selection;
        // only apply when text is selected
        if (empty)
            return;
        // Remove existing fontSize marks in range
        tr.removeMark(from, to, markType);
        // Add the new size mark
        tr.addMark(from, to, markType.create({ size: `${size}px` }));
        dispatch(tr);
        this.content.focus();
    }
    ngOnInit() {
        this.headings = this.configService.getConfig('headings') || this.headings;
        this.fontSizes = this.configService.getConfig('fontSizes') || this.fontSizes;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: FontSizeComponent, deps: [{ token: ConfigService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: FontSizeComponent, isStandalone: true, selector: "app-font-size", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n  <!-- Heading size -->\n  <div class=\"dropdown\">\n    <button class=\"btn toolbar-button fs-6 dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n      title=\"Select Heading\">\n      <i class=\"fas fa-heading\"></i>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <li *ngFor=\"let h of headings\">\n        <a class=\"dropdown-item\" (click)=\"setBlockHeading(h.level)\">\n          <span [style.fontSize]=\"h.size\">{{ h.label }}</span>\n        </a>\n      </li>\n    </ul>\n    <!-- Font Size -->\n    <button class=\"btn toolbar-button fs-6 dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n      title=\"Select Font Size\">\n      <i class=\"fas fa-text-height\"></i>\n    </button>\n    <ul class=\"dropdown-menu font-size-menu\" style=\"max-height: 300px; overflow-y: auto; width: 60px;\">\n      <li *ngFor=\"let size of fontSizes\">\n        <a class=\"dropdown-item\" (click)=\"setFontSize(size)\">\n          <span>{{ size }}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: FontSizeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-font-size', standalone: true, imports: [NgFor], template: "<div class=\"btn-group\">\n  <!-- Heading size -->\n  <div class=\"dropdown\">\n    <button class=\"btn toolbar-button fs-6 dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n      title=\"Select Heading\">\n      <i class=\"fas fa-heading\"></i>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <li *ngFor=\"let h of headings\">\n        <a class=\"dropdown-item\" (click)=\"setBlockHeading(h.level)\">\n          <span [style.fontSize]=\"h.size\">{{ h.label }}</span>\n        </a>\n      </li>\n    </ul>\n    <!-- Font Size -->\n    <button class=\"btn toolbar-button fs-6 dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\"\n      title=\"Select Font Size\">\n      <i class=\"fas fa-text-height\"></i>\n    </button>\n    <ul class=\"dropdown-menu font-size-menu\" style=\"max-height: 300px; overflow-y: auto; width: 60px;\">\n      <li *ngFor=\"let size of fontSizes\">\n        <a class=\"dropdown-item\" (click)=\"setFontSize(size)\">\n          <span>{{ size }}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>" }]
        }], ctorParameters: () => [{ type: ConfigService }], propDecorators: { content: [{
                type: Input
            }] } });

class IndentOutdentComponent {
    content;
    // Indent command
    indent() {
        if (!this.content)
            return;
        const { state, dispatch } = this.content;
        if (state.schema.nodes.list_item) {
            if (sinkListItem(state.schema.nodes.list_item)(state, dispatch)) {
                return true;
            }
        }
        return this.updateIndent(state, dispatch, +1);
    }
    // Outdent command
    outdent() {
        if (!this.content)
            return;
        const { state, dispatch } = this.content;
        if (state.schema.nodes.list_item) {
            if (liftListItem(state.schema.nodes.list_item)(state, dispatch)) {
                return true;
            }
        }
        return this.updateIndent(state, dispatch, -1);
    }
    // Helper: adjust paragraph indent
    updateIndent(state, dispatch, delta) {
        const { tr, selection } = state;
        const { from, to } = selection;
        tr.doc.nodesBetween(from, to, (node, pos) => {
            if (node.isTextblock && node.type.name === 'paragraph') {
                const newIndent = Math.max(0, (node.attrs['indent'] || 0) + delta);
                tr.setNodeMarkup(pos, undefined, { ...node.attrs, indent: newIndent });
            }
        });
        if (tr.docChanged) {
            dispatch(tr);
            return true;
        }
        return false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: IndentOutdentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: IndentOutdentComponent, isStandalone: true, selector: "app-indent-outdent", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"indent()\" title=\"Indent\"><i class=\"fas fa-indent\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"outdent()\" title=\"Outdent\"><i class=\"fas fa-outdent\"></i></button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: IndentOutdentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-indent-outdent', standalone: true, imports: [], template: "<div class=\"btn-group\">\n    <button class=\"btn toolbar-button fs-6\" (click)=\"indent()\" title=\"Indent\"><i class=\"fas fa-indent\"></i></button>\n    <button class=\"btn toolbar-button fs-6\" (click)=\"outdent()\" title=\"Outdent\"><i class=\"fas fa-outdent\"></i></button>\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

class FontFamilyComponent {
    configService;
    content;
    fontFamilies = [];
    constructor(configService) {
        this.configService = configService;
    }
    setFontFamily(event) {
        if (!this.content)
            return;
        const font = event.target.value;
        const { state, dispatch } = this.content;
        const markType = state.schema.marks.fontFamily;
        if (!markType)
            return;
        if (font) {
            toggleMark(markType, { font })(state, dispatch);
        }
        else {
            // remove font family mark if "default" is chosen
            toggleMark(markType, {})(state, dispatch);
        }
        this.content.focus();
    }
    ngOnInit() {
        this.fontFamilies = this.configService.getConfig('fontFamilies') || this.fontFamilies;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: FontFamilyComponent, deps: [{ token: ConfigService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: FontFamilyComponent, isStandalone: true, selector: "app-font-family", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-group\">\n  <select class=\"form-select form-select-sm font-family-dropdown\" (change)=\"setFontFamily($event)\">\n    <!-- <option selected disabled>Font Family</option> -->\n    <option *ngFor=\"let font of fontFamilies\" [value]=\"font\">{{ font }}</option>\n  </select>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: FontFamilyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-font-family', standalone: true, imports: [NgFor], template: "<div class=\"btn-group\">\n  <select class=\"form-select form-select-sm font-family-dropdown\" (change)=\"setFontFamily($event)\">\n    <!-- <option selected disabled>Font Family</option> -->\n    <option *ngFor=\"let font of fontFamilies\" [value]=\"font\">{{ font }}</option>\n  </select>\n</div>\n" }]
        }], ctorParameters: () => [{ type: ConfigService }], propDecorators: { content: [{
                type: Input
            }] } });

class ToolbarComponent {
    content;
    ngOnInit() {
        console.log("Toolbar content ", this.content);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: ToolbarComponent, isStandalone: true, selector: "app-toolbar-component", inputs: { content: "content" }, ngImport: i0, template: "<div class=\"btn-toolbar mb-2 border p-1 bg-light rounded alugn-items-center\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <app-text-format-component [content]=\"content\"></app-text-format-component>\n    <app-heading-component [content]=\"content\"></app-heading-component>\n    <app-font-size [content]=\"content\"></app-font-size>\n    <app-font-family [content]=\"content\"></app-font-family>\n    <app-super-sub-format [content]=\"content\"></app-super-sub-format>\n    <app-undo-redo [content]=\"content\"></app-undo-redo>\n    <app-alignment [content]=\"content\"></app-alignment>\n    <app-list-format [content]=\"content\"></app-list-format>\n    <app-indent-outdent [content]=\"content\"></app-indent-outdent>\n    <app-link [content]=\"content\"></app-link>\n    <app-color-format [content]=\"content\"></app-color-format>\n    <app-image [content]=\"content\"></app-image>\n    <!-- <app-source-code [content]=\"content\"></app-source-code> -->\n</div>", styles: [""], dependencies: [{ kind: "component", type: TextFormatComponent, selector: "app-text-format-component", inputs: ["content"] }, { kind: "component", type: HeadingComponent, selector: "app-heading-component", inputs: ["content"] }, { kind: "component", type: SuperSubFormat, selector: "app-super-sub-format", inputs: ["content"] }, { kind: "component", type: UndoRedo, selector: "app-undo-redo", inputs: ["content"] }, { kind: "component", type: Alignment, selector: "app-alignment", inputs: ["content"] }, { kind: "component", type: ColorFormat, selector: "app-color-format", inputs: ["content"] }, { kind: "component", type: ListFormat, selector: "app-list-format", inputs: ["content"] }, { kind: "component", type: LinkComponent, selector: "app-link", inputs: ["content"] }, { kind: "component", type: ImageComponent, selector: "app-image", inputs: ["content"] }, { kind: "component", type: FontSizeComponent, selector: "app-font-size", inputs: ["content"] }, { kind: "component", type: IndentOutdentComponent, selector: "app-indent-outdent", inputs: ["content"] }, { kind: "component", type: FontFamilyComponent, selector: "app-font-family", inputs: ["content"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: ToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-toolbar-component', standalone: true, imports: [TextFormatComponent, HeadingComponent, SuperSubFormat, UndoRedo, Alignment, ColorFormat, ListFormat, SourceCode, LinkComponent, ImageComponent, FontSizeComponent, IndentOutdentComponent, FontFamilyComponent], template: "<div class=\"btn-toolbar mb-2 border p-1 bg-light rounded alugn-items-center\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <app-text-format-component [content]=\"content\"></app-text-format-component>\n    <app-heading-component [content]=\"content\"></app-heading-component>\n    <app-font-size [content]=\"content\"></app-font-size>\n    <app-font-family [content]=\"content\"></app-font-family>\n    <app-super-sub-format [content]=\"content\"></app-super-sub-format>\n    <app-undo-redo [content]=\"content\"></app-undo-redo>\n    <app-alignment [content]=\"content\"></app-alignment>\n    <app-list-format [content]=\"content\"></app-list-format>\n    <app-indent-outdent [content]=\"content\"></app-indent-outdent>\n    <app-link [content]=\"content\"></app-link>\n    <app-color-format [content]=\"content\"></app-color-format>\n    <app-image [content]=\"content\"></app-image>\n    <!-- <app-source-code [content]=\"content\"></app-source-code> -->\n</div>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });

function buildKeymap(schema) {
    const keys = {};
    // Basic formatting shortcuts
    if (schema.marks['bold'])
        keys["Mod-b"] = toggleMark(schema.marks['bold']);
    if (schema.marks['italic'])
        keys["Mod-i"] = toggleMark(schema.marks['italic']);
    if (schema.marks['underline'])
        keys["Mod-u"] = toggleMark(schema.marks['underline']);
    if (schema.marks['strike'])
        keys["Mod-Shift-x"] = toggleMark(schema.marks['strike']);
    if (schema.marks['sup'])
        keys["Mod-Shift-+"] = toggleMark(schema.marks['sup']);
    if (schema.marks['sub'])
        keys["Mod-="] = toggleMark(schema.marks['sub']);
    keys["Mod-z"] = undo;
    keys["Mod-y"] = redo;
    return keymap(keys);
}

//
const tablePlugins = [
    columnResizing({ handleWidth: 5, cellMinWidth: 25 }),
    tableEditing()
];
const collapseEmptyParas = new Plugin({
    appendTransaction(transactions, oldState, newState) {
        let tr = newState.tr;
        let modified = false;
        newState.doc.descendants((node, pos) => {
            if (node.type.name === "paragraph" && node.content.size === 0) {
                const next = newState.doc.nodeAt(pos + node.nodeSize);
                if (next && next.type.name === "paragraph" && next.content.size === 0) {
                    tr.delete(pos, pos + node.nodeSize);
                    modified = true;
                }
            }
        });
        return modified ? tr : null;
    },
});
function imageResizePlugin() {
    return new Plugin({
        props: {
            decorations(state) {
                const decorations = [];
                state.doc.descendants((node, pos) => {
                    if (node.type.name === "image") {
                        const deco = Decoration.node(pos, pos + 1, {
                            class: "resizable-image"
                        });
                        decorations.push(deco);
                    }
                });
                return DecorationSet.create(state.doc, decorations);
            },
            handleDOMEvents: {
                mousedown(view, event) {
                    const target = event.target;
                    if (target.nodeName === "IMG") {
                        const img = target;
                        let startX = event.clientX;
                        let startWidth = img.width;
                        function onMouseMove(e) {
                            const diff = e.clientX - startX;
                            const newWidth = Math.max(50, startWidth + diff); // min width 50px
                            img.setAttribute("width", newWidth.toString());
                        }
                        function onMouseUp(e) {
                            window.removeEventListener("mousemove", onMouseMove);
                            window.removeEventListener("mouseup", onMouseUp);
                            // update ProseMirror state with new width
                            const pos = view.posAtDOM(img, 0);
                            const tr = view.state.tr.setNodeMarkup(pos, undefined, {
                                ...view.state.doc.nodeAt(pos).attrs,
                                width: img.getAttribute("width"),
                            });
                            view.dispatch(tr);
                        }
                        window.addEventListener("mousemove", onMouseMove);
                        window.addEventListener("mouseup", onMouseUp);
                        return true;
                    }
                    return false;
                }
            }
        }
    });
}
function linkClickPlugin() {
    return new Plugin({
        props: {
            handleDOMEvents: {
                click(view, event) {
                    let target = event.target;
                    console.log('Clicked element:', target);
                    // Walk up if inside bold/italic/etc inside <a>
                    while (target && target.tagName !== 'A' && target !== view.dom) {
                        target = target.parentElement;
                    }
                    if (target && target.tagName === 'A') {
                        const href = target.getAttribute('href');
                        const targetAttr = target.getAttribute('target') || '_self';
                        if (href) {
                            // stop ProseMirror default
                            event.preventDefault();
                            window.open(href, targetAttr);
                            return true;
                        }
                    }
                    return false;
                }
            }
        }
    });
}
// Centralize all editor plugins here
const editorPlugins = [
    buildKeymap(editorSchema),
    keymap(baseKeymap), // default keyboard shortcuts
    history(), // undo/redo
    ...tablePlugins,
    imageResizePlugin(),
    collapseEmptyParas,
    linkClickPlugin()
];

class HtmlEditorComponent {
    editorHost;
    contentTemplate;
    html;
    ngOnInit() {
        console.log("Content template ", this.contentTemplate);
        const state = EditorState.create({
            schema: editorSchema,
            plugins: editorPlugins
        });
        this.html = new EditorView(this.editorHost.nativeElement, {
            state,
            dispatchTransaction: tr => {
                const newState = this.html.state.apply(tr);
                this.html.updateState(newState);
                this.contentTemplate = this.getHTML();
            }
        });
        // Load initial HTML
        this.setContentFromHTML(this.contentTemplate);
    }
    loadTemplate(template) {
        if (!template)
            return;
        this.contentTemplate = template;
        this.setContentFromHTML(template);
    }
    setContentFromHTML(html) {
        if (!html)
            return;
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const pmDoc = DOMParser$1.fromSchema(this.html.state.schema).parse(doc.body);
        const tr = this.html.state.tr.replaceWith(0, this.html.state.doc.content.size, pmDoc);
        this.html.dispatch(tr);
    }
    getHTML() {
        const serializer = DOMSerializer.fromSchema(this.html.state.schema);
        const fragment = serializer.serializeFragment(this.html.state.doc.content);
        const wrapper = document.createElement('div');
        wrapper.appendChild(fragment);
        return wrapper.innerHTML;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: HtmlEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: HtmlEditorComponent, isStandalone: true, selector: "lib-html-editor", inputs: { contentTemplate: "contentTemplate" }, viewQueries: [{ propertyName: "editorHost", first: true, predicate: ["editorHost"], descendants: true, static: true }], ngImport: i0, template: "<!-- Toolbar -->\n<app-toolbar-component [content]=\"contentTemplate\"></app-toolbar-component>\n<!-- Editor Area -->\n<div #editorHost class=\"border rounded p-2\" style=\"min-height:75vh;\"></div>", styles: [""], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "component", type: ToolbarComponent, selector: "app-toolbar-component", inputs: ["content"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: HtmlEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-html-editor', standalone: true, imports: [NgFor, FormsModule, ToolbarComponent], template: "<!-- Toolbar -->\n<app-toolbar-component [content]=\"contentTemplate\"></app-toolbar-component>\n<!-- Editor Area -->\n<div #editorHost class=\"border rounded p-2\" style=\"min-height:75vh;\"></div>" }]
        }], propDecorators: { editorHost: [{
                type: ViewChild,
                args: ['editorHost', { static: true }]
            }], contentTemplate: [{
                type: Input
            }] } });

class InventyvHtmlEditorComponent {
    contentTemplate;
    ngOnInit() {
        console.log("Content template ", this.contentTemplate);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: InventyvHtmlEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: InventyvHtmlEditorComponent, isStandalone: true, selector: "lib-inventyv-html-editor", inputs: { contentTemplate: "contentTemplate" }, ngImport: i0, template: "<lib-html-editor [contentTemplate]=\"contentTemplate\"></lib-html-editor>", styles: [".editor-container{max-height:100vh;background:#fff}.ProseMirror{outline:none;white-space:pre-wrap;max-height:74vh;overflow-y:scroll}.ProseMirror p{margin:0 0 1em}.ProseMirror table{border-collapse:collapse;width:100%}.ProseMirror table,.ProseMirror th,.ProseMirror td{border:1px solid #c9c9c9}.ProseMirror th,.ProseMirror td{padding:4px;text-align:left}.tableWrapper{overflow-x:auto}th{font-weight:400}.color-grid{display:grid;grid-template-columns:repeat(8,24px);gap:4px}.dropdown-item:hover{background-color:#d6d6d6;color:#000}.toolbar-button:hover{background-color:#d6d6d6!important;color:#000!important}.toolbar-button{border:none!important;border-radius:0%!important;--bs-btn-padding-x: .6rem}.btn-group{border-radius:0%;border-right:1px solid #c9c9c9!important}.toolbar-button:disabled{border:none!important}.font-size-menu{min-width:50px!important}.font-family-dropdown{max-height:30px!important}.fs-6{font-size:12px!important}select.form-select{border:none!important;border-radius:0%!important;--bs-btn-padding-x: .6rem;font-size:12px!important}select.form-select option{padding:4px 8px;transition:background-color .2s ease,color .2s ease}select.form-select option:hover{background-color:#e0e0e0;color:#333}a:hover{color:#00008b;cursor:pointer}\n"], dependencies: [{ kind: "component", type: HtmlEditorComponent, selector: "lib-html-editor", inputs: ["contentTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: InventyvHtmlEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-inventyv-html-editor', imports: [HtmlEditorComponent], template: "<lib-html-editor [contentTemplate]=\"contentTemplate\"></lib-html-editor>", styles: [".editor-container{max-height:100vh;background:#fff}.ProseMirror{outline:none;white-space:pre-wrap;max-height:74vh;overflow-y:scroll}.ProseMirror p{margin:0 0 1em}.ProseMirror table{border-collapse:collapse;width:100%}.ProseMirror table,.ProseMirror th,.ProseMirror td{border:1px solid #c9c9c9}.ProseMirror th,.ProseMirror td{padding:4px;text-align:left}.tableWrapper{overflow-x:auto}th{font-weight:400}.color-grid{display:grid;grid-template-columns:repeat(8,24px);gap:4px}.dropdown-item:hover{background-color:#d6d6d6;color:#000}.toolbar-button:hover{background-color:#d6d6d6!important;color:#000!important}.toolbar-button{border:none!important;border-radius:0%!important;--bs-btn-padding-x: .6rem}.btn-group{border-radius:0%;border-right:1px solid #c9c9c9!important}.toolbar-button:disabled{border:none!important}.font-size-menu{min-width:50px!important}.font-family-dropdown{max-height:30px!important}.fs-6{font-size:12px!important}select.form-select{border:none!important;border-radius:0%!important;--bs-btn-padding-x: .6rem;font-size:12px!important}select.form-select option{padding:4px 8px;transition:background-color .2s ease,color .2s ease}select.form-select option:hover{background-color:#e0e0e0;color:#333}a:hover{color:#00008b;cursor:pointer}\n"] }]
        }], propDecorators: { contentTemplate: [{
                type: Input
            }] } });

/*
 * Public API Surface of inventyv-editor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HtmlEditorComponent, InventyvHtmlEditorComponent, ToolbarComponent, buildKeymap, editorPlugins, editorSchema };
//# sourceMappingURL=inventyv-editor.mjs.map
