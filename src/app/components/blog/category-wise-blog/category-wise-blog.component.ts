import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-category-wise-blog',
  templateUrl: './category-wise-blog.component.html',
  styleUrls: ['./category-wise-blog.component.css']
})
export class CategoryWiseBlogComponent implements OnInit {

    public  blogs: any[];
    public  categories: any[];

    constructor(private blogService: BlogService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.blogService.categoryWisePost(+params.get('id')))
            .subscribe(respone => {
                this.blogs = respone;
                console.log(this.blogs);
            });
        this.blogService.categories().then( res => {
            this.categories = res;
        });
    }

}
