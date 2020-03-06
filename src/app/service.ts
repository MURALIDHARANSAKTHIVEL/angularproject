import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',

})
export class ConfigService {
    productUrl = 'http://nstn-lt-066:3001/api/products';
    productUrlId = 'http://nstn-lt-066:3001/api/products/';
    constructor(private http: HttpClient) { } 

    getData(): Observable<Product> {
        return this.http.get<Product>(this.productUrl);
    }

    getDataId(id): Observable<Product> {
        const paramId = id;
        console.log(paramId);
        return this.http.get<Product>(this.productUrlId + paramId)
    }
}

interface Product {
    id: number;
    name: string;
}