import { Component, Injector, OnInit } from '@angular/core';

import { NewCategoryModel, StateNewcategory } from '../../models/newcategory.model';
import { NewcategoryService } from '../../services/newcategory.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-newcategory-list',
  templateUrl: './newcategory-list.component.html',

})
export class NewcategoryListComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector,service: NewcategoryService) {
    super(injector,service);
  }

  override params: NewCategoryModel = {
    status: '',
    searchName:'',
    searchCode:''
  
  };
  
  onReset(){
    setTimeout(() => {
     this.search();
    }, 0);
   }
  ngOnInit(): void {
 
    this.fileNameExcel = 'loai-tin-tuc.xlsx';
  }

}

