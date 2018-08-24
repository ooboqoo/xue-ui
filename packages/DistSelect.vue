<template>
  <div class="xue-location-select">
    <xue-select :value="prov" :options="provOptions" :placeholder="placeholder.prov" @change="changeProv"></xue-select>
    <xue-select v-if="level > 1" :value="city" :options="cityOptions" :placeholder="placeholder.city" @change="changeCity"></xue-select>
    <xue-select v-if="level == 3" :value="dist" :options="distOptions" :placeholder="placeholder.dist" @change="changeDist"></xue-select>
  </div>
</template>

<script>
  import XueSelect from './Select.vue'
  import districts from './_districts'

  export default {
    components: {
      XueSelect
    },
    props: {
      value: {
        type: [Number, String],
        validator: function (val) {
          if (typeof val === 'string') { val = +val }
          return (val > 99999 && val < 999999) || val === 0
        },
        default: 100000
      },
      level: {
        type: Number,
        validator: function (val) { return [1, 2, 3].includes(val) },
        default: 3
      },
      distData: {
        type: Object
      },
      fetchMethod: {
        type: Function
      },
      placeholder: {
        default: () => ({
          prov: '—— 省 ——',
          city: '—— 市 ——',
          dist: '—— 区 ——'
        })
      }
    },
    data () {
      return {
        prov: 0,
        city: 0,
        dist: 0,
        provOptions: [],
        cityOptions: [],
        distOptions: [],
        districts,
      }
    },
    methods: {
      getOptions (id) {
        console.log(`[Debug DistSelect] getOptions(${id})`)
        if (!id) { id = 100000 }
        if (!this.data && this.fetchMethod) {
          return this.fetchMethod(id).then(list => Object.keys(list).map(key => ({value: +key, label: list[key]})))
        }
        const distData = this.distData || this.districts
        const list = distData[id]
        return Promise.resolve(Object.keys(list).map(key => ({value: +key, label: list[key]})))
      },
      getText (id, level = this.level) {
        const prov = Math.floor(id / 10000) * 10000
        const city = Math.floor(id / 100) * 100
        const dist = id
        let text = ''
        for (let i = 0, opts = this.provOptions; i < opts.length; i++) {
          if (opts[i].value === prov) { text += opts[i].label; break }
        }
        if (level === 1) { return text }
        for (let i = 0, opts = this.cityOptions; i < opts.length; i++) {
          if (opts[i].value === city) { text += opts[i].label; break }
        }
        if (level === 2) { return text }
        for (let i = 0, opts = this.distOptions; i < opts.length; i++) {
          if (opts[i].value === dist) { text += opts[i].label; break }
        }
        return text
      },
      changeProv (id) {
        this.prov = id
        if (this.level === 1) {
          this.$emit('input', id)
          this.$emit('change', String(id))
          this.$emit('text', this.getText(id, 1))
          return
        }
        this.getOptions(id).then(options => {
          this.cityOptions = options
          this.distOptions = []
          this.city = ''
          this.dist = ''
          if (this.value !== '' && this.value !== 0) {
            this.$emit('input', 0)
            this.$emit('change', '')
          }
        })
      },
      changeCity (id) {
        this.city = id
        if (this.level === 2) {
          this.$emit('input', id)
          this.$emit('change', String(id))
          this.$emit('text', this.getText(id, 2))
          return
        }
        this.getOptions(id).then(options => {
          this.distOptions = options
          this.dist = ''
          if (this.value !== '' && this.value !== 0) {
            this.$emit('input', 0)
            this.$emit('change', '')
          }
        })
      },
      changeDist (id) {
        this.dist = id
        this.$emit('input', id)
        this.$emit('change', String(id))
        this.$emit('text', this.getText(id, 3))
      },
      init () {
        const value = +this.value
        this.prov = Math.floor(value / 10000) * 10000
        this.city = Math.floor(value / 100) * 100
        this.dist = value
        this.getOptions().then(options => { this.provOptions = options })
        if (!this.value || this.level === 1) { return }
        this.getOptions(this.prov).then(options => { this.cityOptions = options })
        if (this.level === 2) { return }
        this.getOptions(this.city).then(options => { this.distOptions = options })
      }
    },
    watch: {
      value (val, oldVal) {
        if (!val || this.level === 1) { return }
        if (this.level === 2 && +val === this.city) { return }
        if (this.level === 3 && +val === this.dist) { return }
        this.init()
      }
    },
    created () {
      this.init()
    }
  }
</script>


<style lang="scss">
.xue-location-select {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .xue-select {
    min-width: 110px
  }
  .xue-select + .xue-select {
    margin-left: 10px
  }
}
</style>