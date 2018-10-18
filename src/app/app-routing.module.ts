import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    /*{
        path: '',
        children: [
            { path: 'profile/:username', component: ProfileComponent },
            { path: 'topic/:topicname', component: TopicComponent },
            { path: 'search', component: SearchComponent },
            { path: '', component: HomeComponent, canActivate: [AuthGuardService] }
        ],
        component: BaseComponent
    },*/
    { path: '*', component: AppComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
