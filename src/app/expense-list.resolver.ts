import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ItemService } from './httpService/ItemService';
import { ArticleService } from './httpService/ArticleService';
import { TagService } from './httpService/TagService';
import { CurrencyService } from './httpService/CurrencyService';

import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Tag } from './model/tag';
import { Currency } from './model/currency';
import { ExpenseModel } from './expense-model';



@Injectable({
  providedIn: 'root'
})
export class ExpenseListResolver implements Resolve<ExpenseModel[]> {

    
    constructor(
        private itemService: ItemService,
        private articleService: ArticleService,
        private tagService: TagService,
        private currencyService: CurrencyService
        )
    {
    }

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot)
        : ExpenseModel[] | Observable<ExpenseModel[]> | Promise<ExpenseModel[]> {
            
            
            const res = this.itemService.getAll().pipe(
                switchMap(
                    ii => {
                        const expenseModelListObs = ii.map(
                            i => this.articleService.get(i.articleId).pipe(
                                map(
                                    a => {
                                        let expenseModel: ExpenseModel = {
                                            articleLabel: a.label,
                                            price: `${i.price.price} ${i.price.currencyId}`,
                                            tags: [{} as Tag]
                                        }
                                        return expenseModel;
                                    }
                                )
                            )
                        )
                        return forkJoin(expenseModelListObs);
                    }
                )
            );
            return res;
    }

}