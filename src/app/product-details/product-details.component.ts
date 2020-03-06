import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
  })

  export class ProductDetails implements OnInit {
    id: number;
    private sub: any;
    public array: any = [];

    constructor(private route: ActivatedRoute,
      private configService: ConfigService,) {
  

  }


    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; 
        console.log(this.id);
 
     });
     this.getProductId(this.id);

    }
    getProductId(id): void {
      console.log(id);
      this.configService.getDataId(id).subscribe(productId => {
        console.log(productId);
        this.array = productId
      })
    }
  }