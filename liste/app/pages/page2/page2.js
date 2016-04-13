import {Page} from 'ionic-angular';


@Page({
  template: 
  `
    <ion-navbar *navbar>
      <ion-title>Made Your Blue Lagoon /ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

    <ion-row>
        <ion-col>
            <img src="img/bleu.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 
			
			 <h4> <h1> <b> Ingredients </b> </h1>
			 
			<i> 
			<ul>
		  <li>4cl Vodka Russian Standard</li>
		  <li>2cl Curaçao Orange</li>
		  <li>1cl Jus de Citron</li>
		  
			</ul>
			 
			</i> </h4> 
    </ion-row>
</ion-content>
`
  
})
export class Page2 {
  constructor() {

  }
}
