import { Directive, ElementRef,OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[appLazyRender]'
})
export class LazyRender implements OnInit, OnDestroy {
  @Output() appInfiniteScroll = new EventEmitter<void>();
  @Input() scrollDisabled = false;
  private observer!: IntersectionObserver;
  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.scrollDisabled) {
          this.appInfiniteScroll.emit();
        }
      },
      { rootMargin: '150px' }
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
