import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RankingsComponent } from './rankings/rankings.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { QuizComponent } from './quiz/quiz.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { Course4Component } from './course4/course4.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'course1', component: Course1Component },
  { path: 'course2', component: Course2Component },
  { path: 'course3', component: Course3Component },
  { path: 'course4', component: Course4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
