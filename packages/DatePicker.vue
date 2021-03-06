<template>
  <div class="xue-date-picker" @mouseleave="onMouseleave" @mouseenter="onMouseenter">
    <div class="xue-date-picker__header">
      <span class="icon" @click="prevYear">&lt;&lt;</span>
      <span class="icon" @click="prevMonth">&lt;</span>
      <div class="title">{{ title }}</div>
      <span class="icon" @click="nextMonth">&gt;</span>
      <span class="icon" @click="nextYear">&gt;&gt;</span>
    </div>
    <div class="xue-date-picker__content">
      <table>
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(oneWeek, i) in daysTable" :key="i">
            <td v-for="day in oneWeek" :key="day.date"
                :class="[day.class, {'day-this': day.date === selected}]" class="day"
                @click="selectDay(day)" @dblclick="selectDay(day) || confirm()"
            >
              {{ day.text }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="xue-date-picker__footer">
      <div class="button-group">
        <span class="button" @click="reset">{{ buttonText.reset }}</span>
        <span class="button" @click="now">{{ buttonText.now }}</span>
        <span class="button" @click="confirm">{{ buttonText.confirm }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
window.dayjs = dayjs

export default {
  props: {
    daysOfWeek: {
      type: Array,
      default: () => ['日', '一', '二', '三', '四', '五', '六']
    },
    firstDayIsMonday: {
      type: Boolean,
      default: false
    },
    titleFormat: {
      type: String,
      default: 'YYYY年 M月'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    value: {
      type: [Date, Number, String],  // 传入 日期 或 毫秒数 或 代表日期的字符串
      default: () => new Date()
    },
    buttonText: {
      type: Object,
      default: () => ({
        reset: '重置',
        now: '现在',
        confirm: '确定'
      })
    }
  },
  data () {
    return {
      valueType: typeof this.value,
      daysTable: [],
      activeDay: dayjs(this.value),  // 临时选中的某一天
      firstDayOfActiveMonth: dayjs(this.value).startOf('month')  // 当前显示月份的第一天
    }
  },
  computed: {
    title () {
      return this.firstDayOfActiveMonth.format(this.titleFormat)
    },
    selected () {
      return this.activeDay.format('YYYY-M-D')
    }
  },
  watch: {
    activeDay (val) {
      if (val.format('YYYY-M') !== this.firstDayOfActiveMonth.format('YYYY-M')) {
        this.firstDayOfActiveMonth = val.startOf('month')
      }
    },
    firstDayOfActiveMonth () {
      this.changeMonth()
    }
  },
  created () {
    if (this.firstDayIsMonday) { this.daysOfWeek.push(this.daysOfWeek.shift()) }
    this.changeMonth()
  },
  methods: {
    getValue () {
      const value = this.valueType === 'number'
        ? this.activeDay.valueOf()
        : this.valueType === 'string'
          ? this.activeDay.format(this.format)
          : this.activeDay.toDate()
      return value
    },
    prevMonth () {
      this.firstDayOfActiveMonth = this.firstDayOfActiveMonth.add(-1, 'month')
    },
    nextMonth () {
      this.firstDayOfActiveMonth = this.firstDayOfActiveMonth.add(1, 'month')
    },
    prevYear () {
      this.firstDayOfActiveMonth = this.firstDayOfActiveMonth.add(-1, 'year')
    },
    nextYear () {
      this.firstDayOfActiveMonth = this.firstDayOfActiveMonth.add(1, 'year')
    },
    /** 根据最新的年月日重新绘制界面 */
    changeMonth () {
      const daysArray = []
      const start = this.firstDayIsMonday ? this.firstDayOfActiveMonth.day() - 1 : this.firstDayOfActiveMonth.day()
      const daysOfThisMonth = this.firstDayOfActiveMonth.daysInMonth()
      const daysOfPrevMonth = this.firstDayOfActiveMonth.add(-1, 'month').daysInMonth()
      const prevMonthPrefix = this.firstDayOfActiveMonth.add(-1, 'month').format('YYYY-M-')
      const thisMonthPrefix = this.firstDayOfActiveMonth.format('YYYY-M-')
      const nextMonthPrefix = this.firstDayOfActiveMonth.add(1, 'month').format('YYYY-M-')
      for (let i = 0; i < start; i++) {
        daysArray[i] = {
          date: prevMonthPrefix + (daysOfPrevMonth - start + 1 + i),
          text: daysOfPrevMonth - start + 1 + i,
          class: 'day-prev'
        }
      }
      for (let i = 0; i < daysOfThisMonth; i++) {
        daysArray.push({
          date: thisMonthPrefix + (i + 1),
          text: i + 1
        })
      }
      for (let i = 0, length = 42 - daysArray.length; i < length; i++) {
        daysArray.push({
          date: nextMonthPrefix + (i + 1),
          text: i + 1,
          class: 'day-next'
        })
      }
      this.daysTable = new Array(6).fill(null).map(it => [])
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          this.daysTable[i][j] = daysArray[i * 7 + j]
        }
      }
    },
    reset () {
      this.activeDay = dayjs(this.value)
    },
    now () {
      this.activeDay = dayjs()
    },
    confirm () {
      this.$emit('input', this.getValue())
      this.$emit('change', this.getValue())
    },
    selectDay (day) {
      this.activeDay = dayjs(day.date)
      if (day.class === 'day-prev') {
        this.firstDayOfActiveMonth = this.firstDayOfActiveMonth.add(-1, 'month')
      }
      if (day.class === 'day-next') {
        this.firstDayOfActiveMonth = this.firstDayOfActiveMonth.add(1, 'month')
      }
      this.$emit('select', this.getValue())
    },
    onMouseenter () {
      this.$emit('mouseenter')
    },
    onMouseleave () {
      this.$emit('mouseleave')
    }
  },
}
</script>

<style lang="scss">
.xue-date-picker {
  z-index: 9999;
  width: 274px;
  height: 324px;
  border: 1px solid #ccc;

  .day-prev,
  .day-next {
    color: #d2d2d2;
  }

  .day-this {
    background-color: #09f;
    color: #fff;
  }
}

.xue-date-picker__header {
  display: flex;
  margin: 10px 20px;

  .icon {
    display: inline-block;
    padding: 4px 6px;
    border-radius: 4px;
    color: #999;
    font-family: monospace;
    font-weight: 600;
    user-select: none;

    &:hover {
      background-color: #ccc;
    }
  }

  .title {
    flex: auto;
    text-align: center;
  }
}

.xue-date-picker__content {
  border: 1px solid #ccc;
  border-width: 1px 0;

  table {
    width: 100%;
    padding: 10px;

    th {
      font-weight: normal;
    }

    td {
      padding: 5px;
      font-size: 14px;
      text-align: center;
    }
  }

  .day {
    cursor: pointer;

    &:not(.day-this):hover {
      background-color: #999;
    }
  }
}

.xue-date-picker__footer {
  position: relative;

  .button-group {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0;
  }

  .button {
    height: 26px;
    margin: 0 0 0 -1px;
    padding: 2px 10px;
    border: 1px solid #c9c9c9;
    color: #666;
    font-size: 14px;
    line-height: 26px;
    white-space: nowrap;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:hover {
      color: #09f;
    }
  }
}
</style>
