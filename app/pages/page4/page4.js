import {Page} from 'ionic-angular';


@Page({
	
	template:
    `
    <ion-navbar *navbar>
      <ion-title>Made Your Russian Mojito <ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

    <ion-row>
        <ion-col>
            <img src="img/mojito.jpeg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
		
			
			 <h4> <h1> <b> Ingredients </b> </h1>
			 
			<i> 
			<ul>
		  <li>2cl Vodka Russian Standard</li>
		  <li>3 morceaux de Citron Vert</li>
		  <li>5 Feuilles de Menthe Fraiche</li>
		  <li>5cl Eau Gazeuse </li>
		  <li>1 cac de Sucre Roux </li>
			</ul>
			 
			</i> </h4> 
			
    </ion-row>
</ion-content>
`
})

export class Page4 {
  constructor() {

  }
}
