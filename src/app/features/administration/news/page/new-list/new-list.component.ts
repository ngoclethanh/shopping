import { Component, Injector, OnInit, Pipe } from '@angular/core';
import { NewModel, StateNew } from '../../models/new.model';
import { NewService } from '../../services/new.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent extends BaseComponent {
  constructor(inject: Injector, service: NewService) {
    super(inject, service);
  }


  override params: NewModel = {
    searchName: '',
    newCategoryId: '',
    title: '',
    newCategoryName: '',
  };
  onReset() {
    this.params.searchName = '';
    this.params.status = '';
    this.params.newCategoryId = '';
    this.search();
  }
 
  override mapState(): void {
    this.stateData?.newCategories.unshift({ newCategoryName: 'Tất cả', newCategoryId: '' });
  }
  ngOnInit(): void {
    //khởi tạo rỗng ở oninit để tránh underfil trong thời gian đợi gọi api (tránh lỗi)

    if (!this.stateData) {
      this.stateData = {
        newCategories: [],
        listStatus: [],
      };
    }

    this.fileNameExcel = 'Tin-tuc.xlsx';
  }
}
