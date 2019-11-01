import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { VendedorProductosComponent } from '../vendedor-productos.component';

@Component({
  selector: 'app-vendedor-productos-item',
  templateUrl: './vendedor-productos-item.component.html',
  styleUrls: ['./vendedor-productos-item.component.css']
})
export class VendedorProductosItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VendedorProductosComponent>,
    @Inject ( MAT_DIALOG_DATA) public dataImport: any
  ) { }

  ngOnInit() {

    console.log('dataImport: ', this.dataImport);
  }

}
