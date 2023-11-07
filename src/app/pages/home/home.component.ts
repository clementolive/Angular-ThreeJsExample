import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from "three"; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild("canvas") private canvasRef!: ElementRef;

}
