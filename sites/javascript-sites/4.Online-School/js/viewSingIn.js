import ControllerStudent from "./controllerStudent.js";
import ViewHome from "./viewHome.js";
import ViewRegister from "./viewRegister.js";

export default class ViewSingIn{
    constructor(){
        this.body = document.querySelector('body');
        this.setHeader();
        this.setMain();

        this.brand = document.querySelector(".brand");
        this.brand.addEventListener('click',this.handleBrand);
        
        this.singinEmail = document.querySelector('.singin-email');
        this.singinPass = document.querySelector('.singin-password');
        this.singinRegisterButon = document.querySelector('.singin-singup');
        this.singinLogButon = document.querySelector('.singin-singin');
        this.cStudent = new ControllerStudent();

        this.singinLogButon.addEventListener('click', this.handleLogin);
        this.singinRegisterButon.addEventListener('click',this.handleRegister);
        this.eror = document.querySelector('.eror');

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
        <main class="signin-main">
            <h1>Log In</h1>
            <p class="eror"></p>
            <p>Email Address:</p>
            <input type="text" class="singin-email">
            <p>Password:</p>
            <input type="password" class="singin-password">
            <section class="signin-buttons">
                <a href="#" class="singin-singin">Log In</a>
                <a href="#" class="singin-singup">Sign Up</a>
            </section>
        </main>
        `;
    }

    handleBrand=()=>{
        let nou = new ViewSingIn();
    }

    handleLogin=()=>{
        this.cStudent.lista.forEach((e)=>{
            if(this.singinEmail.value == e.email && this.singinPass.value == e.pass){
                let name = `${e.firstName} ${e.lastName}`;
                let nou = new ViewHome(name);
            }else{
                this.eror.textContent = 'Wrong name or password!';
                this.eror.style.color = 'red';
                this.eror.style.textAlign = 'center';
            }
        });
    }

    handleRegister=()=>{
        let nou = new ViewRegister();
    }
}