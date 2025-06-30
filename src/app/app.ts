import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Card } from './card/card';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Card,Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
