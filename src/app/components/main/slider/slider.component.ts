import {Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  sliderCounter: number = 1;
  isVisibleSliderImage1: boolean = true
  isVisibleSliderImage2: boolean = false
  isVisibleSliderImage3: boolean = false

  constructor() {
  }

  nextSliderImage() {
    this.sliderCounter++;
    if (this.sliderCounter === 4) {
      this.sliderCounter = 1;
    }
    if(this.sliderCounter === 1){
      this.isVisibleSliderImage1=true;
      this.isVisibleSliderImage2=false;
      this.isVisibleSliderImage3=false;
    }
    if(this.sliderCounter === 2){
      this.isVisibleSliderImage1=false;
      this.isVisibleSliderImage2=true;
      this.isVisibleSliderImage3=false;
    }
    if(this.sliderCounter === 3){
      this.isVisibleSliderImage1=false;
      this.isVisibleSliderImage2=false;
      this.isVisibleSliderImage3=true;
    }

  }

  previusSliderImage() {
    this.sliderCounter--;
    if (this.sliderCounter === 0) {
      this.sliderCounter = 4;
    }
    if(this.sliderCounter === 1){
      this.isVisibleSliderImage1=true;
      this.isVisibleSliderImage2=false;
      this.isVisibleSliderImage3=false;
    }
    if(this.sliderCounter === 2){
      this.isVisibleSliderImage1=false;
      this.isVisibleSliderImage2=true;
      this.isVisibleSliderImage3=false;
    }
    if(this.sliderCounter === 3){
      this.isVisibleSliderImage1=false;
      this.isVisibleSliderImage2=false;
      this.isVisibleSliderImage3=true;
    }

  }


}
