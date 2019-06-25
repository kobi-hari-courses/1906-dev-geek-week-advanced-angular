import { AppMaterialModule } from './components/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/state/app.state';
import { CounterViewerComponent } from './components/counter-viewer/counter-viewer.component';
import { environment } from 'src/environments/environment';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CounterViewerComponent,
    TodoFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule, ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 50 })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
