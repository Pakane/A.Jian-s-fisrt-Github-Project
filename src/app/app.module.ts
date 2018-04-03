import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsComponent} from './stars/stars.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StockFromComponent} from './stock/stock-from/stock-from.component';
import {StockService} from './stock/stock.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StockFilterPipe} from './stock/stock-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {WebsocketService} from './header/websocket.service';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock', component: StockManageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock/:id', component: StockFromComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFromComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
