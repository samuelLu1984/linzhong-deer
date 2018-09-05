import config from '@/config'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export function showModal(title,content){
  wx.showModal({
    title,
    content,
    showCancel:false
  })
}
export function showToast(title,icon){
  wx.showToast({
    title,
    icon,
  })
}
function request(url,method,data,header={}){
   return new Promise((resolve,reject)=>{
    wx.request({
      url: `${config.host}${url}`, //开发者服务器接口地址",
      data, //请求的参数",
      method,
      header,
      
      success: res => {
        if(res.data.code==0){
          resolve(res.data.data)
        }else{
          reject(res)
        }
        
      },
      fail: (err) => {
       
        reject(err)
      },
      
    });
   })
}
export function get(url,data,header={}){
  return request(url,'GET',data,header)
}
export function post(url,data,header={}){
  return request(url,'POST',data,header)
}
export function chunk(arr,num){
   let total=[];
   let current=[]
   arr.forEach((item,i) => {
     current.push(item)
     if((i!==0&&(i+1)%num===0)||i===arr.length-1){
       total.push(current)
       current=[]
     }
   });
   return total;
}

