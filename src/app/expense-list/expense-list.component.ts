import { Component, OnInit } from '@angular/core';

import { Item } from '../model/item';
import { Article } from '../model/article';
import { Tag } from '../model/tag';
import { Currency } from '../model/currency';
import { Location } from '../model/location';
import { FetcherService } from '../fetcher.service';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  viewItemsList: 
  {
    articleLabel: string,
    price:      string,
    tags:       Tag[],
  }[];

  constructor(
    private fetchService: FetcherService
    ) { 

  }

  ngOnInit(): void {
    this.initViewModel();
  }

  initViewModel(): void {
    this.viewItemsList = this.fetchService.itemList.map(
      item => {
        const article = this.fetchService.getArticle(item.articleId);
        const currency = this.fetchService.getCurrency(item.price.currencyId);
        const tags = article.tagIds.map(_tagId => 
          this.fetchService.getTag(_tagId)
        );
        return{
          articleLabel: article.label,
          price: `${item.price.price} ${currency.symbol}`,
          tags: tags,
        }
      }
    );
  }





}
