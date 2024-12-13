import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Documento {
  correlativo: string;
  nro_cuenta: string;
  subtotal: number;
  comision: number;
  derechos: number;
  otros_gastos: number;
  iva: number;
  afecta?: boolean; // Indica si el documento es "Afecta" o "Exenta"
  selected?: boolean;
}

@Component({
  selector: 'app-envio-documentos-electronicos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './envio-documentos-electronicos.component.html',
  styleUrls: ['./envio-documentos-electronicos.component.css'],
})
export class EnvioDocumentosElectronicosComponent {
  documentos: Documento[] = [];
  documentosFiltrados: Documento[] = [];

  habilitarRut: boolean = false;
  habilitarSucursal: boolean = false;
  mostrarOperacionesDiarias: boolean = false;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDocumentos();
  }

  loadDocumentos() {
    this.http.get<{ data: Documento[] }>('assets/data.json').subscribe((response) => {
      // Agregando una propiedad "afecta" a cada documento para simular datos.
      this.documentos = response.data.map((doc, index) => ({
        ...doc,
        afecta: index % 2 === 0, // Alternando entre Afectas y Exentas
        selected: false,
      }));
      this.documentosFiltrados = [...this.documentos];
    });
  }


  toggleOperacionesDiarias(visible: boolean): void {
    this.mostrarOperacionesDiarias = visible;
  }

  toggleAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.documentosFiltrados.forEach((doc) => {
      doc.selected = isChecked;
    });
  }

  toggleInput(inputName: string, state: boolean): void {
    if (inputName === 'rut') {
      this.habilitarRut = state;
    }
    if (inputName === 'sucursal') {
      this.habilitarSucursal = state;
    }
  }

  filtrarDocumentos(filtro: string) {
    if (filtro === 'Afectas') {
      this.documentosFiltrados = this.documentos.filter((doc) => doc.afecta);
    } else if (filtro === 'Exentas') {
      this.documentosFiltrados = this.documentos.filter((doc) => !doc.afecta);
    } else {
      this.documentosFiltrados = [...this.documentos];
    }
  }
}