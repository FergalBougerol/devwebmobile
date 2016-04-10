import {Page,NavController} from 'ionic-angular';

import{Page2} from '../page2/page2';

import{Page3} from '../page3/page3';

import{Page4} from '../page4/page4';

import{Page5} from '../page5/page5';

import{Page6} from '../page6/page6';

import{Page7} from '../page7/page7';




@Page({
  template:   
  ` 
  
    <ion-navbar *navbar>
      <ion-title  >Drink App</ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

<ion-card class="advanced-background"(click)="goTEST()">
  <img class="advanced-background-img"src="img/bleu.jpg"/>
  <p class="advanced-background-title">Blue Lagoon</p>
</ion-card >



<ion-card class="advanced-background" (click)="goTEST2()">
  <img class="advanced-background-img" src="img/exotic river.jpg"/>
  <p class="advanced-background-title">Exotic River</p>
</ion-card>



<ion-card class="advanced-background"   (click)="goTEST3()">
  <img class="advanced-background-img" src="img/mojito.jpeg"/>
  <p class="advanced-background-title">Russian Mojito</p>
</ion-card>





<ion-card class="advanced-background"(click)="goTEST4()">
  <img class="advanced-background-img" src="img/punch.jpg"/>
  <p class="advanced-background-title">Rhum Punch</p>
</ion-card>




<ion-card class="advanced-background"(click)="goTEST5()">
  <img class="advanced-background-img" src="img/vodka.jpg"/>
  <p class="advanced-background-title">Vodka Martini</p>
</ion-card>





<ion-card class="advanced-background"(click)="goTEST6()">
  <img class="advanced-background-img" src="img/yellow.jpg"/>
  <p class="advanced-background-title">Yellow Boat</p>
</ion-card>





</ion-content>

`
  
})
 


export class Page1 {
  static get parameters() {
            return [[NavController]];
        }
        constructor(nav) {
            this.nav = nav;
             
        }

      goTEST() {
    this.nav.push(Page2)
  }
  
      goTEST2() {
    this.nav.push(Page3)
  }
  
      goTEST3() {
    this.nav.push(Page4)
  }
  
      goTEST4() {
    this.nav.push(Page5)
  }
  
      goTEST5() {
    this.nav.push(Page6)
  }
  
      goTEST6() {
    this.nav.push(Page7)
  }
}
