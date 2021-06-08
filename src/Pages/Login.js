import axios from "axios";
import {useHistory, Link} from "react-router-dom";

export default function LoginPage() {

    let history = useHistory();

    let dat = {
        email: '',
        password: ''
    }

    async function  login() {
        axios.post('http://narek.test/api/login', dat)
            .then((res) => {
                localStorage.setItem('token', res.data)
                history.push("/profile");
            })


    }

    return (
        <div>
            <div className={'container'}>
                <h1>Login</h1>
                <div className={'form-control'}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" className={'form-control'} onChange={(e) => {
                            dat.email = e.target.value
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="text" className={'form-control'} onChange={(e) => {
                            dat.password = e.target.value
                        }}/>
                    </div>
                    <div>
                        <button onClick={login} className={'btn btn-danger'}>Login</button>
                    </div>
                </div>
            </div>
            <Link to='/'>
                home
            </Link>
        </div>
    )
}