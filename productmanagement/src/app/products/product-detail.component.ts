import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  //selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageTitle = this.pageTitle + ` : ${id}`;
  }

  onBack(){
    this.router.navigate(['/products']);
  }
}
