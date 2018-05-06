<template>
  <comment :artid="$route.params.id"></comment>
</template>
<script>
import comment from '../common/comment'

export default {
  components:{
    comment
  }
}
</script>
<style>

</style>
