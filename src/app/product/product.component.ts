import { Component, OnInit } from '@angular/core';
import { RedComponent } from "../red/red.component";
import { ProductService } from '../services/product.service';
import { GridOptions } from "ag-grid/main";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  gridOptions: GridOptions;
  columnDefs: any[]
  rowData: any[];
  public products: {};
  public pageTitle: String;
  public showImages: boolean;

  constructor(private _prodService: ProductService) {
    this.columnDefs = [
      { headerName: "Product", field: "productName" },
      { headerName: "Code", field: "productCode" },
      { headerName: "Available", field: "releaseDate" },
      { headerName: "Price", field: "price" },
      { headerName: "Rating", field: "starRating" }
    ];
  }
  public getProducts(): void {
    this._prodService.getProducts()
      .subscribe(products => this.rowData = products);
  }
  toggleImage(): void {
    if (this.showImages) {
      this.showImages = false;
    } else {
      this.showImages = true;
    }
  }
  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
  ngOnInit(): void {
    this.pageTitle = 'Products';
    this.getProducts();
  }
}
