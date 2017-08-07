import { Component, OnInit } from '@angular/core';

// App version
const { version: appVersion } = require('../../../package.json')

/**
 * This class represents the body component.
 */
@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  appVersion: string;
  copyText: string = "Copy";
  copiedText: string = "Copied!";

  pageTitle: string = 'Text to Binary';
  text2bin: boolean = true;
  isCopied: boolean = false;
  copyButtonText: string = this.copyText;
  inputText: string = "";
  result: string = '';
  copyTooltip: string = "Copy to Clipboard"
  clearTooltip: string = "Clear Entered Text";
  placeholderText: string = "Enter text ...";
  selections = [
    {title: 'Text to Binary', val: true, class: 'to-binary'},
    {title: 'Binary to Text', val: false, class: 'to-text'}
  ];


  /**
   * Constructor.
   * Set version of app.
   */
  constructor() {
    this.appVersion = appVersion
  }


  /**
   * Copy click action.
   */
  onCopyClick(): void {
    this.isCopied = true;
    this.copyButtonText = this.copiedText;
  }


  /**
   * Keyup action, execute convert.
   */
  onKeyup(): void {
    this.convertIt();
  }


  /**
   * Mouse leave action. Updates button's css to have shine effect.
   */
  onMouseLeave(): void {
    this.isCopied = false;
    this.copyButtonText = this.copyText;
  }


  /**
   * On clear action. Clear both boxes.
   */
  onClear(): void {
    this.inputText = "";
    this.result = "";
  }


  /**
   * Calculate to binary.
   */
  toBinary(input: string): string {
    return input
      .split('')
      .map(char => {
          let res = char.charCodeAt(0).toString(2);
          while (res.length < (8)) {
            res = "0" + res;
          }
          return res;
        })
      .join(' ');
  }


  /**
   * Calculate to text.
   */
  toText(input: string): string {
    return input
      .split(/\s/)
      .map(val =>  String.fromCharCode(parseInt(val, 2)))
      .join("");
  }


  /**
   * Execute conversion.
   */
  convertIt(): void {
    this.result = this.text2bin === true ? this.toBinary(this.inputText) : this.toText(this.inputText);
  }


  /**
   * Change logic based on user selection.
   */
  changeLogic(): void {
    this.text2bin = this.text2bin === true ? false : true;
    if (this.text2bin === true) {
      this.placeholderText = "Enter text ...";
      this.pageTitle = "Text to Binary";
    } else {
      this.placeholderText = "Enter binary ...";
      this.pageTitle = "Binary to Text";
    }
    console.log(this.text2bin);
    this.convertIt();
  }
}
