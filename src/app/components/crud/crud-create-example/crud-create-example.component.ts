import { Component, inject } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { CustomerService } from '../../../shared/services/customer.service';
import { FormGroup, FormControl, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Customer } from '../../../shared/interfaces/customer';

@Component({
  selector: 'app-crud-create-example',
  standalone: true,
  imports: [CrudNavbarComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './crud-create-example.component.html',
  styleUrl: './crud-create-example.component.css'
})
export class CrudCreateExampleComponent {

  customerService = inject(CustomerService)

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    afm: new FormControl('', Validators.required),
    phoneNumbers: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })
    ]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required)
    })
  });

  phoneNumbersss = this.form.get('phoneNumbers') as FormArray //αυτο ειναι ενα κοπι ολου του κοματιου που ειναι το φον ναμπερ αρα καθε φορα ερχεται και το παλουκωνει παλι μεσα σαν αντιγραφο οταν παταω το syn

  removePhoneNumber(index: number) {
    this.phoneNumbersss.removeAt(index)
  }

  addPhoneNumber() {
    this.phoneNumbersss.push(
      new FormGroup ({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })
    )
  }

  onSubmit(value: any) {
    console.log(value)
    const customer = this.form.value as Customer
    this.customerService.createCustomer(customer).subscribe({
      next: (response)=> {
        alert("Customer created");
        this.form.reset;
      },
      error: (error)=> {
        alert("Error in creating customer")
      }
    })
  }

}
