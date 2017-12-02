import { Component } from "@angular/core";

@Component({
    selector: 'app-red-component',
    templateUrl: './red.component.html'
})
export class RedComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}