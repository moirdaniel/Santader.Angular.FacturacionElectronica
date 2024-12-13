import { Routes } from '@angular/router';
import { ConsultaEstadoDocumentosComponent } from './consulta-estado-documentos/consulta-estado-documentos.component';
import { EnvioDocumentosElectronicosComponent } from './envio-documentos-electronicos/envio-documentos-electronicos.component';

export const routes: Routes = [
  { path: 'consulta-estado', component: ConsultaEstadoDocumentosComponent },
  { path: 'envio-documentos', component: EnvioDocumentosElectronicosComponent },
  { path: '', redirectTo: '/consulta-estado', pathMatch: 'full' },
];
