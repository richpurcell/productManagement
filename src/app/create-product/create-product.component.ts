import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Input() productToCreate: any;
  oneProduct: any;
  edit: any;
  new_product: any;
  id: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 

  }

  ngOnInit() {
    this.new_product = {title: "", price: 0, imageUrl: "" };
  }

  newProduct(){
    let observable = this._httpService.postProductToServer(this.new_product);
    observable.subscribe(data => {
      this.new_product = {title: "", price: 0, imageUrl: "" };
      this._router.navigate(['/products'])
    });
  }
}
