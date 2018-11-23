import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./grid-group.component.html",
  styleUrls: ["./grid-group.component.css"],
  selector: "app-grid-group"
})
export class GridGroupComponent { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }

  public isOpen:boolean = false;

  public onStateChanged($event) { this.isOpen = $event.isOpen; }
}
