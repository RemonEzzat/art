import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sheard/navbar/navbar.component';
import { FooterComponent } from './sheard/footer/footer.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserInterceptorInterceptor } from './services/user-interceptor.interceptor';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { SingleArticalComponent } from './component/single-artical/single-artical.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SingleArticalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass: UserInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
