const {mysql}=require('../qcloud')
const https =require('https')
module.exports=async (ctx,next)=>{
    const {isbn,openId}=ctx.request.body
    if(!isbn||!openId){
         ctx.state={
            code:-1,
            data:{
                msg:'添加失败'
            }
        }
        return
    }
    let url='https://api.douban.com/v2/book/isbn/'+isbn
    const bookInfo=await getJSON(url)
    const rating=bookInfo.rating.average
    const {image,publisher,title,alt,summary,price}=bookInfo
    const tags=JSON.stringify(bookInfo.tags.map(item=>{
        return [item.name,item.count]
    }))
    const author=JSON.stringify(bookInfo.author)
    const book=await mysql('books').select().where('isbn',isbn)
    if(book.length){
         ctx.state={
          code:-1,
          data:{
              msg:"图书已存在"
          }
        }
        return
    }
    try {
        const bookres=await mysql('books').insert({
          isbn,open_id:openId,rating,author,tags,image,publisher,title,alt,summary,price 
        })
       if(bookres){
         ctx.state={
             code:0,
             data:{
                msg:"添加成功"
              }
          } 
       }
    } catch (e) {
        console.log(e)
    }

}
function getJSON(url){
    return new Promise((resolve,reject)=>{
        https.get(url,res=>{
            let urlData=''
            res.on('data',data=>{
                urlData +=data
            })
            res.on('end',()=>{
                const bookInfo=JSON.parse(urlData)
                // console.log(data)
                if(bookInfo.title){
                    resolve(bookInfo)
                }else{
                    reject(bookInfo)
                }
            })
        })
    })
}