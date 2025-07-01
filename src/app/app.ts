import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Card } from './card/card';
import { Experience } from './experience/experience';
import { Aboutme } from './aboutme/aboutme';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,Card,Experience,Aboutme,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}