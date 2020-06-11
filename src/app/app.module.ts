import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateDataComponent } from './components/create-data/create-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    DeleteDataComponent,
    UpdateDataComponent,
    ShowDataComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
