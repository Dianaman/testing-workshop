import { Component, AfterViewInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.page.html',
  styleUrls: ['./conceptos.page.scss'],
})
export class ConceptosPage implements AfterViewInit {
  @ViewChild('newSwiper') newSwiper: any;

  constructor() { }

  ngAfterViewInit() {
    this.newSwiper.swiperRef;
  }
}
