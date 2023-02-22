import axios from "axios";
import { router, useEffect, useState } from "../../../lib";

var connect = function(){
    const [acc, setAcc] = useState({});
    useEffect(function(){
        fetch('http://localhost:3000/users')
        .then(function(res){
            return res.json()
        })
        .then(function(acc){
            setAcc(acc)
        })
    }, [])
    const connectacc = function(){
        const name = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        if(name === acc?.[0]?.name || name === acc?.[1]?.name){
            if(password === acc?.[0]?.password || password === acc?.[1]?.password){
                router.navigate("/admin")
            }
        }
    }
    useEffect(function(){
        document.querySelector("#form-login").onsubmit = function(e){
          e.preventDefault();
          connectacc();
        }
      })
   console.log(acc?.[0]?.id);
    return /*html*/`
            <form action="" id="form-login" class="form-login">
            <div class="input-name">
            <input type="text" name="" id="username" placeholder="username" value="${acc?.[1]?.name}">
            </div>
            <div class="input-password">
            <input type="password" name="" id="password" placeholder="password" value="${acc?.[0]?.password}" >
            </div>
            <div>
            <a><input type="submit" value="đăng nhập"> </a>
            </div>
            </form>
   
    `
}
export default connect;