import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-standard',
  templateUrl: './add-standard.component.html',
  styleUrls: ['./add-standard.component.css']
})

export class AddStandardComponent implements OnInit {

  standardForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.standardForm = this.formBuilder.group({
      name: [''],
      code: [''],
      description: [''],
      dtpublication: [''],
      model: [''],
      business: [''],
      resume: [''],
      user: [''],
      email: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddStandard(this.standardForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/standards-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
