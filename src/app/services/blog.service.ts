import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Blog} from "../models/blog";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }
  getAllPost(): Promise<Blog[]> {
    return this.http.get('http://pbapi.ackosoft.co.uk/api/blogs')
        .toPromise()
        .then(response => response['data']['data'])
        .catch(this.handleError);

  }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
