import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {IProduct} from './products';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  
})
export class ProductListComponent implements OnInit {

  products: IProduct[];
  pageTitle = "Product List Fred";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  filteredProducs: IProduct[];
  errorMessage: string = "";
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducs = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService: ProductService) {     
  }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    //this.filteredProducs = this.products;

    this.productService.getProducts().subscribe({
      next: productsData => {
        this.products = productsData;
        this.filteredProducs = this.products;
      },
      error: err => this.errorMessage = err
    });

  }

  public hasProducts(): boolean
  {
    return this.products && this.products.length > 0;
  }

  public toggleImage(): boolean
  {
    return this.showImage = !this.showImage;
  }


  private performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 )
  }

  public displaySendRating(message: string):void {
    this.pageTitle = "Product List: " + message;
  }

}
