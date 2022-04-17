import Enrollment from "./enrollment.js";


export default class ControllerEnrolment{
    constructor(){
        this.lista = [];
        this.contor = localStorage.getItem('enrollmentContor');
        this.load();
    }

    load(){
        let i = 1;
        let aux = 1;

        while(aux <=this.contor){
            
            let obj = JSON.parse(localStorage.getItem(i+'E'));

            if(obj){
                this.lista.push(new Enrollment(obj.id, obj.studentId, obj.courseId, obj.createdTime));
            }

            i++;
            aux++;
        }
    }

    create(studentId,courseId,createdTime){

        let id = parseInt(this.contor)+1;

        let nou = new Enrollment(id+'E',studentId,courseId,createdTime);

        localStorage.setItem(id+'E', JSON.stringify(nou));

        localStorage.setItem('enrollmentContor',id);

        this.load();
    }

    updateStudentId(id,courseId){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.studentId = studentId;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Studentul nu exista in baza de date!');
        }

        this.load();
    }

    updateCourseId(id,courseId){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.studentId = studentId;  
            localStorage.setItem(id, JSON.stringify(obj));
        }else{
            console.log('Studentul nu exista in baza de date!');
        }

        this.load();
    }

    updateTime(id,createdTime){
        let obj = localStorage.getItem(id);
        if(obj){
            obj = JSON.parse(obj);
            obj.studentId = studentId;  
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
            console.log('Inscrierea nu exista in baza de date!');
        }

        this.contor = localStorage.getItem('courseContor');
        this.load();
    }
    
}