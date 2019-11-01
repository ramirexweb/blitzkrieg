import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VendedorProductosItemComponent } from './vendedor-productos-item/vendedor-productos-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendedor-productos',
  templateUrl: './vendedor-productos.component.html',
  styleUrls: ['./vendedor-productos.component.css']
})
export class VendedorProductosComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public addProduct() {
    console.log('addProducto');
    const dialogRef = this.dialog.open(VendedorProductosItemComponent, {
      disableClose: false,
      autoFocus: true,
      width: '80%',
      data: {
        id: this.route.snapshot.params.id
      }
    });

    dialogRef.afterClosed()
      .subscribe((data: any) => {
        console.log(data);
      }, err => console.log(err));
  }

}
