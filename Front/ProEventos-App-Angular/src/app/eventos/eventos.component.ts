import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos = response, error => console.log(error)
    );
    this.eventos = [
      {
        EventoId: 1,
        Tema: 'Angular',
        Local: 'Belo Horizonte'
      },
      {
        EventoId: 2,
        Tema: '.NET Core',
        Local: 'São Paulo'
      },
      {
        EventoId: 3,
        Tema: 'Angular e .NET Core',
        Local: 'Rio de Janeiro'
      }
    ];
  }
}