import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['about.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
    @Input() topic: string;
}