import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ContentToolsComponent } from './content-tools/content-tools.component';
import { CharactersAndStoryComponent } from './characters-and-story/characters-and-story.component';
import { LevelingSettingsComponent } from './characters-and-story/leveling-settings/leveling-settings.component';
import { LevelingSpeedModeComponent } from './characters-and-story/leveling-speed-mode/leveling-speed-mode.component';
import { LevelingTableComponent } from './characters-and-story/leveling-table/leveling-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blog/:id',
        component:  ArticleDetailComponent,
      },
      {
        path: 'blog/new',
        component:  ArticleDetailComponent,
      }
      ,
      {
        path: 'content-tools',
        component:  ContentToolsComponent,
      },
      {
        path: 'leveling-speed-mode',
        component:  LevelingSpeedModeComponent,
      },
      {
        path: 'leveling-settings',
        component:  LevelingSettingsComponent,
      },
      {
        path: 'leveling-table',
        component:  LevelingTableComponent,
      },
      { path: '', component: FaqComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
