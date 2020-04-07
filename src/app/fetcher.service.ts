import { Injectable, OnInit } from '@angular/core';
import { ItemService } from './httpService/ItemService';
import { ArticleService } from './httpService/ArticleService';
import { TagService } from './httpService/TagService';
import { CurrencyService } from './httpService/CurrencyService';
import { LocationService } from './httpService/LocationService';
import { Item } from './model/item';
import { Article } from './model/article';
import { Tag } from './model/tag';
import { Currency } from './model/currency';
import { Location } from './model/location';

@Injectable({
  providedIn: 'root'
})
export class FetcherService implements OnInit{
  itemList:     Item[];
  articleList:  Article[];
  tagList:      Tag[];
  currencyList: Currency[];
  locationList: Location[];


  constructor(
    private itemService: ItemService,
    private articleService: ArticleService,
    private tagService: TagService,
    private currencyService: CurrencyService,
    private locationService: LocationService,
    ) { 

  }

  ngOnInit(): void {
    this.fetchItem();
    this.fetchArticle();
    this.fetchTag();
    this.fetchCurrency();
    this.fetchLocation();
  }


  fetchItem(){
    this.itemService.getAll().subscribe(
      objList => this.itemList = objList
    );
  }
  fetchArticle(){
    this.articleService.getAll().subscribe(
      objList => this.articleList = objList
    );
  }
  fetchTag(){
    this.tagService.getAll().subscribe(
      objList => this.tagList = objList
    );
  }
  fetchCurrency(){
    this.currencyService.getAll().subscribe(
      objList => this.currencyList = objList
    );
  }
  fetchLocation(){
    this.locationService.getAll().subscribe(
      objList => this.locationList = objList
    );
  }

  getItem(id: number){
    const preFilteredObjList = this.itemList.filter(
      obj => obj.id === id
    );
    return preFilteredObjList.length > 0 ? 
    preFilteredObjList[0]: 
    {} as Item;
  }

  getArticle(id: number): Article{
    const preFilteredObjList = this.articleList.filter(
      obj => obj.id === id
    );
    return preFilteredObjList.length > 0 ? 
    preFilteredObjList[0]: 
    {} as Article;
  }

  getTag(id: number){
    const preFilteredObjList = this.tagList.filter(
      obj => obj.id === id
    );
    return preFilteredObjList.length > 0 ? 
    preFilteredObjList[0]: 
    {} as Tag;
  }

  getCurrency(id: number){
    const preFilteredObjList = this.currencyList.filter(
      obj => obj.id === id
    );
    return preFilteredObjList.length > 0 ? 
    preFilteredObjList[0]: 
    {} as Currency;
  }

  getLocation(id: number){
    const preFilteredObjList = this.locationList.filter(
      obj => obj.id === id
    );
    return preFilteredObjList.length > 0 ? 
    preFilteredObjList[0]: 
    {} as Location;
  }


}
