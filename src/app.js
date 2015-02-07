export class App{
    
    constructor(){
        
        this.heading = 'Aurelia Experiments';
        this.firstName = 'Sujesh';
        this.lastName = 'Arukil';
    }
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    welcome(){
        console.log(`Hello ${this.firstName}`);
    }

}