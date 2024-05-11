import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/Debarshi-Gupta",
    linkedin: "https://www.linkedin.com/in/debarshi-gupta-9b242a210/",
    gmail: "debarshigupta47@gmail.com",
    facebook: "https://www.facebook.com/debarshi.gupta.56/"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
