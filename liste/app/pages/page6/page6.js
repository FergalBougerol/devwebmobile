import {Page} from 'ionic-angular';


@Page({
	
	template:
    `
    <ion-navbar *navbar>
      <ion-title  >Made Your Vodka Martini</ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

    <ion-row>
        <ion-col>
            <img src="img/vodka.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> Ingredients </b> </h1>
			
			<i> 
			<ul>
		  <li>6 cl Vodka Russian Standard</li>
		  <li>1.5 cl Vermouth Dry</li>
		  <li>2 Olives</li>
			</ul>
			 
			</i> </h4> 			
			
    </ion-row>
</ion-content>
//`
})
export class Page6 {
  constructor() {

  }
}
