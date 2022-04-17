import Student from "./student.js";

export default class ControllerStudent{
    constructor(){
        this.lista = [];
        this.contor = localStorage.getItem('studentContor');
        this.load();
    }

    load(){
        let i = 1;
        let aux = 1;

        while(aux <=this.contor){
            
            let obj = JSON.parse(localStorage.getItem(i+'S'));

            if(obj){
                this.lista.push(new Student(obj.id, obj.firstName, obj.lastName, obj.email, obj.pass));
            }

            i++;
            aux++;
        }
    }

    create(firstName, lastName, email, pass){
        let id = parseInt(this.contor)+1;
        let nou = new Student(id+'S',firstName,lastName,email,pass);
        localStorage.setItem(id+'S', JSON.stringify(nou));
        localStorage.setItem('studentContor',id);

        this.load();
    }

    updateFirstName(id,firstName){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.firstName = firstName;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Studentul nu exista in baza de date!');
        }

        this.load();
    }

    updateLastName(id, lastName){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.lastName = lastName;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Studentul nu exista in baza de date!');
        }
        this.load();
    }

    updateEmail(id,email){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.email = email;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Studentul nu exista in baza de date!');
        }
        this.load();
    }

    updatePass(id,pass){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.pass = pass;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Studentul nu exista in baza de date!');
        }

        this.load();
    }

    delete(id){
        if(localStorage.getItem(id)){
            localStorage.removeItem(id);
        }else{
            console.log('Studentul nu exista in baza de date!');
        }
        this.contor = localStorage.getItem('courseContor');
        this.load();
    }
}