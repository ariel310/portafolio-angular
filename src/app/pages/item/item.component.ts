import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;
  constructor( private Route: ActivatedRoute,
                public productoService: ProductosService,
                public pagina: InfoPaginaService) { }

  ngOnInit() {

    this.Route.params
        .subscribe( parametros => {

         // console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDescripcion) => {
                this.id = parametros['id'];
                this.producto = producto;

              });
        });
  }

}
