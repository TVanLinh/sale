
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShoppingComponent} from "./shopping/shopping.component";
import {PageComponent} from "./pages/page/page.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {DetailComponent} from "./products/detail/detail.component";

const  routing: Routes= [
  // {path: "", redirectTo: 'product', pathMatch: 'full'},
    {path: "", component: PageComponent, children:[
     {path: "", component: ProductListComponent},
    {path: "product", component: ProductListComponent},
    // {path: "detail/:id", component: DetailComponent }
    {path: "detail", component: DetailComponent }
  ]},
  {path: "shop", component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule]
})

export class AppRouting {

}
