import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "Java",
        fontAwesomeClassname: "fa fa-code"
      },
      {
        skillName: "Spring",
        fontAwesomeClassname: "fas fa-leaf"
      },
      {
        skillName: "HTML5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "CSS3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "Angular",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "SQL-Database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "AWS",
        fontAwesomeClassname: "fa fa-cloud"
      }
      
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
