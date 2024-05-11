import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Backend Development",
        progressPercentage: "90%"
      },
      {
        Stack: "Frontend Development",
        progressPercentage: "80%"
      },
      {
        Stack: "Database Management",
        progressPercentage: "75%"
      },
      {
        Stack: "DevOps",
        progressPercentage: "80%"
      },
      {
        Stack: "Cloud Computing",
        progressPercentage: "60%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
