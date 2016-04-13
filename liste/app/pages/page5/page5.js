import {Page} from 'ionic-angular';


@Page({
	
	template:
    `
    <ion-navbar *navbar>
      <ion-title  >Made Your Rhum Punch</ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

    <ion-row>
        <ion-col>
            <img src="img/punch.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			  
			
			 <h4> <h1> <b> Ingredients </b> </h1>
			 
			<i> 
			<ul>
		  <li>3 cl Rhum Agricole</li>
		  <li>1 cl Citron Vert</li>
		  <li>1 cl Sirop de Sucre de Canne</li>
			</ul>
			 
			</i> </h4> 
    </ion-row>
</ion-content>
`
})
export class Page5 {
  constructor() {

  }
}
