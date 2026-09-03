import { Routes } from '@angular/router';
import { Posts } from '../component/posts/posts';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', loadComponent: () => Posts },
];
