import { Component, OnInit } from '@angular/core';
import {IProduct} from './products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) 
  { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += ` : ${id}`;

    // this.product = { 
    //   'productId': id,
    //   'productName': 'Leaf Rake'
    // }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
