import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Software Engineer Intern",
        company: "Cognizant",
        color: "#ff9102",
        companylogo: "https://asset.brandfetch.io/idzF9a2Y93/idWNdFtbD5.jpeg",
        date: "Feb, 2022 – Jul, 2022",
        desc: "The 5- Month internship training focused on full-stack web development and helped learn to work collaboratively in a team",
      },
      {
        role: "Full Stack Developer",
        company: "Cognizant",
        color: "#3781c2",
        companylogo: "https://asset.brandfetch.io/idzF9a2Y93/idWNdFtbD5.jpeg",
        date: "Aug, 2022 – Nov, 2024",
        desc: "Designed and developed 30+ application components and features across 30+ short-term sprints and 10+ long-term deployments",
      },
      {
        role: "Software Development Engineer",
        company: "Juspay",
        color: "#3781c2",
        companylogo: "https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/juspay_9284_logo_1608797419_2siny.png",
        date: "Nov, 2022 – Present",
        desc: "Developed and optimized Hyperswitch, Juspay's payment orchestration platform, enhancing transaction processing speed"
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
