<template>
    <div>
        <div id="login">登录</div>
        <button v-on:click="hello">{{name}}</button>
        <button v-on:click="send">发送ajax请求：{{res1}}</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                name: "跳转到首页",
                res1:""
            }
        },
        methods: {
            hello() {
                console.log("点击了hello方法");
                this.$router.push({path:"/"})
            },
            send() {
                var _this = this;
                axios({
                    method: "post",
                    url:"https://www.chmbkh.com/mobile/anon/common/decrypt",
                    headers:{
                        'Content-type': 'application/json'
                    },
                    data:{"decrypt":"10101010101010101010101010101010"}
                }).then(function (res) {
                    console.log(res)
                    _this.res1 = res.data.data;
                }).catch(function (res) {
                    console.log(res)
                })
            }
        }
    }

</script>