import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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


  onCopyClick(): void {
    this.isCopied = true;
    this.copyButtonText = this.copiedText;
  }

  onKeyup(): void {
    this.convertIt();
  }

  onMouseLeave(): void {
    this.isCopied = false;
    this.copyButtonText = this.copyText;
  }

  onClear(): void {
    this.inputText = "";
    this.result = "";
  }

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

  toText(input: string): string {
    return input
      .split(/\s/)
      .map(val =>  String.fromCharCode(parseInt(val, 2)))
      .join("");
  }

  convertIt() {
    this.result = this.text2bin === true ? this.toBinary(this.inputText) : this.toText(this.inputText);
  }

  changeLogic() {
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
