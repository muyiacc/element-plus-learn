<template>

    用于布局的容器组件，方便快速搭建页面的基本结构：

    <!-- <el-container>：外层容器。 当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列， 否则会水平左右排列。

        <el-header>：顶栏容器。

        <el-aside>：侧边栏容器。

        <el-main>：主要区域容器。

        <el-footer>：底栏容器。 -->

    <div class="common-layout">
        <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    </div>

</template>

<script setup>

</script>

<style scoped>
div {
    background-color: #c33434;
}
</style>