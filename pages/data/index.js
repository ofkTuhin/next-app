import React from 'react';
import Link from 'next/link'
import Head from 'next/dist/shared/lib/head';

export const  getStaticProps=async ()=>{
    const result= await fetch('https://jsonplaceholder.typicode.com/users')
    const posts=await result.json()


    return {
        props:{
              posts
          },
 
         
      }
 
}
const CheckData = ({posts}) => {
    console.log(posts)
    return (
        <div>
 <Head>

 <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet"/>
         </Head>
             {
               posts.map(title=><Link href={'/data/'+title.id} key={title.id}><h1>{title.name}</h1></Link>)
                }
        </div>
    );
};

export default CheckData;

