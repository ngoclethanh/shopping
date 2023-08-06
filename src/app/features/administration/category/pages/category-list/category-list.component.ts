import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent extends BaseComponent implements OnInit {

  constructor(inject:Injector,service:CategoryService) {
    super(inject,service);
  }
   override params: CategoryModel = {
    name: null,
    code:null
  }
  ngOnInit(): void {
    if (!this.stateData) {
      this.stateData = {
        listStatus: [],
      };
    }
  }
  override mapState():void{
    this.stateData?.listStatus.unshift({ name: 'Tất cả', value: '' });
    this.stateData?.listTeacher.unshift({ teacherName: 'Tất cả', teacherId: '' });
  }
 
  onReset(){
     this.params={
      name: null,
      code:null
     }
    this.search();
   }

}
