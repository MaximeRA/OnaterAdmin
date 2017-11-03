import { Component, ElementRef, forwardRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR }                                from '@angular/forms';
declare let $: any;
declare let tinymce: any;

@Component({
    selector: 'text-editor',
    templateUrl: 'text-editor.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextEditorComponent),
            multi: true
        }
    ]
})
export class TextEditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
    /**
     * Select element ref
     */
    @ViewChild('element')
    element: ElementRef;

    /**
     * Internal model
     */
    _model: any;

    @Input()
    id: string;

    @Input()
    name: string;

    @Input()
    mode: string;

    @Input()
    required: boolean;

    editor: any;

    ngOnInit(): void {
        let self = this;
        tinymce.init({
            selector: '#' + this.id,
            height : "250",
            plugins: ['link', 'paste', 'table', 'lists'],
            skin_url: '/assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('Change', function (e) {
                    self.model = editor.getContent();
                });
            }
        })
    }

    ngOnDestroy(): void {
        tinymce.remove(this.editor);
    }

    /**
     * Control value accessor OnChange callback
     */
    protected onChangeCallback = (_: any) => {};

    writeValue(value: any): void {
        this._model = value;
        if (value) {
            this.editor.setContent(value);
        } else {
            this.editor.setContent('');
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {

    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
        this.onChangeCallback(this._model);
    }
}
