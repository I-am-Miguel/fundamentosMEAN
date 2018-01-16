import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
	private frase:String

	constructor() { 
		this.frase = 'My name is Miguel'
	}

	ngOnInit() {
	}

}
