const {mysql} =require('../qcloud')
module.exports =async(ctx,next)=>{
  const openId=ctx.request.query.openId
  const books = await mysql('books').select("*").where('open_id',openId)
  const mybooks=[]
  books.forEach(book => {
     const {id,title,rating,author,image} =book
     mybooks.push({id,title,rating,author,image})
  });
  ctx.state.data={
   mybooks
  }
}