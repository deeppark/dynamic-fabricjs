import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FabricTemplateComponent } from './fabric-template/fabric-template.component';
import { TemplateService } from './services/template.service';
import { LoadTemplateComponent } from './load-template/load-template.component';


@NgModule({
  declarations: [AppComponent, FabricTemplateComponent, LoadTemplateComponent],
  imports: [BrowserModule],
  providers: [TemplateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
