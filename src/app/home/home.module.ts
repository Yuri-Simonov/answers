import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

const materialModules = [MatButtonModule];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FooterComponent, materialModules],
})
export class HomeModule {}
