import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InscriptionComponent } from "./inscription/inscription.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatCheckbox,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule
} from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ToastComponent } from "./toast/toast.component";
import { HomeComponent } from "./home/home.component";
import { LayoutModule } from "@angular/cdk/layout";
import { TypeCreditsComponent } from "./type-credits/type-credits.component";
import { HttpClientModule } from "@angular/common/http";
import { MatSliderModule } from "@angular/material/slider";
import { MatSelectModule } from "@angular/material/select";

import { CreditDetailsComponent } from "./credit-details/credit-details.component";
import { AppHighlightDirective } from "./directives/app-highlight.directive";
import { ComparateurComponent } from "./comparateur/comparateur.component";
import { ModalComponent } from "./modal/modal.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { TableComponent } from "./table/table.component";
import { MatRadioModule } from "@angular/material/radio";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DndDirective } from "./directives/dnd.directive";
import { AddDemandeComponent } from "./add-demande/add-demande.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

import { ConsulterEcheancierComponent } from "./consulter-echeancier/consulter-echeancier.component";
import { ConsulterDemandesComponent } from "./consulter-demandes/consulter-demandes.component";
import { DetailsDemandeComponent } from "./details-demande/details-demande.component";
import { ChartsModule as Ng2Charts } from "ng2-charts";
import { ChartsComponent } from "./charts/charts.component";
import { ConsulterDemandesDecideursComponent } from "./consulter-demandes-decideurs/consulter-demandes-decideurs.component";
import { CalculescoreComponent } from "./calculescore/calculescore.component";
import { MatStepperModule } from "@angular/material/stepper";
import { StepperComponent } from "./stepper/stepper.component";
import { ConsulterEcheanComponent } from "./consulter-echean/consulter-echean.component";

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    ToastComponent,
    HomeComponent,
    TypeCreditsComponent,
    AppHighlightDirective,
    CreditDetailsComponent,
    ComparateurComponent,
    ModalComponent,
    AddUserComponent,
    UpdateUserComponent,
    TableComponent,
    DashboardComponent,
    DndDirective,
    AddDemandeComponent,
    AdminDashboardComponent,
    ConsulterEcheancierComponent,
    ConsulterDemandesComponent,
    DetailsDemandeComponent,
    ChartsComponent,
    ConsulterDemandesDecideursComponent,
    CalculescoreComponent,
    StepperComponent,
    ConsulterEcheanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatMenuModule,
    MatStepperModule,
    Ng2Charts
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    InscriptionComponent,
    ToastComponent,
    ComparateurComponent,
    ModalComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddDemandeComponent,
    DetailsDemandeComponent,
    CalculescoreComponent,
    ConsulterEcheanComponent
  ]
})
export class AppModule {}
