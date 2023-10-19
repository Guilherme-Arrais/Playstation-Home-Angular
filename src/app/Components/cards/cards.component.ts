import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
@Input()
Image:string=''
@Input()
Descricao:string=''
@Input()
Console:string=''
@Input()
Preco:string=''
constructor(){}
}
