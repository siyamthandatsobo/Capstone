import {getProducts, getProduct,addProduct,deleteProduct,editProduct} from '../model/database.js';
export default{
    getMany:async(req,res)=>{
        res.send(await getProducts())
      },
    postMany:async(req,res)=>{ 
        const { prodName , quantity ,amount ,category ,details,prodUrl}=req.body //in one line
        const post=await addProduct( prodName , quantity ,amount,details ,category ,prodUrl)
        res.send(await getProducts())
  }, 
    getSingle:async(req,res)=>{
    res.send(await getProduct(+req.params.prodID))
},
    deleteSingle:async(req,res)=>{
        res.send(await deleteProduct(req.params.prodID))
        
    },
    editSingle:async(req,res)=>{
        console.log(+req.params.prodID);
        const [product] = await getProduct(+req.params.prodID)
        let {prodName , quantity ,amount ,category ,details,prodUrl}=req.body
        prodName ? prodName=prodName: {prodName}=product
        quantity ? quantity=quantity: {quantity}=product
        amount ? amount=amount: {amount}=product
        category ? category=category: {category}=product
        details ? details=details: {details}=product

        prodUrl ? prodUrl=prodUrl: {prodUrl}=product
        console.log(product) //in one line
        const edit=await editProduct(prodName , quantity ,amount ,category,details ,prodUrl,+req.params.prodID)
        res.json(await getProducts())
    }
    

}