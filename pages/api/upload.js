import multiparty from 'multiparty'
import fs from 'fs'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import mime from 'mime-types'
import {v2 as cloudinary} from 'cloudinary'

const BucketName = 'ajnext-ecommerce'

export default async function handle(req,res){

  const form = new multiparty.Form()
  const {fields,files} =await new Promise((resolve,reject)=>{
      form.parse(req,(err,fields,files)=>{

        if(err) reject(err)
        resolve({fields,files})
    })
    })


    cloudinary.config({
      cloud_name: "dfmlswuqy",
      api_key:process.env.API_KEY,
      api_secret:process.env.API_SECRET
    });

  
    


//  const client = new S3Client({
//   region:'eu-north-1',
//   credentials:{
//     accessKeyId:process.env.S3_ACCESS_KEY,
//     secretAccessKey:process.env.S3_SECRET_ACCESS_KEY,
//   },
//  });


 const links=[]
 for(const file of files.file){
   const ext =file.originalFilename.split('.').pop()
   
   const newFileName = Date.now() + '.'+ext
//  await client.send(new PutObjectCommand({
//     Bucket:BucketName,
//     Key:newFileName,
//     Body:fs.readFileSync(file.path),
//     ACL:'public-read',
//     ContentType:mime.lookup(file?.path),
//    }));   
  //  const link =`https://${BucketName}.s3.amazonaws.com/${newFileName}/`
  //  links.push(link)




  const resd = cloudinary.uploader.upload(file.path, {public_id: newFileName})

  resd.then((data) => {
    // console.log(data);
    // res.json({data})
    // console.log(data.secure_url);
    links.push(data?.secure_url)
    res.json({links})
  }).catch((err) => {
    console.log(err);
  });
  const url = cloudinary.url(newFileName, {
    width: 100,
    height: 150,
    Crop: 'fill'
  });
  
  
  // links.push(url)


 }

//  return res.json({links})

}

export const config ={
    api:{bodyParser:false}
}