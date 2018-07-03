import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { BlogService } from './services/blog.service';
import { AuthService } from './services/auth.service';
import { ContentToolsService } from './services/content-tools';
import { LevelingSettingsService } from './services/leveling-settings.service';
import { LevelingTableService } from './services/leveling-table.service';
import { Angular2TokenService } from 'angular2-token';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthComponent } from './auth/auth.component';

import { TokenInterceptor } from './auth/token.interceptor';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ContentToolsComponent } from './content-tools/content-tools.component';
import { DaterangepickerComponent } from './helpers/daterangepicker/daterangepicker.component';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { Daterangepicker } from 'ng2-daterangepicker';
import { CharactersAndStoryComponent } from './characters-and-story/characters-and-story.component';
import { LevelingSpeedModeComponent } from './characters-and-story/leveling-speed-mode/leveling-speed-mode.component';
import { LevelingSettingsComponent } from './characters-and-story/leveling-settings/leveling-settings.component';
import { LevelingTableComponent } from './characters-and-story/leveling-table/leveling-table.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    Daterangepicker
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    FaqComponent,
    BlogComponent,
    LoginComponent,
    ArticleDetailComponent,
    AuthComponent,
    ContentToolsComponent,
    DaterangepickerComponent,
    CharactersAndStoryComponent,
    LevelingSpeedModeComponent,
    LevelingSettingsComponent,
    LevelingTableComponent
  ],
  providers: [
    BlogService,
    AuthService,
    LevelingSettingsService,
    ContentToolsService,
    LevelingTableService,
    Angular2TokenService,
    DaterangepickerConfig,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
