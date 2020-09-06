<template>
    <div>
        <e-layout class="container">
            <div class="header">
                <e-header>
                    <svg t="1599049078317" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="12801" width="40" height="40">
                        <path d="M512.005723 854.34245C276.467524 854.34245 84.834498 662.709424 84.834498 427.171225S276.456079 0 512.005723 0s427.171225 191.633027 427.171225 427.171225-191.633027 427.171225-427.171225 427.171225z m0-781.125197c-195.158259 0-353.942526 158.784267-353.942527 353.942527s158.772821 353.953972 353.942527 353.953971 353.942526-158.784267 353.942526-353.942526S707.163982 73.228699 512.005723 73.228699z"
                              fill="#41BD84" p-id="12802"></path>
                        <path d="M511.994277 427.182671m-195.28416 0a195.284161 195.284161 0 1 0 390.568321 0 195.284161 195.284161 0 1 0-390.568321 0Z"
                              fill="#41BD84" p-id="12803"></path>
                        <path d="M512.005723 655.613176c-125.958398 0-228.441951-102.483553-228.441951-228.441951s102.483553-228.441951 228.441951-228.441951 228.441951 102.483553 228.44195 228.441951-102.483553 228.441951-228.44195 228.441951z m0-390.556876c-89.389831 0-162.126371 72.725094-162.126371 162.126371s72.725094 162.126371 162.126371 162.12637 162.126371-72.725094 162.12637-162.12637-72.713649-162.137816-162.12637-162.137816zM512.005723 1024a36.625795 36.625795 0 0 1-36.625795-36.625795V825.05326a36.625795 36.625795 0 1 1 73.25159 0v162.332391a36.625795 36.625795 0 0 1-36.625795 36.614349z"
                              fill="#41BD84" p-id="12804"></path>
                        <path d="M512.005723 488.198956a36.625795 36.625795 0 0 1-36.625795-36.625795v-48.815317a36.625795 36.625795 0 1 1 73.25159 0v48.826763a36.625795 36.625795 0 0 1-36.625795 36.614349z"
                              fill="#41BD84" p-id="12805"></path>
                    </svg>
                    <h1>Easy-UI</h1>
                    <div class="top-right">
                        <input class="search" placeholder="搜索文档" autofocus/>
                        <a href="https://github.com/lanlirong/easy-ui">github</a>
                    </div>
                </e-header>
            </div>
            <e-layout>
                <e-sider>
                    <div v-for="(item, index) in pathList" :key="index"> <h2>
                        <svg t="1599047234057" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="8947" width="16" height="16">
                            <path d="M788.48 512L312.32 786.92352V237.09696z" p-id="8948" fill="#333333"></path>
                        </svg>
                       {{item.name}}
                    </h2>
                        <p v-for="(cate, index2) in item.children" :key="index2" @click="change(cate.path)" :class="{'active': $route.path === cate.path}">{{cate.name}}</p>
                       </div>
                </e-sider>
                <e-content>
                    <!--<transition name="fade">-->
                    <router-view></router-view>
                    <!--</transition>-->
                </e-content>
            </e-layout>
        </e-layout>
    </div>
</template>
<script>
    import eLayout from "@/components/layout.vue";
    import eHeader from "@/components/header.vue";
    import eContent from "@/components/content.vue";
    import eSider from "@/components/sider.vue";

    export default {
        components: {
            eLayout, eHeader, eContent, eSider
        },
        data() {
            return {
                pathList: [
                    {
                        name: '开发指南',
                        children: [
                            {
                                name: '前言',
                                path: ''
                            },
                            {
                                name: '安装',
                                path: ''
                            },
                            {
                                name: '快速上手',
                                path: ''
                            }
                        ]
                    },
                    {
                        name: '组件',
                        children: [
                            {
                                name: 'Button 按钮',
                                path: '/button'
                            },
                            {
                                name: 'Input 输入框',
                                path: '/input'
                            },
                            {
                                name: 'Layout 布局',
                                path: '/layout'
                            },
                            {
                                name: 'Row-Col 栅格系统',
                                path: '/container'
                            },
                            {
                                name: 'Toast 消息提示',
                                path: '/toast'
                            },
                            {
                                name: 'DatePicker 日期选择器',
                                path: '/datepicker'
                            }
                        ]
                    }
                ],

            }
        },
        methods: {
            change(path) {
                this.$router.push({
                    path: path
                })
                console.log( this.$route.path)
            }
        },
        computed: {},
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    $themeColor: #41BD84;
    $fontColor: #444;
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        height: 100vh;
        max-width: 1300px;
        margin: 0 auto;

        .e-header {
            /*height: 60px;*/
            padding: 10px 0;
            width: 100%;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;

            & > svg {
                margin: 0 1vh 0 4vh;
            }

            & h1 {
                font-weight: normal;
                font-size: 24px;
            }

            & .top-right {
                flex: 1;
                text-align: right;
                padding-right: 30px;

                & .search {
                    height: 30px;
                    border-radius: 15px;
                    border: 1px solid #ccc;
                    outline: none;
                    padding-left: 20px;

                    &:focus {
                        border-color: $themeColor;
                    }
                }

                & > a {
                    color: $fontColor;
                    padding: 0 20px;

                    &:hover {
                        color: $themeColor;
                    }
                }

            }
        }

        .e-sider {
            width: 20%;
            height: 100%;
            border-right: 1px solid #ddd;

            & h2 {
                color: #333;
                font-size: 16px;
                margin: 4vh 2vh;
            }

            & p {
                padding: 1.5vh 4vh;
                transition: all .1s;

                &:hover {
                    color: $themeColor;
                    border-left: 4px solid $themeColor;
                    border-right: 2px solid $themeColor;
                    cursor: pointer;
                }
            }
        }

        .e-content {;
            height: 100%;
            width: 80%;

        }
        .active {
            color: $themeColor;
            border-left: 4px solid $themeColor;
            border-right: 2px solid $themeColor;
            cursor: pointer;
        }
    }
    /*.fade-enter-active, .fade-leave-active {*/
        /*transition: opacity .4s;*/
    /*}*/
    /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
        /*opacity: 0;*/
    /*}*/

</style>
