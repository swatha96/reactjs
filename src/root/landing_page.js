import React, { useState } from "react";

export function LandingPage() {

    const [file, setFile] = useState();

    const clickButton = (e) => {
        console.log(e);
        // if(status===true){
        //     console.log("true");
        //     setStatus(false);
        // }else{
        //     console.log("false");
        //     setStatus(true);
        // }  

    }

    function handleChange(event) {
        console.log(event);
        setFile(event.target.files[0]);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(file.type);
        


        // console.log(file);
    }
    return (

        // <div style={{textAlign:"center"}}>
        //     {status?<p style={{width:"200px", height:"70px" }}> You Have Clicked the Button</p>
        //     :<button style={{width:"200px", backgroundColor:"blue", height:"70px", color:"yellow"}}  onClick={clickButton}><h2>Click</h2></button>}
        // </div>

        <form onSubmit={handleSubmit}>
            <div style={{ textAlign: "center" }}>
                <h2>Upload File Here</h2>
                <br />
                <input type="file" onChange={(e) => handleChange(e)} />
                {file ? <button style={{ width: "200px", backgroundColor: "green", height: "70px", color: "white",borderRadius:"5px" }} type="submit"><h2>Submit</h2></button> : <></>}
            </div>
        </form>
    );
}
