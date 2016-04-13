import {Page} from 'ionic-angular';


@Page({
	
	template:
    `
    <ion-navbar *navbar>
      <ion-title  >Made Your Exotic River</ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

    <ion-row>
        <ion-col>
            <img src="img/exotic river.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 
			 <h4> <h1> <b> Ingredients </b> </h1>
			 
			<i> 
			<ul>
		  <li>4cl Rhum Agricole Trois Rivieres </li>
		  <li>2cl Jus de Citron Vert</li>
		  <li>6cl Jus d'Ananas </li>		  
		  <li> 2cl Jus de Cramberry </li>
		  
			</ul>
			 
			</i> </h4> 
			
    </ion-row>
</ion-content>
`
})
export class Page3 {
  constructor() {

  }
}
