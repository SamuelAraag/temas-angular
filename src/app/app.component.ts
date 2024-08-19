import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alternando-temas';

  mudarTema(itemSelecionado: any): void {
    let idLink = 'idLinkTema';
    let estiloLink = document.getElementById(idLink) as HTMLLinkElement;

    let temaSelecionado = itemSelecionado?.value;
    if(temaSelecionado == 'tema-personalizado'){
      estiloLink.href = 'https://localhost:7299/api/Cursos/usuarios-294-A/tema-personalizado'
      return
    }
    if (estiloLink && temaSelecionado) {
        estiloLink.href = `assets/temas/${temaSelecionado}.css`;
    }
  }

  removerTemas(): void {
    // Remove todos os elementos <link> com id "style1"
    const estiloLink = document.getElementById('idLinkTema');
    if (estiloLink) {
        estiloLink.parentNode?.removeChild(estiloLink);
    }
  }
}
