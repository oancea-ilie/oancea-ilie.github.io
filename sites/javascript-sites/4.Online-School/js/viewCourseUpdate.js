import ControllerCourse from "./controllerCourse.js";
import ViewSingIn from "./viewSingIn.js";
import ViewCourseDetails from "./viewCourseDetails.js";
import ViewHome from "./viewHome.js";


export default class ViewCourseUpdate{
    constructor(name,courseName){
        this.courseName = courseName;
        this.name = name;
        this.body = document.querySelector("body");

        this.setHeader();
        this.setMain();

        this.brand = document.querySelector(".brand");
        this.brand.addEventListener('click',this.handleBrand);

        this.logOutButon = document.querySelector(".home-logout-buton");
        this.logOutButon.addEventListener('click',this.handleLogOut);

        this.validationErors = document.querySelector('.course-create-errors');
        this.validationErors.style.display = 'none';

        this.titleEror = document.querySelector('.eror-title');
        this.titleEror.style.display = 'none';

        this.descriptionEror = document.querySelector('.eror-description');
        this.descriptionEror.style.display = 'none';

        this.timeEror = document.querySelector('.eror-time');
        this.timeEror.style.display = 'none';

        this.materialsEror = document.querySelector('.eror-materials');
        this.materialsEror.style.display = 'none';

        this.title = document.querySelector(".course-title");
        this.description = document.querySelector('.course-description');
        this.time = document.querySelector('.course-time');
        this.materials = document.querySelector('.course-materials');

        this.updateButon = document.querySelector('.create-course');
        this.cancelButon = document.querySelector('.cancel-course');


        this.cancelButon.addEventListener("click",this.handleCancel);
        this.updateButon.addEventListener('click', this.handleUpdate);

        this.cCourse = new ControllerCourse();
        this.setDetails();

    }

    setHeader=()=>{
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

    setMain=()=>{
        this.body.innerHTML += 
        `
        <main class="course-create-main">
        <h1>Update Course</h1>

        <section class="course-create-errors">
            <p>Validation Errors</p>
            <ul>
                <li class="eror-title"></li>
                <li class="eror-description"></li>
                <li class="eror-time"></li>
                <li class="eror-materials"></li>
            </ul>
        </section>

        <section class="course-create-grid">

            <section class="course-create-details">
                <p>Course Title</p>
                <input type="text" class="course-title">

                <h5>By ${this.name}</h5>

                <p>Course Description</p>
                <textarea cols="30" rows="10" class="course-description"></textarea>
            </section>

            <section class="course-create-time-materials">
                <p>Estimated Time</p>
                <input type="text" class="course-time">
                <p>Materials Needed</p>
                <textarea cols="30" rows="10" class="course-materials"></textarea>
            </section>

            <section class="course-create-buttons">  
                <a href="#" class="create-course">Update Course</a>
                <a href="#" class="cancel-course">Cancel</a>
            </section>
         </section>
        </main>
        `;
    }

    setDetails=()=>{
        this.cCourse.lista.forEach((e)=>{
            if(e.name == this.courseName){
                this.title.value = e.name;
                this.description.value = e.description;
                this.time.value = e.time;
                this.materials.value = e.materials;
            }
        });

    }

    erorCeck=()=>{
        let oke = 0;
        if(this.title.value == ''){
            oke = 1;

            this.validationErors.style.display = 'block';
            this.titleEror.style.display = 'block';
            this.titleEror.textContent = 'Emptly title name!';
        }else{
            this.titleEror.style.display = 'none';
        }

        if(this.description.value == ''){
            oke = 1;

            this.validationErors.style.display = 'block';

            this.descriptionEror.style.display = 'block';
            this.descriptionEror.textContent = 'Emptly description!';
        }else{
            this.descriptionEror.style.display = 'none';
        }

        if(this.time.value == ''){
            oke = 1;
            
            this.validationErors.style.display = 'block';

            this.timeEror.style.display = 'block';
            this.timeEror.textContent = 'Emptly estimated time!';
        }else{
            this.timeEror.style.display = 'none';
        }

        if(this.materials.value == ''){
            oke = 1;

            this.validationErors.style.display = 'block';

            this.materialsEror.style.display = 'block';
            this.materialsEror.textContent = 'Emptly materials!';
        }else{
            this.materialsEror.style.display = 'none';
        }


        return oke;

    }

    handleBrand=()=>{
        let nou = new ViewHome(this.name);
    }

    handleUpdate=()=>{
        let ok = this.erorCeck();

        if(ok == 0){
            this.cCourse.lista.forEach((e)=>{
                if(e.name == this.courseName){
    
                    this.cCourse.updateName(e.id,this.title.value);
                    this.cCourse.updateDescription(e.id,this.description.value);
                    this.cCourse.updateTime(e.id,this.time.value);
                    this.cCourse.updateMaterials(e.id,this.materials.value);
    
                    this.courseName = this.title.value;

                    let nou = new ViewCourseDetails(this.name, this.courseName);
                }
            });
        }
    }

    handleCancel=()=>{
        let nou = new ViewCourseDetails(this.name, this.courseName);
    }

    handleLogOut=()=>{
        let nou = new ViewSingIn();
    }
}