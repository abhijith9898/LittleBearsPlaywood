
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { CarouselModule } from 'primeng/carousel';
import { HomepageComponent } from './homepage/homepage.component';
import { TermsAndPoliciesComponent } from './terms-and-policies/terms-and-policies.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CardModule } from 'primeng/card';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToyCatalogueComponent } from './toy-catalogue/toy-catalogue.component';
import { DataViewModule } from 'primeng/dataview';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http';
import { AddToysCatelogueComponent } from './add-toys-catelogue/add-toys-catelogue.component';
import { FileUploadModule } from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TermsAndPoliciesComponent,
    HowItWorksComponent,
    AboutUsComponent,
    ToyCatalogueComponent,
    AddToysCatelogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MegaMenuModule,
    CarouselModule,
    CardModule,
    DataViewModule,
    BrowserAnimationsModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TableModule,
    TooltipModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    ConfirmPopupModule

  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
