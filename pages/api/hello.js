// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
export const  getStaticProps=async ()=>{
  const result= await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts=await result.json()


  return {
      props:{
            posts
        },

       
    }

}