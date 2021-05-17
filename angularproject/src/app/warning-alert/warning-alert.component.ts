import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>This is warning, You are in Danger !</p>
    `,
    styles : [`
        p{
            padding : 20px;
            background-color : red;
        }

    `]
        

})
export class WarningAlertComponent{


}