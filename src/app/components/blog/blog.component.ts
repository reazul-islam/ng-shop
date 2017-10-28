import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public  blogs: any[];
    constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllPost().then( res => {
      this.blogs = res;
    });
  }

}
