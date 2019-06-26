import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'

import {
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatGridListModule,
  } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TodosComponent } from './todos/todos.component';

const modules = [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    DragDropModule,
    MatGridListModule, LayoutModule];


@NgModule({
    imports: modules, 
    exports: modules
})
export class AppMaterialModule {

}