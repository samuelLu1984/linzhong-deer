<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
export default {
  created () {
     
            
    // 调用API从本地缓存中获取数据
   console.log('qidongle')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100rpx 30rpx;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.btn{
  width: 100%;
  color:#fff;
  margin-top:10px;
  background: #EA5A49;
}
.red{
  color:#EA5A49;
  font-family: '微软雅黑'
}
</style>
