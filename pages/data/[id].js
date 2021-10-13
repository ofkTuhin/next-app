import React from 'react';


export async function getStaticPaths() {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
  
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString()},
    }))
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const post = await res.json()
  
    return { props: { post } }
  }

const userDetails = ({post}) => {
    console.log(post)
    // console.log(posts)
    return (
        <div className="details">
            <h4>{post.username}</h4>
            <h6>{post.email}</h6>

        </div>
    );
};

export default userDetails;