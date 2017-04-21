import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesComponent } from './pipes.component';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './pipe-classes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipe-classes/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './pipe-classes/flying-heroes-impure.pipe';
import { FetchJsonPipe } from './pipe-classes/fetch-json.pipe';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero/hero.component';
import 'rxjs/add/operator/map';

let comp: PipesComponent;
let fixture: ComponentFixture<PipesComponent>;
let page: Page;

describe('PipesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      declarations: [
        PipesComponent,
        HeroComponent,
        ExponentialStrengthPipe,
        FlyingHeroesPipe,
        FlyingHeroesImpurePipe,
        FetchJsonPipe,
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
      ]
    })
    .compileComponents()
    .then(createComponent);
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('date format', () => {
    expect(comp.format).toBe('shortDate');
  });

  it('Toggle date format', () => {
    comp.toggleFormat();
    expect(comp.format).toBe('fullDate');
  });

  it('Click toggle date format', () => {
    const button = page.buttons[0];
    button.click();
    expect(comp.format).toBe('fullDate');
  });

  it('Normal power input text', () => {
    const input = page.inputs[0];
    expect(input.value).toBe('5');
  });

  it('Boost factor input text', () => {
    const input = page.inputs[1];
    expect(input.value).toBe('3');
  });

  it('Date', () => {
    const p = page.paragraphs[0];
    expect(p.textContent).toBe('Fri Apr 15 1988 00:00:00 GMT+0200 (CEST)');
  });

  it('Super Hero Power: 125', () => {
    const p = page.paragraphs[7];
    expect(p.textContent).toBe('Super Hero Power: 125');
  });

  it('Change normal power 4', () => {
    const input = page.inputs[0];
    input.value = 4;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      const p = page.paragraphs[7];
      expect(p.textContent).toBe('Super Hero Power: 64');
    });
  });

  it('Change boost factor 4', () => {
    const input = page.inputs[1];
    input.value = 4;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      const p = page.paragraphs[7];
      expect(p.textContent).toBe('Super Hero Power: 625');
    });
  });

  it('Add hero', () => {
    comp.heroName = 'New Hero';
    comp.addHero();
    expect(comp.heroName).toBe('');
    expect(comp.heroes.length).toBe(11);
  });

  it('Add null hero', () => {
    comp.heroName = null;
    comp.addHero();
    expect(comp.heroes.length).toBe(10);
  });

  it('Reset heroes', () => {
    comp.heroName = 'New Hero';
    comp.addHero();
    comp.reset();
    expect(comp.heroes.length).toBe(10);
  });
});

function createComponent() {
  fixture = TestBed.createComponent(PipesComponent);
  comp = fixture.componentInstance;

  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  public buttons: HTMLLIElement[];
  public inputs: HTMLLIElement[];
  public paragraphs: HTMLLIElement[];

  constructor() {
    this.buttons = fixture.debugElement.queryAll(By.css('button')).map(de => de.nativeElement);
    this.inputs = fixture.debugElement.queryAll(By.css('input')).map(de => de.nativeElement);
    this.paragraphs = fixture.debugElement.queryAll(By.css('p')).map(de => de.nativeElement);
  }
}
