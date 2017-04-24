import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDownloadComponent } from './file-download.component';

describe('FileDownloadComponent', () => {
  let comp: FileDownloadComponent;
  let fixture: ComponentFixture<FileDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDownloadComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDownloadComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('onSave', () => {
    comp.onSave();
    expect(comp.status).toBe('File saved!');
  });
});
