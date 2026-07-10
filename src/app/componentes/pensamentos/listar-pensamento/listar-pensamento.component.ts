import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento-model';
import { PensamentoService } from 'src/app/services/pensamentos/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listapensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listapensamentosResp) => {
      this.listapensamentos = listapensamentosResp;
    });
  }
}
