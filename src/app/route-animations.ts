import { trigger, transition, query, style, animate, animateChild, group } from '@angular/animations';

export const fader =
trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('0.3s ease-out', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('0.3s 0.3s ease-out', style({ opacity: 1 }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);
