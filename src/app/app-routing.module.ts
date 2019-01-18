import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '', component: BooksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
