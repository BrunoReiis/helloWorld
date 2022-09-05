import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloMundo';

  numeroCurso:string[] = [];
  curso = "";
  paragrafo="";

  addCurso()
  {
    this.numeroCurso.push(this.curso)
  }

  mudarParagrafo()
  {
    if(this.numeroCurso.length == 0)
    {
      this.paragrafo = "Nâo temos cursos no momento";
    }
    if(this.numeroCurso.length >= 1)
    {
        this.paragrafo = "Temos cursos disponiveis";
    }
    return this.paragrafo;
  }

}
