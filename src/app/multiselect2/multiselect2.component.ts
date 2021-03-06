import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-multiselect2',
  templateUrl: './multiselect2.component.html',
  styleUrls: ['./multiselect2.component.css']
})
export class Multiselect2Component {
  public query = '';
  public countries = [ 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus',
    'Belgium', 'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus',
    'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
    'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo',
    'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta',
    'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
    'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
    'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'];
  public filteredList = [];
  public elementRef;
  public selected = [];

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }

  public select(item: string): void {
    this.selected.push(item);
    this.query = '';
    this.filteredList = [];
  }

  public remove(item: string): void {
    this.selected.splice(this.selected.indexOf(item), 1);
  }

  public filter(): void {
    if (this.query !== '') {
      this.filteredList = this.countries.filter(function(el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }
}
