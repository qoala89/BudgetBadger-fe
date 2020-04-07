# BudgetBadgerFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Data Schema

```
Item
int quantity
float weight
PaymentInterval interval
ItemClass itemClass
DateTime dateTime
Location location
Group[] groups
Price price
User buyer;

ItemClass --> name needs to be changed
String[] autocompleteHelper
String label
String description
Tag[] tags


PaymentInterval
int modifier
Interval interval

Interval
ONCE
WEEKLY
MONTHLY
YEARLY



Tag --> predefined inital set of tags, e.g. {vegetables, electronics, cloth, alcohol, luxury}
String label
Emoji logo


Location
float latitude
float longitude
Store store

Store
String label
String description
String url


Price --> lookup for existing libraries
BigDecimal price
Currency currency


User
String firstName
String lastName
String email
ExchangeRate[] rates
Currency mainCurrency


Group
User[] admins
User[] users
String label
String description


ExchangeRate
Currency source
Currency destination
BigDecimal rate
LocalDateTime start
LocalDateTime end
```