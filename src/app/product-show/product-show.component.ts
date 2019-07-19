import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  // @Input() productsToShow: any; // 
  products: any;
  oneProduct: String;
  edit: any;
  selectedProduct: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getProductsFromService()
  }
  getProductsFromService(){ 
    let observable = this._httpService.getProducts();
    observable.subscribe(data => { 
      this.products = data;
    });
  }
  deleteProduct(id: string){
    let observable = this._httpService.deleteOneProduct(id);
    observable.subscribe(data => {
      this.getProductsFromService()
      this._router.navigate(['/products'])
    });
  }
  productToShow(id: any){
    this.selectedProduct = this.products;
  }
}
