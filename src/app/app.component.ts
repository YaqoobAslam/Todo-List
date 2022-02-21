import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any[] = [];
  addTask(item: string) {
    // console.warn(item);

    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
  }
  removeTask(id: number) {
    //console.warn(id);

    this.list = this.list.filter((item) => item.id !== id);
  }
}
