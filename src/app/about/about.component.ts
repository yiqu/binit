import { Component } from '@angular/core';

/**
 * This class represents the About (changelog) component.
 */
@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() {}
    
  // change log information array
  changelog: Array<Object> = [
    {
      version: '1.0.0',
      date: new Date('5/30/17'),
      changes: 'Created application'
    },
    {
      version: '1.1.0',
      date: new Date('7/07/17'),
      changes: 'Updated look and feel'
    },
    {
      version: '1.1.1',
      date: new Date('8/07/17'),
      changes: 'Added CHANGE LOG page'
    },
    {
      version: '1.1.2',
      date: new Date('8/08/17'),
      changes: 'Updated the 404 page'
    }
  ];
}