import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {
  // progress: any;
  // progressObserver: any;
  public data = '';

  /* constructor () {
    this.progress$ = Observable.create(observer => {
      this.progressObserver = observer;
    }).share();
  }*/

  public makeFileRequest (url: string, params: string[], files: File[]) {
    return Observable.create(observer => {
      const formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        this.data = files[i].webkitRelativePath;
        console.log(this.data);
        formData.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      /* xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);

        this.progressObserver.next(this.progress);
      };*/

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
