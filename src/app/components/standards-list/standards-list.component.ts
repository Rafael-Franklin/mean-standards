import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-standards-list',
  templateUrl: './standards-list.component.html',
  styleUrls: ['./standards-list.component.css']
})

export class StandardsListComponent implements OnInit {

  Standards:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetStandards().subscribe(res => {
      console.log(res)
      this.Standards =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteStandard(id).subscribe((res) => {
        this.Standards.splice(i, 1);
      })
    }
  }

}
