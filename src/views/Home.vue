<template>
  <div class='q-pa-md row items-start q-gutter-md'>

    <q-card class='my-card' v-for='(info, idx) in sampleInfo' :key='idx'>
      <q-btn :to='info.to' ><img :dense='$q.screen.xs' :src = info.img style='height: 180px; width: 270px'></q-btn>
      <q-card-actions align='left'>
        <q-btn flat :to="{name: info.title}" class='text-weight-bold'> {{info.label}} </q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>
<script>
import { getHomeSamples } from '@/config';

export default {
  data() {
    return {
      // 메인 화면에 보여줄 정보들 (중앙 설정에서 가져옴)
      sampleInfo: getHomeSamples()
    }
  }
}
</script>