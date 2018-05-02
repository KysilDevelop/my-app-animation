import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { SquareComponent } from './components/square/square.component';
import { MenuComponent } from './components/menu/menu.component';
import { MasksComponent } from './components/masks/masks.component';
import { ChosenComponent } from './components/chosen/chosen.component';
import { AnimationService } from './services/animation.service';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import {ButtonsComponent} from './components/buttons/buttons.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LogotypeComponent,
    MenuComponent,
    SquareComponent,
    ChosenComponent,
    ButtonsComponent,
    TitleComponent,
    MasksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [AnimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
