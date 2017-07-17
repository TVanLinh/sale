import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./core/header/header.component";
import {HeadComponent} from "./core/header/head/head.component";
import {NavComponent} from "./core/header/nav/nav.component";
import {ProductsComponent} from "./products/products.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {DetailComponent} from "./products/detail/detail.component";
import {ProductItemComponent} from "./products/product-list/product-item/product-item.component";
import {SlideBarComponent} from "./core/slide-bar/slide-bar.component";
import {CatalogComponent} from "./core/slide-bar/catalog/catalog.component";
import {ProductNewComponent} from "./core/slide-bar/product-new/product-new.component";
import {CommonModule} from "@angular/common";
import {PostNewComponent} from "./core/slide-bar/post-new/post-new.component";
import {SliderComponent} from "./products/slider/slider.component";
import {Product} from "./model/product.model";
import {FooterComponent} from "./core/footer/footer.component";
import {FooterAboveComponent} from "./core/footer/footer-above/footer-above.component";
import {FooterBelowComponent} from "./core/footer/footer-below/footer-below.component";
import {ProductRouting} from "./products/product.routing";
import {AppRouting} from "./app.routing";
import {ProductService} from "./service/product.service";
import { ShoppingComponent } from './shopping/shopping.component';
import { PageComponent } from './pages/page/page.component';
import { CartComponent } from './shopping/cart/cart.component';
import {ShoppingService} from "./service/shopping.service";
import {Ingredient} from "./model/ingrendient.model";
import {FormsModule} from "@angular/forms";
import { CustomerComponent } from './shopping/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    NavComponent,
    ProductsComponent,
    ProductListComponent,
    DetailComponent,
    ProductItemComponent,
    SlideBarComponent,
    CatalogComponent,
    ProductNewComponent,
    PostNewComponent,
    SliderComponent,
    FooterComponent,
    FooterAboveComponent,
    FooterBelowComponent,
    ShoppingComponent,
    PageComponent,
    CartComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ProductRouting,
    AppRouting,
    FormsModule
  ],
  providers: [Product, ProductService,ShoppingService, Ingredient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
