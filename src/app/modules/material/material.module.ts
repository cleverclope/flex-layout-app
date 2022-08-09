import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';

const materialComponents = [
  CommonModule,
  MatIconModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatBadgeModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatPaginatorModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatDatepickerModule,
  MatStepperModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatIconModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  LayoutModule,
  MatProgressBarModule,
  MatSliderModule,
  MatAutocompleteModule
]

@NgModule({
  imports: [
    CommonModule,
    materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
