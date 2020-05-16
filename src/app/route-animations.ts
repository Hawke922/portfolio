import { trigger, transition, query, style, animate } from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [

        query(':enter',
        [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
        ],
    ),

    query(':leave',
        [
            style({ opacity: 1 }),
            animate('0.5s', style({ opacity: 0 }))
        ],
    ),

    query(':enter',
        [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
        ],
    )

    ])
]);
