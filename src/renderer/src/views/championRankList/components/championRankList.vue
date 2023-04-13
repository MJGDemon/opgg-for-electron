<template>hello world</template>

<script setup lang="ts">
import useGetRankList from '../hooks/useGetRankList'
import { onMounted } from 'vue'

const { getChampionRankList } = useGetRankList()

onMounted(async () => {
  await getChampionRankList({ position: 'jungle' })
})
</script>

<style scoped lang="less"></style>
