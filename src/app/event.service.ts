import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private counterSource = new BehaviorSubject<number>(0);
  private url = new BehaviorSubject<string>('');
  private name = new BehaviorSubject<string>('');
  private price = new BehaviorSubject<number>(0);

  currentCounter = this.counterSource.asObservable();
  currentUrl = this.url.asObservable()
  currentName = this.name.asObservable()
  currentPrice = this.price.asObservable()
  constructor() { }

  incrementCounter() {
    const currentCounter = this.counterSource.value;
    const currentUrl = this.url.value;
    const currentName = this.name.value;
    const currentPrice = this.price.value;
    this.counterSource.next(currentCounter + 1);
    this.url.next('');
    this.name.next('' );
    this.price.next(0);
  }

}
