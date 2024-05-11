import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "PASSIONATE AND DEDICATED FULL STACK DEVELOPER",
    skills: [
      "⚡ Proficient in Java & Spring Boot for Backend Development",
      "⚡ Experienced in crafting dynamic interfaces with Angular",
      "⚡ Skilled in SQL database design and optimization",
      "⚡ Collaborative team player delivering high-quality solutions",
      "⚡ Dedicated to continuous learning and participating in tech evolution"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
