<template>
  <div class='message'>
      <div class="showMessage">
        <h1>评价</h1>
        <div class="content">
          <div v-for="(item,index) in userMessages" :key='"message"+index' class="outer">
            <div class="left"><span class="name">{{item.name}}:</span></div>
            <div class="right clearfix"><span class="message">{{item.message}}</span><br><span class="time">{{item.createdAt}}</span></div>
          </div>
        </div>
      </div>
      <form action="" @submit="submitEvent($event)">
        <label>name:<input type="text" ref="name"></label>
        <label>message:<input type="text" ref="message"></label>
        <input type="submit" value="submit">
      </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        AVMessage:null,
        userMessages:[]
      }
    },
    methods:{
      submitEvent(e,b){
        e.preventDefault()  
        this.upload('name','message')
      },
      upload(word1,word2){
        const message = new this.AVMessage();
        message.set(word1, this.$refs[word1].value);
        message.set(word2, this.$refs[word2].value);
        message.save().then((message) => {
          console.log('保存成功。')
          this.getUserMessages()
        })
      },
      getUserMessages(){
        const query = new AV.Query('Message');
        query.find().then((todos) => {
          // 获取需要更新的 todo
          todos.forEach((todo) => { // 同步 
            todo = todo.toJSON() 
            let str = todo.createdAt
            todo.createdAt = str.split('T')[0] + ' ' + str.split('T')[1].split('.')[0]
            this.userMessages.push(todo)
          });
        });        
      },

    },
    mounted(){
        AV.init({
          appId: "UheKXrj7M20XMVyEgntpJJhu-MdYXbMMI",
          appKey: "QsMGSLMU7HL6612gszksGEcw",
          // serverURL: "//uhekxrj7.api.lncldglobal.com"
        });        
        const Message = AV.Object.extend('Message');
        this.AVMessage = Message
        this.getUserMessages()
    }
  }
</script>

<style lang="stylus" scoped>
  div.message
    .clearfix
      zoom 1
      &::after
        content ''
        display block
        width 0
        clear both

    width 100%
    border 1px solid rgba(0,0,0,0.4)
    margin 40px auto
    .showMessage
      text-align left 
      padding 10px 20px
      h1
        font-size 24px
      .content 
        div.outer
          border-bottom 1px solid rgba(0, 0, 0, 0.2)
          padding 10px
          margin-top 5px
          div.left 
            span.name
              margin-right 10px
              font-weight bold
          div.right
            margin-top 10px
            text-indent 2em
            span.message
              text-indent 2em
            span.time
              display block
              float right
              font-size 0.8em
            

    form
      padding 10px 20px
      text-align left
      input 
        margin 10px 40px 10px 10px 
</style>