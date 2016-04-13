import {Page} from 'ionic-angular';


@Page({
	
	template:
    `
    <ion-navbar *navbar>
      <ion-title  >made Your Yellow Boat</ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

    <ion-row>
        <ion-col>
            <img src="img/yellow.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> Ingredients </b> </h1>
			 
			<i> 
			<ul>
		  <li>3 cl Scotch Wisky Cutty Sark</li>
		  <li>2cl Jus de Citron</li>
		  <li>5cl Jus de Fruit de la Passion</li>
		  <li>1 cac Miel </li>
			</ul>
			 
			</i> </h4> 
			
    </ion-row>
</ion-content>
`
})
export class Page7 {
  constructor() {

  }
}
