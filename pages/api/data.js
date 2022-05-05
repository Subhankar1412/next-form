//import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function takerequest(req, res) {
    if (req.method!=="POST") {
       return  res.status(405).json({ status: 'method not matched'});
      }
      try {
          const firstname=req.body.firstname;
          const lastname=req.body.lastname;
          const uemail=req.body.email;
          const contactno=req.body.contact;
        
            // const contactData=JSON.parse(req.body);
           
            // const savedContact=await prisma.Playlist.create({data:contactData})
           
           
            const savedContact=await prisma.Playlist.create({data:{
              firstname:firstname,
              lastname:lastname,
              uemail:uemail,
              contactno:contactno
            }})
        
            res.json(savedContact);
          res.status(200).json({success:true, message:"data uploaded successfully"});
      } catch (error) {
        res.status(400).json({ message: 'bad request'});
      }
}



// // export default function (req, res) {
// //   if (req.method!=="GET") {
    
// //     res.status(400).json({ message: 'bad request'});
// //   }
// //   console.log(req.body);
// //   res.status(200).json({success:true, message:"data uploaded successfully"});
  
// //   }



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res){
//     console.log(req.body);
//     res.status(200).json({ name: 'John Doe' })
//   }
  

