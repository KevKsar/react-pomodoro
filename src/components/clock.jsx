import React, {Component} from "react";

const Clock = () =>{
    


        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let h = today.getHours();
        if (h < 10) { h = "0" + h }
        let m = today.getMinutes();
        if (m < 10) { m = "0" + m }
        let s = today.getSeconds();
        if (s < 10) { s = "0" + s }

        const now =  h+":"+m ;
        

        return now
}


export default Clock;
