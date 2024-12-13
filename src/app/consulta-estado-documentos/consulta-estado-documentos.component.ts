import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-estado-documentos',
  templateUrl: './consulta-estado-documentos.component.html',
  styleUrls: ['./consulta-estado-documentos.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ConsultaEstadoDocumentosComponent {
  documentos = [
    { tipo: 'Factura', estado: 'Enviadas', fecha: '2024-06-12' },
    { tipo: 'Nota Crédito', estado: 'No Enviadas', fecha: '2024-06-11' },
    { tipo: 'Factura', estado: 'Impresas', fecha: '2024-06-10' },
  ];

  consultarEstado(): void {
    console.log('Consultando estado...');
  }

  recuperarFolios(): void {
    console.log('Recuperando folios...');
  }
}
