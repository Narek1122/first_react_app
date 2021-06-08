import { useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function SignUpPage(){
    let history = useHistory();
    let dat = {
        name:'',
        email:'',
        password:''
    }

    function signup(){
        axios.post('http://narek.test/api/signup',dat)
            .then((res) => {
                //dispatch(editTest(res.data))
                console.log(res.data)
                history.push("/login");

            })
    }

    return(
        <div className='container'>
            <h1>Signup</h1>
            <div className='form-group'>
                <div>
                    <label htmlFor="">name</label>
                    <input type="text" className='form-control' onChange={(e)=>{
                        dat.name = e.target.value
                    }}/>
                </div>
                <div>
                    <label htmlFor="">email</label>
                    <input type="text" className='form-control' onChange={(e)=>{
                        dat.email = e.target.value
                    }}/>
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="text" className='form-control' onChange={(e)=>{
                        dat.password = e.target.value
                    }}/>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={signup}>SignUp</button>
                </div>
            </div>
        </div>
    )
}