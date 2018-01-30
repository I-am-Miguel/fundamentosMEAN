import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'


@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
	public frases: Array<Frase>
	public fraseAtual:Frase	

	public resposta:string
	public tentativa:number

	constructor() {
		this.frases = FRASES
		this.fraseAtual = this.frases[0]	
		this.resposta = ""		
		this.tentativa = 0
	}

	ngOnInit() {
	}

/*
	public fraseAleatoria(){
		const length  = () => {
			var resultado =0
			for (var i = 0; i <= this.frases.length; i++){
				if(this.frases[i])resultado++
			}
			return resultado		
		}		
		this.rodada = Math.floor(Math.random() * length())
		return this.frases[this.rodada]
	}
*/
	public respostaAtual(palavra: Event){
		this.resposta = (<HTMLInputElement>palavra.target).value		
	}

	public verificaResposta(){
		if(this.resposta.length < 1){
			return false
		}
		if (this.resposta.toUpperCase() == this.fraseAtual.frasePtBr.toUpperCase()) {			
			this.tentativa++
			this.fraseAtual = this.frases[this.tentativa]
		}else{
			alert("Tradução incorreta")
		}

	}
}
