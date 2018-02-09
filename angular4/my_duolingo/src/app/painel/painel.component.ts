import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'


@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
	public frases: Array<Frase> = FRASES
	public fraseAtual:Frase	

	public resposta:string
	public rodada:number = 0
	public progresso:number = 0
	public tentativas:number = 3

	constructor() {
		this.atualizaResposta()
	}

	ngOnInit() {
	}


	public respostaAtual(palavra: Event): void{
		this.resposta = (<HTMLInputElement>palavra.target).value		
	}

	public verificaResposta(): void{
		if(this.resposta.length < 1){			
		}
		if (this.resposta.toUpperCase() == this.fraseAtual.frasePtBr.toUpperCase()) {			
			
			this.rodada++
			this.progresso += (100/(this.frases.length-1))

			this.atualizaResposta()
			
		}else{			
			this.tentativas--

			if (this.tentativas < 0) {
				alert("Você Perdeu!")				
			}
		}		
	}

	public atualizaResposta():void{
		this.fraseAtual = this.frases[this.rodada]
		this.resposta = ""	
	}
}
