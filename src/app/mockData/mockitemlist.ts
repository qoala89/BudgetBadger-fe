import { Item } from "../model/item";
import { Interval } from '../model/interval';


export const MockItemList: Item[] = [
    {
        "id":         0,
        "quantity":   1,
        "weight":     0,
        "articleId":  0,
        "price":      {
            "price":      3.25,
            "currencyId": 0,
        },
        "dateTime":   "2004-06-14T23:34:30",
        "locationId": 0,
        "interval":   {
            "modifier": 1,
            "interval": Interval.ONCE,
        },
        "groupIds":   [0],
        "buyerId":    0,
    },
    {
        "id":         1,
        "quantity":   1,
        "weight":     0,
        "articleId":  1,
        "price":      {
            "price":      40,
            "currencyId": 0,
        },
        "dateTime":   "2004-06-15T23:34:30",
        "locationId": 1,
        "interval":   {
            "modifier": 1,
            "interval": Interval.ONCE,
        },
        "groupIds":   [0],
        "buyerId":    0,
    },
    {
        "id":         2,
        "quantity":   6,
        "weight":     0,
        "articleId":  2,
        "price":      {
            "price":      20.33,
            "currencyId": 0,
        },
        "dateTime":   "2004-06-16T23:34:30",
        "locationId": 0,
        "interval":   {
            "modifier": 1,
            "interval": Interval.ONCE,
        },
        "groupIds":   [0],
        "buyerId":    0,
    },
]