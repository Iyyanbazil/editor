import { createPage, deletePage, listPages, pagedetails, savePageContent, updatePage,homeDel,template,nameUpdate } from "./page.service";

export const create = async (req,res)=>{
const pageBody=req.body;
const page=await createPage(pageBody);
res.json(page)

} 
export const list = async (req,res)=>{
const pages =await listPages() 
res.json(pages)

}
export const update = async (req,res)=>{
const {pageId}=req.params;
const pageBody=req.body;
const page=await updatePage(pageId,pageBody)
res.json(page)
}
export const changeContent = async (req,res)=>{
const {pageId}=req.params;
const pageContent=await savePageContent(pageId,req.body)
res.json(pageContent)

}
export const deletePageRecord = async(req,res)=>{
const {pageId}=req.params;

const data=await deletePage(pageId)
res.json(data)
}
export const details = async (req,res)=>{
const {pageId}=req.params;
const details=await pagedetails(pageId)
res.json(details)
}
export const loadContent =async (req,res)=>{
const {pageId}=req.params;
const pageData=await pagedetails(pageId);
res.header('Content-Type','application/json')
const {content}=pageData
res.json(content);
}
export const delHome=async (req,res)=>{
const {id}=req.body
const data=await homeDel(id);
res.json(data)
}
 export const templatePage=async(req,res)=>{
    const data=await template()
    res.json(data)
 }
 export const updateName=async(req,res)=>{
   const {id,name}=req.body.data
   // console.log({id});
   // console.log({name});
   // console.log(req.body.data);
   const data=await nameUpdate(id,name)
   res.json(data)
 }

// export const postData = (req, res) => {
//     const { Fname, Lname, email, password, Cpassword } = req.body;
//     User.findOne({ email: email }, (err, user) => {
//       if (user) {
//       //   res.send('user exist');
//       } else {
//         const user = new User({
//           Fname,
//           Lname,
//           email,
//           password,
//           Cpassword,
//         });
//         user.save();
//       //   console.log(req.body);
//       }
//     });
//   };
  
