
export default class Course{
    constructor(id, name, description, time, materials){
        this.id = id;
        this.name = name;
        this.description = description;
        this.time = time;
        this.materials = materials;
    }

    toCard(){
        let t = 
        `
        <a class="home-card">
            <p class="home-course">Course</p>
            <h3 class="courseName">${this.name}</h3>
        </a>
        `

        return t;
    }

}