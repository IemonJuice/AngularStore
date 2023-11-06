import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../event.service";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  items: any = [];
  isFormVisible:boolean = false
  allData:any = [];
  itemsToBasket: any = [];
  index: number = 0;
  MacBooksIsVisible: boolean = true;
  isBasketVisible: boolean = false;

  @Input() dataFromC: any;
  cartItemCount:number = 0;

  IPhonesIsVisible: boolean = false;

  OtherIsVisible: boolean = false;

  constructor(private dataService: DataService) {
  }

  increment(e: any) {
    this.dataService.incrementCounter();
  }

  getItems(e: any) {
    this.items = e;
  }

  showBasket() {
    this.isBasketVisible = !this.isBasketVisible;
  }


  getIndex(e: number) {
    this.index = e;
  }

  getAllData(e: any) {
    this.allData = e;
    this.itemsToBasket.push({basketItem: this.allData[this.index]})
    localStorage.setItem('selectedProducts',JSON.stringify(this.itemsToBasket))
    this.cartItemCount = this.itemsToBasket.length;
  }
  ngOnInit() {
    const storedProducts = localStorage.getItem('selectedProducts');
    if (storedProducts) {
      this.itemsToBasket = JSON.parse(storedProducts);
    }
  }
  deleteItemFromBasket(i:number){
    this.itemsToBasket.splice(i, 1);
    localStorage.setItem('selectedProducts', JSON.stringify(this.itemsToBasket));
    localStorage.setItem('selectedProducts', JSON.stringify(this.itemsToBasket));
    this.cartItemCount = this.itemsToBasket.length;
  }
  showForm(){
  this.isFormVisible = true;
  }
  closeForm(){
    this.isFormVisible = false;
  }
}
