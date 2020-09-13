<template>
    <div v-click-outside="onBlurInput" class="e-date-picker">
        <e-input @focus="onFocusInput" :value="formatDate"></e-input>
        <div class="e-date-picker-pop" v-show="popVisible" @selectstart.prevent>
            <div class="e-date-picker-nav">
                <span class="preYear" @click="onClickPreYear"> <e-icon name="leftleft"></e-icon></span> <span
                    class="preMonth" @click="onClickPreMonth"> <e-icon
                    name="left2"></e-icon></span>
                <span class="yearAndMonth">
                    <span class="years" @click="onClickYears">{{display.year}}年</span>
                    <span @click="onClickMonth">{{display.month+1}}月</span>
              </span>
                <span class="nextMonth" @click="onClickNextMonth"> <e-icon name="right2"></e-icon></span> <span
                    class="nextYear" @click="onClickNextYear"> <e-icon
                    name="rightright"></e-icon></span>
            </div>
            <div class="e-date-picker-panels">
                <!--<div v-if="mode === 'years'" class="e-date-picker-content">年</div>-->
                <!--<div v-else-if="mode === 'months'" class="e-date-picker-content e-date-picker-month">-->
                <!--</div>-->
                <div class="e-date-picker-content">
                    <template v-if="mode === 'years'">
                        年
                    </template>
                    <template v-else-if="mode === 'months'">
                        <div class="e-date-picker-month">
                            <span class="e-date-picker-cell"  v-for="(item,index) in month" :key="index" @click="onClickChangeMonth(index)">
                                {{item}} 月
                            </span>
                        </div>
                    </template>
                    <template v-else-if="mode === 'days'">
                        <!--星期-->
                        <div class="e-date-picker-weekdays">
                        <span class="e-date-picker-cell" v-for="i in helper.range(0,6)" :key="i">
                            {{weekdays[i]}}
                        </span>
                        </div>
                        <!--日期-->
                        <div class="e-date-picker-row" v-for="i in helper.range(1, 42/7)" :key="i">
                    <span class="e-date-picker-cell "
                          :class="{'currentMonth': isCurrentMonth(visibleDays[(i-1)*7+j-1])}"
                          v-for="j in helper.range(1,7)" :key="j" @click="onClickCell(visibleDays[(i-1)*7+j-1])">
                       {{visibleDays[(i-1)*7+j-1].getDate()}}
                    </span>
                        </div>
                    </template>
                </div>
            </div>
            <div class="e-date-picker-action"></div>
        </div>
    </div>
</template>

<script>
    import eInput from '@/components/input'
    import eIcon from '@/components/icon'
    import clickOutside from '../click-outside'
    import helper from './helper'

    export default {
        components: {
            eInput, eIcon
        },
        directives: {clickOutside},
        props: {
            value: {
                type: Date,
                default: () => {
                    return new Date()
                }
            }
        },
        data() {
            let [year, month] = helper.getYearMonthDate(this.value)
            return {
                popVisible: false,
                mode: 'days',
                helper: helper,
                weekdays: ['一', '二', '三', '四', '五', '六', '日'],
                display: {year, month},
                month: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
            }
        },
        mounted() {
        },
        methods: {
            onFocusInput() {
                this.popVisible = true
            },
            onBlurInput() {
                this.popVisible = false
            },
            onClickYears() {
                if (this.mode === 'years') {
                    this.mode = 'days'
                } else {
                    this.mode = 'years'
                }
            },
            onClickMonth() {
                if (this.mode === 'months') {
                    this.mode = 'days'
                } else {
                    this.mode = 'months'
                }
            },
            onClickCell(date) {
                this.$emit('input', date)
            },
            isCurrentMonth(date) {
                let [year, month] = helper.getYearMonthDate(date)
                // let [currentYear, currentMonth] = helper.getYearMonthDate(this.)
                return year === this.display.year && month === this.display.month
            },
            onClickPreYear() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addYear(oldDate, -1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display.year = year
                this.display.month = month
            },
            onClickPreMonth() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addMonth(oldDate, -1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display.year = year
                this.display.month = month
            },
            onClickNextYear() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addYear(oldDate, 1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display.year = year
                this.display.month = month
            },
            onClickNextMonth() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addMonth(oldDate, 1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display.year = year
                this.display.month = month
            },
            onClickChangeMonth(index) {
                this.display.month = index
                this.mode = 'days'
                this.popVisible = true
            }
        },
        computed: {
            visibleDays() {
                let date = new Date(this.display.year, this.display.month, 1)
                let firstDay = helper.firstDayOfMonth(date)
                // let lastDay = helper.lastDayOfMonth(date)
                let array = []
                // let [year, month] = helper.getYearMonthDate(date)
                let n = firstDay.getDay() // 1号前面有多少天
                let x = firstDay - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
                for (let i = 0; i < 42; i++) {
                    array.push(new Date(x + i * 86400 * 1000))
                }

                return array
            },
            formatDate() {
                const [year, month, day] = helper.getYearMonthDate(this.value)
                return `${year}-${month + 1}-${day}`
            }
        }

    }
</script>

<style lang="scss" scoped>
    .e-date-picker {
        &-pop {
            position: absolute;
            border: 1px solid #e4e7ed;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        }

        &-nav {
            width: 210px;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            display: flex;

            .yearAndMonth {
                margin: 0 auto;

                & span {
                    cursor: pointer;
                }
            }

        }

        &-content {
            height: 210px;
            width: 210px;
        }

        &-month {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            & span {
                width: 70px;
                text-align: center;
                cursor: pointer;
            }

            & span:hover {
                font-weight: bold;
            }
        }

        &-cell {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;

        }

        &-row {
            .e-date-picker-cell {
                color: #ccc;
                cursor: pointer;

                &.currentMonth {
                    color: #000;
                }
            }
        }


    }

</style>
