import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  nombre = signal<string>('');
  direccion = signal<string>(''); // <- Definir como signal
  contador = signal<number>(0);
  enviado = signal<boolean>(false);

  guardar(nombre: string, contador: number,direccion: string): void {
    this.nombre.set(nombre);
    this.contador.set(contador);
    this.enviado.set(true);
    this.direccion.set(direccion);
  }
}