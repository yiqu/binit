import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded About (changelog) component.
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
  changelog: Array<any> = [
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
    },
    {
      version: '1.1.3',
      date: new Date('8/16/17'),
      changes: 'Chores: updated dependencies'
    },
    {
      version: '1.2.3',
      date: new Date('10/05/17'),
      changes: 'Chores: updated dependencies'
    },
    {
      version: '1.3.3',
      date: new Date('10/30/17'),
      changes: 'Chores: updated dependencies'
    }
  ];
}