import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { states } from '../../shared/classes/reactive-forms/data-model';
import { HeroService } from '../../shared/services/hero.service';
import { Hero } from '../../shared/classes/reactive-forms/hero';
import { Address } from '../../shared/classes/reactive-forms/address';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  public name = new FormControl();
  public nameChangeLog: string[] = [];
  public heroForm: FormGroup;
  public states = states;

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
  ) {
    this.createForm();
    this.logNameChange();
  }

  ngOnInit() {
  }

  public createForm(): void {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe();
    this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    return {
      id: this.hero.id,
      name: formModel.name as string,
      addresses: secretLairsDeepCopy
    };
  }

  revert() { this.ngOnChanges(); }

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
}
