import { AbstractControl, ValidatorFn } from "@angular/forms";


export function ForbiddenNameValidator(forbiddenNameExp : RegExp) : ValidatorFn{

    return ( control : AbstractControl) : {[key : string] : boolean} | null => {
        //const forbidden = /admin/.test(control.value)
        if(forbiddenNameExp.test(control.value)){
            return {'forbiddenName' : true}
        }
        return null;
    }
}