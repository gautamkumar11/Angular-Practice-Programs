import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BloglistComponent],
  declarations: [
    BloglistComponent
  ]
})
export class AppRoutingModule { }
