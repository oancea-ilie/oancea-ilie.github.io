import ControllerCourse from "./controllerCourse.js";
import ViewCourseUpdate from "./viewCourseUpdate.js";
import ViewHome from "./viewHome.js";
import ViewSingIn from "./viewSingIn.js";


export default class ViewCourseDetails{
    constructor(name,courseName){

        this.courseName = courseName;
        this.name = name;
        this.body = document.querySelector('body');
        this.setHead();
        this.setCourseActions();
        this.setMain();

        this.brand = document.querySelector(".brand");
        this.brand.addEventListener('click',this.handleBrand);
        

        this.LogOutButon = document.querySelector('.home-logout-buton');
        this.LogOutButon.addEventListener('click', this.handleLogOut);

        this.cCourse = new ControllerCourse();

        this.UpdateButon = document.querySelector(".update-course");
        this.DeleteButon = document.querySelector(".delete-course");
        this.ReturnButon = document.querySelector(".return");

        this.UpdateButon.addEventListener('click', this.handleUpdate);
        this.DeleteButon.addEventListener("click",this.handleDelete);
        this.ReturnButon.addEventListener('click', this.handleReturn);

        this.title = document.querySelector(".title");
        this.description = document.querySelector(".description");
        this.time = document.querySelector(".time");
        this.materials = document.querySelector(".materials");
        this.by =document.querySelector('.by');

        this.setDetails();
    }
    
    setHead=()=>{
        this.body.innerHTML = '';
        this.body.innerHTML +=
        `
        <header>
            <a href="#" class="brand">Courses</a>
            <section class="logsection">
                <p>Hi, ${this.name}</p>
                <a href="#" class="home-logout-buton">Log Out</a>
            </section>
        </header>
        `;

    }

    setCourseActions=()=>{
        this.body.innerHTML += 
         `
         <section class="course-actions">
            <a href="#" class="update-course">Update Course</a>
            <a href="#" class="delete-course">Delete Course</a>
            <a href="#" class="return">Return to List</a>
        </section>
         `
    }

    setMain=()=>{
        this.body.innerHTML += 
        `  
        <main class="course-details-main">
        <h1>Course Detail</h1>

        <section class="course-details">
            <h3>COURSE</h3>
            <hr>
            <h1 class="title">Build A Basic Boookcase</h1>

            <h5 class="by">By Joe Smith</h5>

            <p class="description">description</p>
        </section>

        <section class="course-time-materials">
            <h3>ESTIMATED TIME</h3>
            <hr>
            <p class="time">14 hours </p>
            <h3>MATERIALS NEEDED</h3>
            <hr>
            <ul>
                <li class="materials">materials</li>
            </ul>
        </section>
        </main>
        `;
    }

    setDetails=()=>{
        this.cCourse.lista.forEach((e)=>{
            if(e.name == this.courseName){
                this.title.textContent = e.name;
                this.description.textContent = e.description;
                this.time.textContent = e.time;
                this.materials.textContent = e.materials;
                this.by.textContent = `By ${this.name}`;
            }
        });
    }

    handleBrand=()=>{
        let nou = new ViewHome(this.name);
    }

    handleLogOut=()=>{
        let nou = new ViewSingIn();
    }

    handleUpdate=()=>{
        let nou = new ViewCourseUpdate(this.name,this.courseName);
    }

    handleDelete=()=>{
        this.cCourse.lista.forEach((e)=>{
            if(e.name == this.courseName){
                this.cCourse.delete(e.id);
            }
        })

        let nou = new ViewHome(this.name);
    }

    handleReturn=()=>{
        let nou = new ViewHome(this.name);
    }

}