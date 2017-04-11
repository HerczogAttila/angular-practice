import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  public data: string;
  public allowFileDrop = false;

  constructor() { }

  ngOnInit() {
  }

  public onChange(e): void {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  private handleReaderLoaded(e): void {
    let file = e.target.result;
    file = file.split(',')[1];
    this.data = 'data: ' + window.atob(file);
  }
}
