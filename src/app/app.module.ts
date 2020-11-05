import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routing';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatFormFieldModule,
  MatCardModule,
  MatRadioModule, MatNativeDateModule
} from '@angular/material';
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  entryComponents: [ DialogOverviewExampleDialog ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
