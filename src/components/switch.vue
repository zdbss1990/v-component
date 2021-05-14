<!--
 * @Author: zhangyao
 * @Date: 2021-05-13 15:06:52
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-14 14:39:40
-->
<template>
<!-- label标签会点到 input上 -->
    <div class="z-switch" :class="{'is-checked':value}" @click="handleSwitch">
        <input class="z-switch__input" type="checkbox" :name="name" ref="input">
        <span class="z-switch__core" ref="core">
            <span class="z-switch__button"></span>
        </span>
    </div>
</template>
<script>
export default {
   name:'zSwitch',
   props:{
       value:{
           type:Boolean,
           default:false
       },
       activeColor:{
           type:String,
           default:'#409eff'
       },
       inactiveColor:{
           type:String,
           default:'#409eff'
       },
       name:{
           type:String,
           default:''
       }
   },
   data(){
       return{
           
       }
   },
   methods:{
        async handleSwitch(){
           this.$emit('input',!this.value); //父组件还没有改变就调用函数
           //数据修改后 dom更新完毕 挂载后修改按钮颜色
           await this.$nextTick()
           this.setColor()
           this.$refs.input.checkec=this.value
           this.$emit('change',this.value)
        },
        setColor(){
            //修改开关的颜色
            if(this.activeColor || this.inactiveColor){
                let color=this.value ? this.activeColor : this.inactiveColor;
                this.$refs['core'].style.borderColor=color
                this.$refs['core'].style.background=color
            }
        }
   },
   mounted(){
       this.setColor();
       //控制一下checkbox得值,input值和value是同步的
       this.$refs.input.checkec=this.value
   }
}
</script>
<style lang="scss" scoped>
    .z-switch{
        display: inline-flex;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
        .z-switch__core{
            margin: 0;
            display: inline-block;
            position: relative;
            width: 40px;
            height: 20px;
            border: 1px solid #dcdfe6;
            outline: none;
            border-radius: 10px;;
            box-sizing: border-box;
            background: #dcdfe6;
            cursor: pointer;
            transition: border-color .3s,border-color .3s;
            vertical-align: middle;
            .z-switch__button{
                position: absolute;
                top:1px;
                left: 1px;
                border-radius: 100%;
                transition: all .3s;
                width:16px;
                height: 16px;
                background: #fff;
            }
        }
    }
    .z-switch.is-checked{
        .z-switch__core{
            border-color:#409eff;
            background: #409eff;
            .z-switch__button{
                transform: translateX(20px);
            }
        }
    }
    .z-switch__input{
        position: absolute;
        width:0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
</style>