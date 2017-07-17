import {Ingredient} from "../model/ingrendient.model";
import {Injectable} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "../model/product.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ShoppingService {
  list: Ingredient[]=[];
  cartChange = new Subject<Ingredient[]>();
  cartItem = new Subject<Ingredient>();
  constructor(private productService: ProductService) {}
  setIngredient(ingredients: Ingredient[]) {
    this.list = ingredients;
  }

  public getIngredients() {
    return this.list;
  }

  public getAllMoney() {
    let all = 0;
    for(let item of this.list) {
       all+=(this.productService.getMoney(item.product))*item.amount;
    }
    return all;
  }

  public getAllMoney2(lists:Ingredient[] ) {
    let all = 0;
    for(let item of lists) {
      all+=(this.productService.getMoney(item.product))*item.amount;
    }
    return all;
  }
}
