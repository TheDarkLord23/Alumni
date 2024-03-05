import { Component } from '@angular/core';
import { alumniI } from './alumni-interface';
import { alumnis } from './alumni';

@Component({
  selector: 'app-alumni-directory',
  templateUrl: './alumni-directory.component.html',
  styleUrl: './alumni-directory.component.scss',
})
export class AlumniDirectoryComponent {
  alumni: alumniI[] = alumnis;
  person: alumniI = {} as alumniI;
}
