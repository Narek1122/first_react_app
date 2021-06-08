import react from 'react'
import {useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";





function Test() {

    let history = useHistory();
    let c = '/test/88'
    let v = 45

    function a(){
        //console.log(id.id )
       // v++
        history.push(`/test/${v}`)

            console.log(444)


    }

    const  id  = useParams()



    return (

        <div>
            <button onClick={a}>Ok</button>
        </div>

    );

}

export default Test;