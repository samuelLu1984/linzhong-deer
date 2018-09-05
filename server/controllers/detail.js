const {mysql}=require('../qcloud')
module.exports=async (ctx)=>{
    const {id}=ctx.request.query
    let book=await mysql('books').select('*').where('id',id).first()
    
    // console.log(book)
    let user =await mysql('cSessionInfo').select('user_info').where('open_id',book.open_id).first()
    console.log(user)
    book.author=JSON.parse(book.author)
    book.tags=JSON.parse(book.tags)
    book.nickName=JSON.parse(user.user_info).nickName
    book.summary=book.summary.split("\n")
    book.avatarUrl=JSON.parse(user.user_info).avatarUrl
    ctx.state.data={
        detail:book
    }
    await mysql('books').where('id',id).increment('count',1)
}