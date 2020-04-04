<template>
  <div class="home">
    <div class="loading loading-active" id='loading'></div>
    <header>
      <div class="banner"></div>
      <div class="header-inner clearfix">
        <a href="#" class="logo"><span>RS</span>card</a>
        <nav>
          <ul class="clearfix">
            <li><a href="javascipt:;">关于</a></li>
            <li><a href="#skill">技能</a></li>
            <li><a href="#portfolio">作品</a></li>
            <li><a href="https://caijd.top" target="_blank">博客</a></li>
            <li><a href="javascript:;">日历</a></li>
            <li><a href="#profile">联系方式</a></li>
            <li><a href="javascript:;">其他</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="profile" id="profile">
        <div class="profile-content clearfix">
          <div class="avatar">
            <img width="300" height="347" src="../assets/images/rs-photo-v1.jpg" alt="images lost"  />
          </div>
          <div class="card">
            <span class="welcome">HELLO</span>
            <h1>蔡先生</h1>
            <h2>前端开发工程师</h2>
            <hr />
            <dl>
              <dt>年龄</dt>
              <dd>28</dd>
              <dt>所在城市</dt>
              <dd>苏州</dd>
              <dt>邮箱</dt>
              <dd>463353522@qq.com</dd>
              <dt>手机</dt>
              <dd>15862451245</dd>
            </dl>
          </div>
        </div>
        <footer>
          <a href="https://github.com/cai4633">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1"></use>
            </svg>             
          </a>
          <a>
            <svg class="icon" aria-hidden="true">
              
                <use xlink:href="#icon-changyonglogo28"></use>
            </svg>            
          </a>
          <a>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-facebook"></use>
            </svg>             
          </a>
          <a>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo"></use>
            </svg>             
          </a>          
          <a>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-twitter"></use>
            </svg>             
          </a>

        </footer>
      </div>
      <a href="javascript:;" download class='download'><button>DOWNLOAD RESUME</button></a>
      <p class="selfIntroduction">
        Hello! I’m Robert Smith. Senior Web Developer specializing in front end
        development. Experienced with <br>all stages of the development cycle for
        dynamic web projects. Well-versed in numerous programming languages
        including JavaScript, SQL, and C. Stng background in project management
        and customer relations.
      </p>      
    </main>
    <section class="skill" id="skill">
      <h2>Professional Skills</h2>
      <ul class="clearfix">
        <li>
          <h3>Http</h3>
          <div class="processItem">
            <div class="processBar" style='width:80%;'></div>
          </div>
        </li>
        <li>
          <h3>HTML</h3>
          <div class="processItem">
            <div class="processBar" style='width:60%;'></div>
          </div>
        </li>
        <li>
          <h3>CSS</h3>
          <div class="processItem">
            <div class="processBar" style='width:40%;'></div>
          </div>
        </li>
        <li>
          <h3>VUE</h3>
          <div class="processItem">
            <div class="processBar" style='width:20%;'></div>
          </div>
        </li>
        <li>
          <h3>Javsscript</h3>
          <div class="processItem">
            <div class="processBar" style='width:90%;'></div>
          </div>
        </li>
        <li>
          <h3>Nodejs</h3>
          <div class="processItem">
            <div class="processBar" style='width:30%;'></div>
          </div>
        </li>
      </ul>
    </section>
    <section class="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <nav>
        <ul>
          <li @click='classList=["state1"]'>ALL</li>
          <li @click='classList=["state2"]'>PHOTOGRAPHY</li>
          <li @click='classList=["state3"]'>NATURE</li>
        </ul>
        <div class="bar">
          <div class="bar-inner" :class="classList"></div>
        </div>
      </nav>
      <div class="content clearfix">
        <div class="left"><div class="work"  ><img :src="portfolioWork1" width='610 ' height='580' alt="作品"></div></div>
        <div class="right">
          <div class="work" ><img :src="portfolioWork2" width='289' height='280' alt="作品"></div>
          <div class="work"  ><img :src="portfolioWork3" width='289 ' height='280' alt="作品"></div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "home",
    components: {},
    data(){
      return {
        classList:["state1"],
        portfolioWork1:'./statics/images/work1.jpg',
        portfolioWork2:'./statics/images/work2.jpg',
        portfolioWork3:'./statics/images/work3.jpg',

      };
   },
   mounted(){
     let timeout1 = setTimeout(() => {
       loading.classList.remove('loading-active')
     },1500)
   }
};

</script>

<style type="text/css" scoped>
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>

<style lang="stylus" scoped>

.home
// variable
  $max-width = 940px
  background-color rgb(239,239,239)
  .loading
    display none
  .loading-active
    display block
    position fixed
    width 100%
    height 100%
    background-color #888
    z-index 1
    
    before()
      content ''
      display inline-block
      position absolute
      width 0
      height @width
      border-radius 50%
      top 0
      bottom 0
      left 0
      right 0 
      margin auto
      animation loading 2s infinite
      background-color #000
    &::before
      before()
    &::after
      before()
      animation-delay 1s
    @keyframes loading {
      0%  {
        width 0
        height 0
        opacity 1
      }
      100% {
        width 40px
        height @width
        opacity 0
      }
    }
    
  header
    .banner
      width 100%
      height 515px
      background-position center center
      background-size cover
      background-image url(../assets/images/rs-cover.jpg)
      &::before
        content ''        //伪元素必须设置content否则无效
        display block     //默认是inline元素，inline元素不确定因素太多
        height 100%
        background-color rgba(44, 51, 64,0.8)      
    .header-inner
      width 100%
      padding-top  26px
      position fixed
      top 0 
      left 0 
      background-color rgba(44, 51, 64,0.3) 
      .logo
        float left
        margin-top 6px
        margin-left 14px
        font-size 24px
        color rgb(154,157,162)
        font-weight 900
        font-family "Fredoka One","Verdana"
        span
          color rgb(7, 203, 121)
          margin-right 4px

      nav
          float right
          margin-right 76px
          &>ul>li             //尽量用子元素选择器防止后代选择出现干扰项
            float left
            font-size 12px
            font-weight 900
            padding 12px 0px
            margin 0 14px
            // border-bottom 3px solid transparent     //防止hover时抖动
            &>a
              color rgba(255, 255, 255, 0.7)
              &::after
                  content ''
                  display block
                  height 3px 
                  background-color rgb(7, 203, 121)
                  margin-top 10px
                  width 0%
                  border-radius 5px
                  transition all 0.4s
              &:hover             //使用伪元素实现border动画
                &::after
                  width 100%


  main
    .profile
      max-width $max-width
      margin 0 auto
      margin-top -340px
      text-align left 
      box-shadow: -1px 2px 3px 0px rgba(0,0,0,0.46);
      .profile-content
        padding 57px 50px 35px 50px
        background-color #fff
        .avatar
            float left
        
        .card
          float left
          margin-left 60px
          font-family 'kai'
          width 480px     //TODO:怎么样不加width  
          .welcome
            font-size 13px
            display inline-block
            color #fff
            background-color rgb(7, 203, 121)
            padding 6px 12px
            font-weight 900
            position relative
            &::after
              content ''
              display block
              position absolute
              left 4px
              top 100%
              width 0px
              height 0px
              border 4px solid rgb(7, 203, 121)
              border-right-color transparent
              border-bottom-color transparent
          &>h1  
            font-size 30px
            font-weight bold
            color rgb(61, 68, 81)
            margin 28px 0px 12px 0px
            line-height 1em
          &>h2
            font-size 14px
            color #3d4451
            line-height 1em
          &>hr
            margin 25px 0px
            display block 
            background-color rgb(222,222,222)
            height 1px
            border none 
          &>dl
            font-size 12px
            line-height 1em
            font-weight 900
            &>dt
              color #333
              font-weight 900
              display inline-block
              width 25%
              margin-bottom 24px
            &>dd
              color #9da0a7
              display inline-block
              width 75%
              margin-bottom 24px

      &>footer 
        text-align center
        background-color rgb(7, 203, 121,0.7)
        &>a
          display inline-block
          padding 10px
          border-radius 50%
          margin 15px 20px
          transition all 0.2s linear
          &:hover
            background-color rgb(6, 182, 109)
          &>svg
            fill #fff
            width  23px
            height 23px

    a.download
      display block
      margin 30px 0px
      button
        display inline-block
        line-height 1em
        font-size 12px
        padding 17px
        background-color rgb(239,239,239)
        font-weight 900
        border 1px solid rgba(0,0,0,0.2)
        transition all 0.2s linear
        color rgb(61, 68, 81)
        &:hover
          box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4);
    
    &>p.selfIntroduction
      max-width $max-width
      text-align center
      margin 0 auto
      line-height 34px
      font-size 18px
      padding 0 50px

  section.skill
    max-width $max-width
    margin 0 auto
    &>h2
      line-height 44px
      color #3d4451
      font-size 30px
      color rgb(61, 68, 81)
      margin-top 70px
      margin-bottom 22px 
      font-weight 600
      font-family "Open Sans", sans-serif
    ul
      padding 40px 34px 0px 32px
      text-align left 
      box-shadow: -1px 2px 3px 0px rgba(0,0,0,0.46);
      background-color #fff
      li
        // border 1px solid #000
        padding 0 16px
        box-sizing border-box
        float left
        width 50%
        box-sizing border-box
        margin-bottom 40px
        &>h3
          color #3f4653
          font-size 14px
          font-weight normal
          line-height 1.2
          margin-bottom 6px
        .processItem
          background-color rgb(205, 245, 228)
          border-radius 10px
          height 5px
          .processBar
            background-color rgb(7, 203, 121)
            height 100%
            // width 30%
            border-radius 10px

  section.portfolio
    max-width $max-width
    margin 0 auto
    margin-top 75px
    h2
      text-align center
      font-size 30px
      line-height 1.2
    &>nav
      display inline-block
      vertical-align top
      margin 30px 0px
      
      ul>li
        cursor pointer
        display inline-block
        vertical-align top
        margin 0px 25px
        font-size 12px
        color #000
        font-weight 600
        &:nth-child(1)
          margin-left 0px
        &:nth-child(3)
          margin-right 0px

      .bar
        height 6px
        margin-top 16px
        border-radius 5px
        background-color #fff
        .bar-inner
          height 100%
          background-color #07cb79
          border-radius 10px
          transition all 0.4s
        .state1
          width 10%
          margin-left 0
        .state2
          width 46%
          margin-left 23%
        .state3
          width 20%
          margin-left 80%

    &>.content
      margin-bottom 50px
      .left
        float left

      .right 
        float right

      .work 
        position relative
        color #000
        font-size 5px
        margin 0px 10px 20px 10px
        box-shadow 0px 1px 5px 1px rgba(0,0,0,0.6)
        overflow hidden

        img 
          display block        //TODO:深入理解baseline,vertical-align的关系，其中只有包含文本内容（不包括图片）的inline或者inline-block元素才是本身的baseline，否则baseline就是margin-bottom。
          transition all 0.5s linear  
          transform scale(1,1)          

        &::after
          transition all 0.6s linear 
          content ''
          display block
          position absolute
          top 0
          left 0
          width 100%
          height 100%          

        &:hover
          img
            transform scale(1.1,1.1)    // 使用img缩放比用background-size缩放要流畅

          &::after
            background-color rgba(52, 58, 68,0.7)

</style>
