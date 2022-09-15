import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
//import ContadorComponent from './contador/contador/contador.component';
import { heroeModule } from './heroe/heroe.module';


@NgModule({
  declarations: [
    AppComponent
    //ContadorComponent
  ],
  imports: [
    BrowserModule,
    heroeModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
