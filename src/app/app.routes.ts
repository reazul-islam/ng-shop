import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogDetailsComponent} from './components/blog/blog-details/blog-details.component';
import {CategoryWiseBlogComponent} from './components/blog/category-wise-blog/category-wise-blog.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:id',
        component: BlogDetailsComponent
    },
    {
        path: 'blog/category/:id',
        component: BlogComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }

];