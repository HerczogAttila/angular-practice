import { Component } from '@angular/core';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent {
  public status: string;

  public onSave(): void {
    const blob = new Blob(['Test data!'], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
    this.status = 'File saved!';
  }
}
