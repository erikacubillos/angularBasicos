import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','hulk', 'Thor'];
  heroeBorrado: string | undefined = '';

  borrarheroe(){
    console.log('borrando...')
    this.heroeBorrado = this.heroes.shift() || undefined;
  }  
}

