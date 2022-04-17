import ViewHome from "./viewHome.js";
import ViewSingIn from "./viewSingIn.js";
import controllerCourse from "./controllerCourse.js";
import ControllerCourse from "./controllerCourse.js";


export default class ViewCourseCreate{
    constructor(name){
        this.name = name;
        this.body = document.querySelector('body');

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



        this.courseTitle = document.querySelector(".course-title");
        this.courseDescription = document.querySelector(".course-description");
        this.courseTime = document.querySelector(".course-time");
        this.courseMaterials = document.querySelector('.course-materials');

        this.createButon = document.querySelector('.create-course');
        this.createButon.addEventListener('click',this.handleCreateCourse);

        this.cancelButon = document.querySelector('.cancel-course');
        this.cancelButon.addEventListener('click',this.handleCancel);
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
        <h1>Create Course</h1>

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

                <h5>By Joe Smith</h5>

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
                <a href="#" class="create-course">Create Course</a>
                <a href="#" class="cancel-course">Cancel</a>
            </section>
         </section>
        </main>
        `;
    }

    handleBrand=()=>{
        let nou = new ViewHome(this.name);
    }

    handleLogOut=()=>{
        let nou = new ViewSingIn();
    }

    erorCheck=()=>{
        let oke = 0;
        if(this.courseTitle.value == ''){
            oke = 1;

            this.validationErors.style.display = 'block';
            this.titleEror.style.display = 'block';
            this.titleEror.textContent = 'Emptly title name!';
        }else{
            this.titleEror.style.display = 'none';
        }

        if(this.courseDescription.value == ''){
            oke = 1;

            this.validationErors.style.display = 'block';

            this.descriptionEror.style.display = 'block';
            this.descriptionEror.textContent = 'Emptly description!';
        }else{
            this.descriptionEror.style.display = 'none';
        }

        if(this.courseTime.value == ''){
            oke = 1;
            
            this.validationErors.style.display = 'block';

            this.timeEror.style.display = 'block';
            this.timeEror.textContent = 'Emptly estimated time!';
        }else{
            this.timeEror.style.display = 'none';
        }

        if(this.courseMaterials.value == ''){
            oke = 1;

            this.validationErors.style.display = 'block';

            this.materialsEror.style.display = 'block';
            this.materialsEror.textContent = 'Emptly materials!';
        }else{
            this.materialsEror.style.display = 'none';
        }


        return oke;
    }
    
    handleCreateCourse=()=>{
        let ok = this.erorCheck();

        if(ok ==0){

            let nou = new ControllerCourse();

            nou.create(this.courseTitle.value, this.courseDescription.value,this.courseTime.value, this.courseMaterials.value);

            let home = new ViewHome(this.name);
        }
    }

    handleCancel=()=>{
        let nou = new ViewHome(this.name);
    }
}