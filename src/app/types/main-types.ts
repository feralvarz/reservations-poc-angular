export interface ISala {
    name: string;
    reserva: string;
    horarios: IReservas[];
}
export interface IReservas {
    rango: string;
    user: string;
}
