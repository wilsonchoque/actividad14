import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombrePadre: string = "";
  dniPadre : number = 0;
  estadoPadre : string = "";
  condicionPadre: boolean = false;
  public formulario!:FormGroup;
  mensaje:any[]=[];
  constructor(private formularioV:FormBuilder) { }
  ngOnInit(): void {
    
    this.formulario=this.formularioV.group({
      nombre:['',
      [Validators.required,
      
    ]
    ],
      dni:[0,
      [Validators.required,
      Validators.minLength(8)]],
      estado:''
    }
    )

  }
  Enviar(){
    this.mensaje=[this.formulario.value,this.formulario.valid]
  }

  

}
