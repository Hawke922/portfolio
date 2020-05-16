import { Component, OnInit } from '@angular/core';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  faFacebook = faFacebookSquare;
  faGithub = faGithubSquare;
  faEmail = faEnvelopeSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
