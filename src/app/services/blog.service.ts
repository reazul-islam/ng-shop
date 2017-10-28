import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Blog} from '../models/blog';
import {BlogCategory} from '../models/blog-category';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BlogService {
    public url: any= 'http://pbapi.ackosoft.co.uk/api';
  constructor(private http: HttpClient) { }
  getAllPost(id ?: number): Promise<Blog[]> {
      let   params = new HttpParams();
      if (typeof id === 'number') {
          params = params.set('category', String(id));
      }
    return this.http.get(this.url + '/blogs',{
        params: params
    })
        .toPromise()
        .then(response => response['data']['data'])
        .catch(this.handleError);

  }
    postDetail(id: number): Promise<Blog> {
        return this.http.get(this.url + '/blogs/' + id + '/slug')
            .toPromise()
            .then(response => response['data'])
            .catch(this.handleError);
    }
    categoryWisePost(id: number): Promise<Blog[]> {
        return this.http.get(this.url + '/blogs?category=' + id)
            .toPromise()
            .then(response => response['data']['data'])
            .catch(this.handleError);
    }
    categories(): Promise<BlogCategory[]> {
        return this.http.get('http://localhost/lumen-jwt/public/api/blogCategories')
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
