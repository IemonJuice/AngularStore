import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent {
  @Input() isMacBooks: boolean = false;
  @Input() isIPhones: boolean = false;
  @Input() isOther: boolean = false;
  @Output() eventFromChild = new EventEmitter<any>();
  @Output() eventToBasket = new EventEmitter<number>();
  @Output() eventALL = new EventEmitter<any>();
  index: number = 0;
  quantity: number = 0;
  price: number = 0;
  data: any;
  description: string = '';
  nameOfItem: string = '';
  url: string = '';

  constructor(private http: HttpClient) {
    http.get<any>('assets/fakerestapi.json')
      .subscribe((data) => {
        if (this.isMacBooks) {
          this.data = data.MacBooks;
          this.price = data.MacBooks[0].price
          this.nameOfItem = data.MacBooks[0].name
          this.description = data.MacBooks[0].Properties
          this.url = data.MacBooks[0].url
        } else if (this.isIPhones) {
          this.data = data.Iphones;
          this.price = data.Iphones[0].price
          this.nameOfItem = data.Iphones[0].name
          this.description = data.Iphones[0].Properties
          this.url = data.Iphones[0].url
        } else if (this.isOther) {
          this.data = data.Other;
          this.price = data.Other[0].price
          this.nameOfItem = data.Other[0].name
          this.description = data.Other[0].Properties
          this.url = data.Other[0].url
        }
      })
  };

  increaseQuantity() {
    this.quantity++;
    this.eventFromChild.emit(this.quantity);
  }


  getIndex(index: number) {
    this.index = index;
    this.eventToBasket.emit(this.index);
  }

  getAll() {
    this.eventALL.emit(this.data);
    window.alert('Item is added to the checkout')
  }

}
