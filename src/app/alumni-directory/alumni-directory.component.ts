import { Component, OnInit } from '@angular/core';
import { alumniI } from './alumni-interface';
import { alumnis } from './alumni';

@Component({
  selector: 'app-alumni-directory',
  templateUrl: './alumni-directory.component.html',
  styleUrl: './alumni-directory.component.scss',
})
export class AlumniDirectoryComponent{
  alumni: alumniI[] = alumnis;
  person: alumniI = {} as alumniI;
  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }
}
