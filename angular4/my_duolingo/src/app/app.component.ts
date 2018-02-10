import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEncerrado: boolean = false
  public tipoEncerramento:String

  public encerrarJogo(tipo:String):void{
  	this.tipoEncerramento = tipo
  	this.jogoEncerrado = true
  }

  public reiniciarJogo():void{
  	this.tipoEncerramento = undefined
  	this.jogoEncerrado = false
  }


}
