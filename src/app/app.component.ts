import {Component, OnInit} from '@angular/core';
import { DataService} from "./event.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit{


  counter:number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentCounter.subscribe(counter => this.counter = counter);
  }

  closeMenu() {
    const menuCheckbox = document.getElementById('menu__toggle') as HTMLInputElement;
    menuCheckbox.checked = false;
  }

}
