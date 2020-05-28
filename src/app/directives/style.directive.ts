import {Directive, ElementRef, Renderer2, HostListener, Input} from "@angular/core";
@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color : string = 'blue';
    @Input () fontWeight = 'normal';
    constructor(public elRef : ElementRef, public r: Renderer2){
        // elRef.nativeElement.style.color = 'pink'
        // this.r.setStyle(this.elRef.nativeElement, 'color', 'blue')
    }

    @HostListener('click', ['$event.target']) onClick(event: Event){
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.elRef.nativeElement, 'color', this.color)
    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.elRef.nativeElement, 'color', null)
    }
}