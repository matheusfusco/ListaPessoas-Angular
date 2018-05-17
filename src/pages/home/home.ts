import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoasProvider } from '../../providers/pessoas/pessoas';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pessoas: any;
  constructor(public navCtrl: NavController,
              public PessoasProvider: PessoasProvider) {
                this.loadPessoas();

  }

  public loadPessoas() {
    this.PessoasProvider.load().then(data => {
      this.pessoas = data;
    });
  }

  public verDetalhes(pessoaEmail: string): void {
    this.navCtrl.push(DetalhesPage, {email: pessoaEmail});
  }

}
