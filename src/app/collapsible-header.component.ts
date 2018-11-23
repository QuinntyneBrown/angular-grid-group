import { Component, HostListener, Output, EventEmitter } from "@angular/core";

@Component({
  templateUrl: "./collapsible-header.component.html",
  styleUrls: ["./collapsible-header.component.css"],
  selector: "app-collapsible-header",
  host: {
    class: 'mat-typography'
  }
})
export class CollapsibleHeaderComponent { 
  public isOpen:boolean = false;

  @HostListener('click', ['$event'])
  onClick() { 
    this.isOpen = !this.isOpen 
    this.stateChange.emit({isOpen: this.isOpen});
  }

  @Output()
  public stateChange: EventEmitter<any> = new EventEmitter();

  public get icon() { return this.isOpen ? "keyboard_arrow_up":"keyboard_arrow_down"; }
}
