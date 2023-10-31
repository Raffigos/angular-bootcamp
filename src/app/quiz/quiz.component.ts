import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  ngOnInit(): void {
    this.data.getQuizQuestions().subscribe((quiz) => {
      this.quiz = quiz;
    });
  }
  quiz: Quiz[] | any;
  score: number | null = null;
  rank: number | null = null;

  constructor(private data: DataService) {}
  submitQuiz() {
    this.score = 0;
    for (let i = 0; i < this.quiz.length; i++) {
      const answer = this.quiz[i].answer;
      const userAnswer = (<HTMLInputElement>(
        document.querySelector(`input[name="${this.quiz[i].id}"]:checked`)
      )).value;
      if (answer === userAnswer) {
        this.score += 20;
      }
    }

    this.data.saveScore(this.score).subscribe((response) => {
      console.log('Score: ' + response);
    });

    this.data.getRank().subscribe((data: any) => {
      this.score = data.score;
      this.rank = data.rank;
    });
    // Certificate
    if (this.score >= 80) {
      alert(
        'Congratulations! You scored more than 80!\nWe will contact you via phone number to receive your certificate.'
      );
      return;
    } else {
      alert('Your score is displayed in the ranking');
    }
  }
}
