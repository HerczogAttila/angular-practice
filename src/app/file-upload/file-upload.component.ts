import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { Http } from '@angular/http';
// import { escape, unescape } from 'querystring';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [UploadService]
})
export class FileUploadComponent implements OnInit {
  public data: string;
  public data2: string;
  public data3: string;

  constructor(
    public service: UploadService,
    private http: Http,
  ) {
    /* this.service.progress$.subscribe(
      data => {
        console.log('progress = ' + data);
      });*/
  }

  ngOnInit() {
  }

  public onChange(e): void {
    this.data =  e.srcElement.value;
    // const files = e.target.files;

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

    console.log(e.target.result);

    console.log('onChange');
    const files = e.srcElement.files;
    console.log(files);
    this.service.makeFileRequest('http://localhost:4200/file_upload', [], files).subscribe(() => {
      console.log('sent');
    },
    err => {
      console.log(err);
    });
  }

  _handleReaderLoaded(e) {
    let file = e.target.result;
    file = file.split(',')[1];
    this.data = 'data: ' + window.atob(file);
    // this.data2 = 'data2: ' + decodeURIComponent(escape(window.atob(file)));
    // this.data3 = 'data3: ' + window.btoa(unescape(encodeURIComponent(file)));
    // this.data2 = window.btoa('asdf');
  }
}
