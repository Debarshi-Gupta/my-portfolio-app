import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "B.Tech - Computer Science & Engineering",
      duration: "2022",
      subtitle: "Future Institute of Engineering and Management",
      content: "Completed my B.Tech with a CGPA of 9.18",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2018",
      subtitle: "ISC Board",
      content: "Completed my Higher Secondary(XII) from The Modern Academy with a grade of 85.5%",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary(10th)",
      duration: "2016",
      subtitle: "ICSE Board",
      content: "Completed my Secondary(X) from Ram Mohan Mission High School with a grade of 93.5%",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
