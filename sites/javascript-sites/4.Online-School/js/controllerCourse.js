import Course from "./course.js";

export default class ControllerCourse{
    constructor(){
        this.lista = [];
        this.contor = localStorage.getItem('courseContor');
        this.load();
    }

    load(){
        let i = 1;
        let aux = 1;

        while(aux<=this.contor){
            
            let obj = JSON.parse(localStorage.getItem(i+'C'));

            if(obj){
                this.lista.push(new Course(obj.id, obj.name, obj.description,obj.time, obj.materials));
            }

            i++;
            aux++;
        }
    }

    create(name,description,time,materials){
        let id = parseInt(localStorage.getItem('courseContor'))+1;

        let nou = new Course(id+'C',name,description,time,materials);

        localStorage.setItem(id+'C', JSON.stringify(nou));

        localStorage.setItem('courseContor',id);

        this.load();
    }

    updateName(id,name){

        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.name = name;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Cursul nu exista in baza de date!');
        }
        this.load();
    }

    updateDescription(id,description){

        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.description = description;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Cursul nu exista in baza de date!');
        }
        this.load();
    }

    updateTime(id,time){

        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.time = time;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Cursul nu exista in baza de date!');
        }
        this.load();
    }

    updateMaterials(id,materials){

        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.materials = materials;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Cursul nu exista in baza de date!');
        }
        this.load();
    }

    delete(id){
        if(localStorage.getItem(id)){
            localStorage.removeItem(id);

        }else{
            console.log('Cursul nu exista in baza de date!');
        }

        this.contor = localStorage.getItem('courseContor');
        this.load();
        
    }
    

}