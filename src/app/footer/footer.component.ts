import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public basicLink() {
    alert(
      'The baseline for a web developer. This course includes HTML and CSS.'
    );
    return false;
  }
  public beginnerLink() {
    alert(
      'The road of using programming languages. This course includes JavaScript and TypeScript.'
    );
    return false;
  }
  public intermediateLink() {
    alert(
      'The focus of preparing databases and implementing them. This course includes MySQL and PHP.'
    );
    return false;
  }
  public advancedLink() {
    alert(
      'Take your web development skills to the next level. This course includes Angular and React.'
    );
    return false;
  }
}
