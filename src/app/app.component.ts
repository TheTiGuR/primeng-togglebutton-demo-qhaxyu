import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  show: boolean = false;
  sections: [] = [];
  test: boolean = false;

  trainingCourse: {} = {};

  constructor() {
    this.trainingCourse.title = "A course";
  }

  // Toggle button function
  showButton() {
    this.show = true;
  }

  // Cancel button function
  cancelButton() {
    this.show = false;
    this.test = false;
  }

  handleChange(e) {
    this.show = e.checked;
  }
  // Show / Hide adding section form
  showHide(e) {
    var isChecked = e.checked;
    if (isChecked === false) {
      this.showButton();
    } else {
      this.cancelButton();
    }
  }
}
