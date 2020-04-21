import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { MockArticleList } from './mockData/mockarticlelist';
import { MockCurrencyList } from './mockData/mockcurrency';
import { MockGroupList } from './mockData/mockgrouplist';
import { MockItemList } from './mockData/mockitemlist';
import { MockLocationList } from './mockData/mocklocationlist';
import { MockStoreList } from './mockData/mockstorelist';
import { MockTagList } from './mockData/mocktaglist';
import { MockUserList } from './mockData/mockuserlist';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDbService{

  constructor() { }
  createDb(): any | Observable<any> | Promise<any> {
    let article = MockArticleList;
    let currency = MockCurrencyList;
    let group = MockGroupList;
    let item = MockItemList;
    let location = MockLocationList;
    let store = MockStoreList;
    let tag = MockTagList;
    let user = MockUserList;
    return {article, currency, group, item, location, store, tag, user};
  }
}
