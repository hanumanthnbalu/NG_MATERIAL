import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: 'article',
    component: ArticleComponent,
    children: [
      {
        path: 'article/:type',
        component: ArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
