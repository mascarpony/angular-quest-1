import {Component} from '@angular/core';
import {Hero} from "../interfaces/hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello Angular!';
  hero: Hero = {
    name: `Aleksandr Rylkov`,
    UPSAlink: `http://upsa.epam.com/workload/employeeView.do?employeeId=4060741400391115266`,
    details: {
      'Date of Birth': '18 03 1992',
      'Gender': 'Male',
      'English level': 'B1+',
      'EPAM status': 'Student',
      'Specialty': 'Frontend developer',
      'Programming language': 'Java Script',
      'Framework': 'React JS',
      'Project': 'Ebb'
    }
  };
}
