import React, { useEffect, useState } from 'react';
import styles from '../styles/staticcheck.module.css'

const staticcheck = () => {
    const[id,setId]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setId(data))
    },[])
    console.log(id)
    return (
        <div className={styles.color}>
            {
                id.slice(10).map(i=><ul><li>{i.id}</li></ul>)
            }
        </div>
    );
};

export default staticcheck;