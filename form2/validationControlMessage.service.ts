export class ValidationService {
  static getValidatorErrorMessage(code: string) {
    let config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
    };

    return config[code];
  }

  /**
   * [emailValidator :RFC 2822 compliant regex]
   * @param {[type]} control [control value from template]
   */
   static emailValidator(control) {
     if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
       return null;
     } else {
       return { 'invalidEmailAddress': true };
     }
   }

  /**
   * [passwordValidator :{6,100}- Assert password is between 6 and 100 characters
                         (?=.*[0-9])- Assert a string has at least one number]
   * @param {[type]} control [description]
   */
   static passwordValidator(control) {
     if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
       return null;
     } else {
       return { 'invalidPassword': true };
     }
   }
 }