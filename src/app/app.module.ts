import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'
import {NbLayoutModule , NbThemeModule , NbInputModule,NbCardModule, NbButtonModule,NbTabsetModule,NbActionsModule,NbButtonGroupModule,NbIconModule, NbFormFieldModule,} from "@nebular/theme";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {AppRoutingModule} from "./app-routing.module";
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MovieComponent } from './movie/movie.component';
import { DataServices } from './services/data.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarkComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'movieTheme' }),
    NbLayoutModule,
    AppRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbTabsetModule,
    FormsModule,
    NbActionsModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PageModule { }
