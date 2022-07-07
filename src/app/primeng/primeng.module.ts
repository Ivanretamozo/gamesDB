import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';
import {ProgressSpinnerModule} from 'primeng/progressspinner';




@NgModule({
 exports:[
   ButtonModule,
   BrowserAnimationsModule,
   CardModule,
   CarouselModule,
   GalleriaModule,
   InputTextModule,
   MenubarModule,
   PaginatorModule,
   ProgressSpinnerModule,
 ]
})
export class PrimengModule { }
