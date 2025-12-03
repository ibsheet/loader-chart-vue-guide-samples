<template>
  <div class="not-found">
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다.</p>
    <q-btn color="primary" label="홈으로 이동" :to="{ name: 'Home' }" />
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
}

.not-found h1 {
  font-size: 6rem;
  margin: 0;
  color: #42b983;
}

.not-found p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}
</style>
