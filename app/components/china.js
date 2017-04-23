// module.exports  = function(){
//     console.log('hello China!');
// }
import React from 'react';
import  './china.css';

function testProxy(){
        $.get('/api/getUser',{id:1},function(res,status,xhr){
            console.log(res);
        });
        $.get('http://localhost:3000/getUser',{id:1},function(res,status,xhr){
            console.log(res);
        });
}

export default function(){
    console.log('load China!!!');
    testProxy();
    return <div className = 'china'>hello china</div>;
}
