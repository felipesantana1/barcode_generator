import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barcode';
  bar_color: Array<string> = [];
  colors: Array<string> = ["AliceBlue","Chocolate","Aqua","BlueViolet","ForestGreen","Gold","LightBlue","Orchid","Purple"];

  fill_barcode(){
    
    for(let i = 0; i < this.colors.length; i++){
      let index: number = Math.floor(Math.random()*this.colors.length);
      this.bar_color.push(this.colors[index]);
    }
  }

  ngOnInit(){
    this.fill_barcode();
  }
  
}
