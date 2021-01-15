import { Component, OnInit } from '@angular/core';
import { IReservas, ISala } from './types/main-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservas';

  currentUser: string;
  users = ['Pepe Hongo', 'Lou Reed', 'Fantasma'];

  salas: ISala[];

  ngOnInit() {
    // DRY = dont repeat yourself

    this.currentUser = this.users[0];

    this.salas = [
      {
        name: 'Sala 1',
        reserva: 'Sab 14, 18:00hs',
        horarios: this.getHorarios('LMV'),
      },
      {
        name: 'Sala 2',
        reserva: null,
        horarios: this.getHorarios('MJS'),
      },
      {
        name: 'Sala 3',
        reserva: 'hola',
        horarios: this.getHorarios('MJS'),
      },
    ];

    console.log(this.salas);
  }

  changeActiveUser(event) {
    console.log(event.target.value);
    this.currentUser = event.target.value;
  }

  makeReservation(horario) {
    horario.user = this.currentUser;

    console.log('Estado de reservas');
    console.log(this.salas);
  }

  private getHorarios(dias: 'LMV' | 'MJS'): IReservas[] {
    const lunesMiercolesViernes: IReservas[] = [
      { rango: 'Lunes 14:00 - 15:00', user: null },
      { rango: 'Miercoles 16:00 - 17:00', user: null },
      { rango: 'Viernes 17:00 - 18:00', user: null },
    ];

    const martesJuevesSabado: IReservas[] = [
      { rango: 'Martes 14:00 - 15:00', user: null },
      { rango: 'Jueves 16:00 - 17:00', user: null },
      { rango: 'Sabado 17:00 - 18:00', user: null },
    ];

    return dias === 'LMV' ? lunesMiercolesViernes : martesJuevesSabado;
  }
}
