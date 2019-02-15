import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VisitorGuard } from './guards/visitor.guard';

const routes: Routes = [
    { path: 'movies', component: MovieListComponent, canActivate: [VisitorGuard] },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
