import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    
    {
      "givenName": "Zachary",
      "surName": "Adams",
      "email": "z_adams@aol.com",
      "age": 65,
      "address": "Birmingham"
    },
    {
      "givenName": "Brianna",
      "surName": "Ward",
      "email": "bmward@outlook.com",
      "age": 65,
      "address": "Washington"
    },
    {
      "givenName": "Matthew",
      "surName": "Butler",
      "email": "matthew@ymail.com",
      "age": 24,
      "address": "Emerald"
    },
    {
      "givenName": "Joshua",
      "surName": "Ross",
      "email": "jaross@live.com",
      "age": 55,
      "address": "Penuelas"
    },
    {
      "givenName": "Jack",
      "surName": "White",
      "email": "j_d_white86@aol.com",
      "age": 72,
      "address": "Leesville"
    },
    {
      "givenName": "Isabella",
      "surName": "Miller",
      "email": "isabella.jane.miller@yahoo.com",
      "age": 27,
      "address": "Libertyville"
    },
    {
      "givenName": "Alexandra",
      "surName": "Wilson",
      "email": "alexandramwilson@rocketmail.com",
      "age": 39,
      "address": "Hughesville"
    },
    {
      "givenName": "Joseph",
      "surName": "Lopez",
      "email": "j_h_lopez@rocketmail.com",
      "age": 34,
      "address": "Charlotte"
    },
    {
      "givenName": "Aaron",
      "surName": "Barnes",
      "email": "a_m_barnes@outlook.com",
      "age": 55,
      "address": "El Paso"
    },
    {
      "givenName": "Michael",
      "surName": "Nelson",
      "email": "michaelallen@aol.com",
      "age": 44,
      "address": "Ellington"
    }
]
}
