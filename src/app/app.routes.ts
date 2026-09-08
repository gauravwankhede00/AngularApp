import { Routes } from '@angular/router';
import { Posts } from '../component/posts/posts';
import { PipeExamples } from '../component/pipe-examples/pipe-examples';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', loadComponent: () => Posts },
     { path: 'pipe', loadComponent: () => PipeExamples },
];
