import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  title = 'Product View List';
  imgWidth = 50;
  imgMargin = 2;
  showImg: boolean = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];
  sub!: Subscription;
  products: IProduct[] = [];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }
  toggleImg(): void {
    this.showImg = !this.showImg;
  }
  onRatingClicked($event: string): void {
    this.title = "Product List: " + $event;
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProduct().subscribe(
      data => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      err => {
        console.log(err);
      }
    );
  }
  logProductId(productId: number) {
    console.log('Product ID:', productId);
  }
  
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
