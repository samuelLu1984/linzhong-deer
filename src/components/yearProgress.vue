<template>
  <div class="progressbar">
    <progress :percent='percent' activeColor='#EA5A49'></progress>
    <p>{{year}}已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>
<script>
  export default {
    methods:{
      isLeapYear(){
        let year=this.year
        if(year%400===0){
          return true
        }else if(year%4===0&&year%400!==0){
          return true
        }else{
          return false
        }
      }
    },
    computed:{
      totalDays(){
        return this.isLeapYear()?366:365
      },
      year(){
        return new Date().getFullYear()
      },
      days(){
        let startDay=new Date()
        startDay.setMonth(0)
        startDay.setDate(1)
        let offset=new Date().getTime()-startDay.getTime()
        return parseInt(offset/1000/60/60/24)+1
      },
      percent(){
         return (this.days*100/this.totalDays).toFixed(1)
      }
    }
  }  
</script>
<style >
.progressbar{
  text-align: center;
  margin-top:10px;
  margin-bottom:40px;
  width:100%;
  
}
progress{
    margin-bottom: 10px;
  }

</style>
