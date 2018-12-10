<template>
  <div class="about">
    <h1>{{$t('top.hello')}} & {{$t('bottom.world')}}</h1>
    <select v-model="selectedLang" @change="selectLang">                                        
        <option :value="lang.lang" v-for="(lang, index) in langData" :key="index" >{{lang.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langData: [{
        lang: 'zh',
        name: '中文'
      },{
        lang: 'en',
        name: 'English'
      },{
        lang: 'thai',
        name: 'ไทย'
      }],
      selectedLang:'zh'
    }
  },
  methods: {
    selectLang() {
      window.localStorage.setItem('lang', this.selectedLang)
      this.$i18n.locale = this.selectedLang
    }
  }
}
</script>

