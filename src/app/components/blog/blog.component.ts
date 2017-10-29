import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public  blogs: any[];
  public  categories: any[];
    p: number;
    constructor(private blogService: BlogService, private route: ActivatedRoute) {
        this.p = 1;
    }

  ngOnInit() {

      this.route.paramMap
          .switchMap((params: ParamMap) => this.blogService.getAllPost(+params.get('id')))
          .subscribe(respone => {
              this.blogs = respone;
              console.log(respone);
          });
    /*this.blogService.getAllPost().then( res => {
      this.blogs = res;
        console.log(res);
    });*/
    this.blogService.categories().then( res => {
      this.categories = res;
    });
  }
    pageChanged($event) {

    }

}
