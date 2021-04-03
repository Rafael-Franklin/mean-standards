import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-standard-detail',
  templateUrl: './standard-detail.component.html',
  styleUrls: ['./standard-detail.component.css']
})

export class StandardDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetStandard(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        code: res['code'],
        description: res['description'],
        dtpublication: res['dtpublication'],
        model: res['model'],
        business: res['business'],
        resume: res['resume'],
        user: res['user'],
        email: res['email']
      });
    });

    this.updateForm = this.formBuilder.group({
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

  onUpdate(): any {
    this.crudService.updateStandard(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/standards-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
