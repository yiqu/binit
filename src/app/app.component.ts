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
  isCopied: boolean = false;
  copyButtonText: string = copyText;
  inputText: string = "";
  result: string = '';
  copyTooltip: string = "Copy to Clipboard"


  onCopyClick(): void {
    this.isCopied = true;
    this.copyButtonText = copiedText;
  }

  onKeyup(): void {
    this.result = this.toBinary(this.inputText);
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
    return input.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
  }
}
