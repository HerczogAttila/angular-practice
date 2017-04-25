import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';
import { Observable } from 'rxjs/Observable';

describe('FileUploadComponent', () => {
  let comp: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('onChange data transfer', () => {
    const event = { dataTransfer: {
      files: [
       new Blob(['Test data!'], { type: 'text/csv' })
      ]
    }};
    comp.onChange(event);
    Observable.timer(100).subscribe(() => {
      expect(comp.data).toBe('data: Test data!');
    });
  });

  it('onChange target.files', () => {
    const event = { target: {
      files: [
        new Blob(['Test data!'], { type: 'text/csv' })
      ]
    }};
    comp.onChange(event);
    Observable.timer(100).subscribe(() => {
      expect(comp.data).toBe('data: Test data!');
    });
  });
});
