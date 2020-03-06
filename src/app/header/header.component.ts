import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public array: any = [];
  constructor(private http: HttpClient,
    private configService: ConfigService, private router: Router) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.configService.getData().subscribe(products => {
      console.log(products);
      this.array = products
    });
  }


  pageDetail(productKey) {
    console.log("working", productKey);
    this.router.navigate([ '/product-details' , productKey]);
  }
}
