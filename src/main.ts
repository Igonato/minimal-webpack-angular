// polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// App Component
@Component({
    selector: 'app-root',
    template: `
        <h1>{{ message }}</h1>
    `,
})
class AppComponent {
    message = 'Hello world!';
}

// App Module
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
