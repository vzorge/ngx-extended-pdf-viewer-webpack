import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UpgradeModule} from '@angular/upgrade/static';
import {AppComponent} from './app-component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UpgradeModule,
        CommonModule,
        NgxExtendedPdfViewerModule,
    ],
    providers: [
    ]
})
export class AppModule {
    constructor() {
    }
    ngDoBootstrap() {
        //Empty, but function needs to be there for hybrid bootstrapping
    }
}

