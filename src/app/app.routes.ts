import { Routes } from '@angular/router';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { RapportComponent } from './presentation/rapport/rapport.component';
import { EleveComponent } from './presentation/eleve/eleve.component';
import { TeacherComponent } from './presentation/teacher/teacher.component';
import { UserComponent } from './presentation/user/user.component';

export const routes: Routes = [
    {path:'', component: DashboardComponent},
    {path:'rapport', component: RapportComponent},
    {path:'eleve', component: EleveComponent},
    {path:'teacher', component: TeacherComponent},
    {path:'user', component: UserComponent},
];
