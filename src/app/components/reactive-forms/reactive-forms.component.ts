import { Component } from '@angular/core';
import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormStructureComponent, PersonTableComponent, SimpleDataTableComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
currentPerson: EPerson | undefined

  onPerson(person: EPerson) {
    console.log("Parent>>>", person)
    this.currentPerson = person
    ManyPerson.push(person)
  }
}
