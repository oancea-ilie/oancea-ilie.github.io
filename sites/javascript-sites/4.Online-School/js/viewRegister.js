import ControllerStudent from "./controllerStudent.js";
import ViewSingIn from "./viewSingIn.js";


export default class ViewRegister{
    constructor(){
        this.body = document.querySelector('body');
        this.setHeader();
        this.setMain();

        this.brand = document.querySelector(".brand");
        this.brand.addEventListener('click',this.handleBrand);

        this.erors = document.querySelector(".erors");
        this.firstNameEror = document.querySelector('.eror-firstName');
        this.firstNameEror.style.display = 'none';

        this.lastNameEror = document.querySelector('.eror-lastName');
        this.lastNameEror.style.display = 'none';

        this.emailEror = document.querySelector('.eror-email');
        this.emailEror.style.display = 'none';

        this.passEror = document.querySelector('.eror-pass');
        this.passEror.style.display = 'none';

        this.success = document.querySelector('.success');

        this.firstName = document.querySelector('.signup-first-name');
        this.lastName = document.querySelector('.signup-last-name');
        this.email = document.querySelector('.signup-email');
        this.pass = document.querySelector('.signup-password');

        this.signUpButon = document.querySelector('.signup-singup');
        this.logInButon = document.querySelector('.signup-singin');

        this.signUpButon.addEventListener('click',this.handleRegister);
        this.logInButon.addEventListener('click',this.handleLogIn);
    }

    setHeader=()=>{
        this.body.innerHTML = '';
        this.body.innerHTML +=
        `
        <header>
            <a href="#" class="brand">Courses</a>
        </header>
        `;
    }

    setMain=()=>{
        this.body.innerHTML +=
         `
        <main class="signup-main">
            <h1>Sign Up</h1>
            <section class="erors">
                <p class="success"></p>
                <p class="eror-firstName"></p>
                <p class="eror-lastName"></p>
                <p class="eror-email"></p>
                <p class="eror-pass"></p>
            </section>

            <p>First Name:</p>
            <input type="text" class="signup-first-name">
            <p>Last Name:</p>
            <input type="text" class="signup-last-name">
            <p>Email Address:</p>
            <input type="text" class="signup-email">
            <p>Password:</p>
            <input type="password" class="signup-password">
            <section class="signup-buttons">
                <a href="#" class="signup-singup">Sing Up</a>
                <a href="#" class="signup-singin">Log In</a>
            </section>
        </main>
         `;
    }

    handleBrand=()=>{
        let nou = new ViewSingIn();
    }

    erorCheck=()=>{
        let oke = 0;
        if(this.firstName.value == ''){
            oke = 1;

            this.erors.style.display = 'block';
            this.firstNameEror.style.display = 'block';
            this.firstNameEror.textContent = 'Emptly first name!';
        }else{
            this.firstNameEror.style.display = 'none';
        }

        if(this.lastName.value == ''){
            oke = 1;
            this.erors.style.display = 'block';
            this.lastNameEror.style.display = 'block';
            this.lastNameEror.textContent = 'Emptly last name!';
        }else{
            this.lastNameEror.style.display = 'none';
        }

        if(this.email.value == ''){
            oke = 1;
            this.erors.style.display = 'block';
            this.emailEror.style.display = 'block';
            this.emailEror.textContent = 'Emptly email!';
        }else{
            this.emailEror.style.display = 'none';
        }

        if(this.pass.value == ''){
            oke = 1;
            this.erors.style.display = 'block';
            this.passEror.style.display = 'block';
            this.passEror.textContent = 'Emptly password!';
        }else{
            this.passEror.style.display = 'none';
        }


        return oke;
    }

    handleRegister =() =>{

        let oke = this.erorCheck();

        if(oke ==0){
            let nou = new ControllerStudent();
            nou.create(this.firstName.value,this.lastName.value,this.email.value,this.pass.value);

            console.log(this.success);
            this.success.textContent = 'Registration complete!';
            this.erors.style.display = 'block';
            this.success.style.color = 'green';

            this.firstName.value = '';
            this.lastName.value = '';
            this.email.value = '';
            this.pass.value = '';

            setTimeout(this.handleLogIn,3000);
        }
    }

    handleLogIn=()=>{
        let nou = new ViewSingIn();

    }
}