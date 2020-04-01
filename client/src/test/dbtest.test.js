import React from "react";
import renderer from "react-test-renderer";


test("pokemon DB interactions working",()=>{
    return fetch("http://localhost:8080/api/pokemon")
    .then(res=>{
        console.log(res)
        expect(res.status).toBe(200);
        expect(res).toBeDefined();
    })
})

test("pokemon user interactions working",()=>{
    return fetch("http://localhost:8080/api/users")
    .then(res=>{
        console.log(res)
        expect(res.status).toBe(200);
        expect(res).toBeDefined();
    })
})