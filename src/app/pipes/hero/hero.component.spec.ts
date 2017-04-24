import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { By } from '@angular/platform-browser';
import { Hero } from '../../shared/classes/pipes/hero';

let comp: HeroComponent;
let fixture: ComponentFixture<HeroComponent>;
let page: Page;

describe('HeroComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    })
    .compileComponents()
    .then(createComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('toggleFly click', () => {
    const button = page.buttons[0];
    button.click();
    expect(button.textContent).toBe('Can\'t fly');
  });
});

function createComponent() {
  fixture = TestBed.createComponent(HeroComponent);
  comp = fixture.componentInstance;

  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    comp.hero = new Hero();
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  public buttons: HTMLLIElement[];
  public paragraphs: HTMLLIElement[];

  constructor() {
    this.buttons = fixture.debugElement.queryAll(By.css('button')).map(de => de.nativeElement);
    this.paragraphs = fixture.debugElement.queryAll(By.css('p')).map(de => de.nativeElement);
  }
}
