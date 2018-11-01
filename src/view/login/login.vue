<template>
    <div>
        <div id="login">登录</div>
        <input v-model="name"/><button v-on:click="hello">{{name?reverse(name):'跳转到首页'}}</button><br/>
        <button v-on:click="send">发送ajax请求：{{res1}}</button><br/>
        <button v-on:click="add">更换数据</button>

        <div v-for="data in dataList">
            <li>{{data.name}}</li>
        </div>
        <table>
            <tr><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>1</td></tr>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                name: "跳转到首页",
                dataList: [{name:0},{name:1}],
                res1:""
            }
        },
        methods: {
            hello(event) {
                console.log("点击了hello方法");
                this.$router.push({path: "/"})
            },
            reverse(msg) {
                return msg.split("").reverse().join("");
            },
            add: function () {
                this.dataList = [{name:Math.floor(Math.random()*10)},{name:Math.floor(Math.random()*10)}]
            },
            send() {
                var _this = this;
                axios({
                    method: "post",
                    url: "https://www.chmbkh.com/mobile/anon/common/decrypt",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    data: {"decrypt": "10101010101010101010101010101010"}
                }).then(function (res) {
                    console.log(res)
                    _this.res1 = res.data.data;
                }).catch(function (res) {
                    console.log(res)
                })
            }
        },
        created:function () {
            console.log("创建成功")
        },
        beforeCreate: function () {
            console.log("创建之前")
        }
    }

</script>

<style lang="less" scoped>

    div {
        #login {
            background: aqua;
        }
        background: #87ff8d;
    }

    table {
        background: azure;
        border:1px solid #0094ff;
    }
</style>