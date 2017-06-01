import { Component, OnInit } from '@angular/core';

const copyText: string = "Copy";
const copiedText: string = "Copied!";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle: string = 'Text to Binary';
  
  text2bin: boolean = true;
  isCopied: boolean = false;
  copyButtonText: string = copyText;
  inputText: string = "";
  result: string = '';
  copyTooltip: string = "Copy to Clipboard"
  selections = [
    {title: 'To Binary', val: true},
    {title: 'To Text', val: false}
  ];


  onCopyClick(): void {
    this.isCopied = true;
    this.copyButtonText = copiedText;
  }

  onKeyup(): void {
    this.result = this.toBinary(this.inputText);
    console.log(this.result);
  }

  onMouseLeave(): void {
    this.isCopied = false;
    this.copyButtonText = copyText;
  }

  onClear(): void {
    console.log('Clearing!');
    this.inputText = "";
    this.result = "";
  }

  toBinary(input: string): string {
    return input
      .split('')
      .map(char => char.charCodeAt(0).toString(2))
      .join(' ');
  }

  toText(input: string): string {
    return input
      .split(/\s/)
      .map(val =>  String.fromCharCode(parseInt(val, 2)))
      .join("");
  }
}
