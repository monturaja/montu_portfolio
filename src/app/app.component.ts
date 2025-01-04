import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Montu Raja';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Montu Raja | MERN Stack Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend MERN Stack Development , software, developer' },
      { name: 'description', content: 'As a mern engineer with expertise in both MEAN and MERN stacks' },
    ]);
    
    AOS.init();


  }
}
