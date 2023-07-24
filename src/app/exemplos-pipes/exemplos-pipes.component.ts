import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Learning JavaScript Data Strutures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  livros: string[] = ['Java', 'Angular 2']

  filtro: any

  addCurso(valor: any) {
    this.livros.push(valor)
    console.log(this.livros)
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros
    }

    return this.livros.filter(
      (v:string) => {
        if (v.toLocaleString().toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true
      }
      return false
    })
  }
}
