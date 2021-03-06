import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Produto } from '../../model/produto'
import { element } from 'protractor';
import { MatTableDataSource } from '@angular/material'
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  @Input()
  produtos: Produto[];
  
  constructor(private http:HttpClient) {
   }

  ngOnInit() {
    
  }

  delete(id: String, index: number){
    this.http.delete(environment.urlapi+'/produto/'+id).subscribe(res=>{
      //console.log(res)
      this.produtos.splice(index,1);
    });
  }
}
