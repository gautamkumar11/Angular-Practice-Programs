import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({

    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    providers: [ProductService],
    styles: [`
        th,td{
            
            padding-left: 30px;
        }
        .table{
            padding-left: 200px;
            margin-top: 30px;
        }
        thead{
            color: #337AB7
        }
    `]
})
export class ProductListComponent implements OnInit, OnDestroy
{
    pageTitle: string = 'Product List';
    imageHight: number = 40;
    imageWidth: number = 20;
    showImage: boolean = false;
    sub!: Subscription;
    errorMessage: string = '';


    private _listFilter: string = '';
    
   
    get listFilter() : string
    {
        return this._listFilter;
    }
    set listFilter(value : string)
    {
        this._listFilter = value;
       console.log('In Setter: ', value);
        this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

    performFilter(filterBy: string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) =>
         product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    constructor(private productService : ProductService){
    }

    ngOnInit() : void{
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
           error: err => this.errorMessage = err
        });
       // this.filteredProducts = this.products;
        //this.listFilter = 'a';
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    onRatingClicked(message: string) : void{
       this.pageTitle = 'Product List: ' +message;
      }
   
}