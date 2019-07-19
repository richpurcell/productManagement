import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() productsToShow: any;
  oneProduct: any;
  edit: any;
  id: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.edit = {title: "", price: "", imageUrl: "" };
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.showProduct(this.id);
  }

  editProduct(id: String){
    let observable = this._httpService.editOneProduct(id, this.edit);
    observable.subscribe(data => {
      this.edit = {title: "", description: "" };
      this._router.navigate(['/products']);
    });
  }
  deleteProduct(id: string){
    console.log("Clicked deleteProduct() button:", id)
    let observable = this._httpService.deleteOneProduct(id);
    observable.subscribe(data => {
    this._router.navigate(['/products'])
    });
  }
  showProduct(id: String) {
    this.oneProduct = id;
    let observable = this._httpService.getOneProduct(this.id);
    observable.subscribe(data => {
      this.edit = data;
    });
  }
}
