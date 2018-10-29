<template>
    <div>
        <div id="login">登录</div>
        <button v-on:click="hello">{{name}}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "跳转到首页"
            }
        },
        methods: {
            hello() {
                console.log("点击了hello方法");
                this.$router.push({path:"/"})
            }
        }
    }

</script>