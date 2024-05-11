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
        role: "Full Stack Developer",
        company: "Cognizant",
        color: "#3781c2",
        companylogo: "https://asset.brandfetch.io/idzF9a2Y93/idWNdFtbD5.jpeg",
        date: "Aug 2022 – Present",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Designed and developed 30+ application components and features across 30+ short-term sprints and 10+ long-term deployments",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer Intern",
        company: "Cognizant",
        color: "#ff9102",
        companylogo: "https://asset.brandfetch.io/idzF9a2Y93/idWNdFtbD5.jpeg",
        date: "Feb 2022 – Jul 2022",
        desc: "The 5- Month internship training focused on full-stack web development and helped learn to work collaboratively in a team",
        },
        {
          role: "Computer Science",
          company: "Bachelor Of Technology",
          color: "#3f703f",
          companylogo: "https://uploads.sarvgyan.com/2015/08/Future-Institute-of-Engineering-and-Management-FIEM-Kolkata.jpg",
          date: "Jul 2018 – Jul 2022",
          desc: "I have completed my 4 year Graduation Degree in Computer Science Engineering from Future Institute of Engineering and Management with an overall CGPA of 9.18",
          // descBullets: [
          //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          // ]
        }
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
