import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento-model';
import { PensamentoService } from 'src/app/services/pensamentos/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.service.cadastrar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarpensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarpensamento']);
  }
}
