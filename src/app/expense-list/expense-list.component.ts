import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from '../expense-model';
import { ActivatedRoute, Data} from '@angular/router';
import { ItemService } from '../httpService/ItemService';




@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenseList: ExpenseModel[];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService) { 
  }

  ngOnInit(): void {
    this.initModel();
  }

  initModel(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.expenseList = data['expenseList'];
        console.warn(this.expenseList);
      }
    );
  }





}
