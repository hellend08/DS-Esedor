import { Component } from '@angular/core';

export interface Empresas {
  name: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DS-Esedo-Frontend';

  dataEmpresa: Empresas[] = [
    {name: 'Niubiz(Ex VisanetPerú)', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/logoniubiz.png'},
    {name: 'Primax', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/primaxlogo.png'},
    {name: 'Redeban', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/LogoRedeban.png'},
    {name: 'Ripley', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/LogoRipley.png'},
    {name: 'Caja Cusco', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/logoCajaCusco.png'}
  ];

}
