import {getUsers ,getUser,addUser,deleteUser,editUser} from '../model/database.js';
import bcrypt from 'bcrypt' ;

export default{
    getMany:async(req,res)=>{
        res.send(await getUsers())
      },
    postMany:async(req,res)=>{ 
        // const { firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile}=req.body //in one line
        // const post=await addUser( firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile)
        // res.send(await getUsers())
        // async(req,res)=>{
            const {firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile}= req.body
            bcrypt.hash(userPass,10,async(err,hash)=>{
                if(err) throw err
                await addUser(firstName , lastName ,gender ,userRole,emailAdd,hash,userProfile)
                res.send({
                     msg: "you have created an acccount"
                    
                })
             })
        //  })
  }, 
    getSingle:async(req,res)=>{
    res.send(await getUser(+req.params.userID))
},
    deleteSingle:async(req,res)=>{
        res.send(await deleteUser(req.params.userID))
        
    },
    editSingle:async(req,res)=>{
        console.log(+req.params.userID);
        const [user] = await getUser(+req.params.userID)
        let {firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile}=req.body
        firstName ? firstName=firstName: {firstName}=user
        lastName? lastName=lastName: {lastName}=user
        gender ? gender=gender: {gender}=user
        userRole ? userRole=userRole: {userRole}=user
        emailAdd ? emailAdd=emailAdd: {emailAdd}=user

        userPass ? userPass=userPass: {userPass}=user
        userProfile ? userProfile=userProfile: {userProfile}=user
        console.log(user) //in one line
        const edit=await editUser(firstName , lastName ,gender ,userRole,emailAdd,userPass ,userProfile,+req.params.userID)
        res.json(await getUsers())
    }
    

}