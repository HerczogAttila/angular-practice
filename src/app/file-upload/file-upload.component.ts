import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public data: string;

  constructor() { }

  ngOnInit() {
  }

  public onChange(e): void {
    const files = e.srcElement.files;
    console.log(files);
  }
}
