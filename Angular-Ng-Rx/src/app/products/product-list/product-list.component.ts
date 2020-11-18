import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { Product } from '../product';
//import { ProductService } from '../product.service';

import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer'

import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  
  //errorMessage: string;
  //displayCode: boolean;
  //products: Product[];
  // Used to highlight the selected product in the list
  //selectedProduct: Product | null;
  //sub: Subscription;

  product$: Observable<Product[]>
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  // constructor(private store: Store<State>, 
  //   private productService: ProductService) { }

  constructor(private store: Store<State>) { }

  // ngOnInit(): void {
  //   this.sub = this.productService.selectedProductChanges$.subscribe(
  //     currentProduct => this.selectedProduct = currentProduct
  //   );

  //this.selectedProduct$ = 
  ngOnInit(): void {
    // TODO: Unsubscribe
    // this.store.select(getCurrentProduct).subscribe(
    //   currentProduct => this.selectedProduct = currentProduct
    // );


    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: err => this.errorMessage = err
    // });
    this.product$ = this.store.select(getProducts);

    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$ = this.store.select(getCurrentProduct);

    // this.store.select(getShowProductCode).subscribe(
    //   showProductCode => this.displayCode = showProductCode
    // );

    this.displayCode$ = this.store.select(getShowProductCode);  

  }

  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

  checkChanged(): void {
    //this.displayCode = !this.displayCode;
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    //this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  // productSelected(product: Product): void {
  //   //this.productService.changeSelectedProduct(product);
  //   this.store.dispatch(ProductActions.setCurrentProduct({ product }));
  // }

  productSelected(product: Product): void {
    //this.productService.changeSelectedProduct(product);
    this.store.dispatch(
        ProductActions.setCurrentProduct(
            { currentProductId: product.id }
          )
      );
  }

}
