import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { RankingsComponent } from './rankings/rankings.component';
import { QuizComponent } from './quiz/quiz.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { Course4Component } from './course4/course4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    NewsComponent,
    FeedbackComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    SchedulesComponent,
    RankingsComponent,
    QuizComponent,
    Course1Component,
    Course2Component,
    Course3Component,
    Course4Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
