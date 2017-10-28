import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Blog} from "../../../models/blog";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
    public blog: Object;
    constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap
          .switchMap((params: ParamMap) => this.blogService.postDetail(+params.get('id')))
          .subscribe(respone => {
              this.blog = respone;
              console.log(this.blog);
          });
  }

}
