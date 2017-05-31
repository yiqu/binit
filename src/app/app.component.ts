import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  pageTitle: string = 'Text to Binary';
  isCopied: boolean = false;
  copyButtonText: string = 'Copy';
  inputText: string = null;
  result: string = 'Just me';

  ngOnInit() {

  }

  onCopyClick() {
    console.log('Clicked copy: ' + this.inputText);
    this.copyButtonText = 'Copied!';
  }

  onKeyup(inputText: string) {
    this.inputText = inputText;
    console.log(this.inputText);
    this.result = this.inputText;
  }
}
