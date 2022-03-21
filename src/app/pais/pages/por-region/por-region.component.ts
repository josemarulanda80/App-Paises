import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent implements OnInit {
paises:Country[]=[];
regiones:string[]=["EU",
  "EFTA" ,
  "CARICOM",
  "PA",
  "AU" ,
  "USAN" ,
  "EEU" ,
  "AL",
  "ASEAN" ,
  "CAIS" ,
  "CEFTA" ,
  "NAFTA",
  "SAARC" ];
regionActiva:string='';
constructor( private paisService: PaisService){

}
getClaseCSS (region:string){
  return (region === this.regionActiva)
  ? 'btn btn-primary'
  : 'btn btn-outline-primary';
  
}
activarRegion(region:string){
  if (region === this.regionActiva){return}
  this.regionActiva=region;
  this.paises=[];
  this.paisService.buscarRegion(region).subscribe(pais=>
    this.paises=pais
    )

}
  ngOnInit(): void {
  }
 

}
