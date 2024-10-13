<template>
    基础按钮：使用 type、plain、round 和 circle 来定义按钮的样式。
    <div class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>

    禁用状态：使用 disabled 属性来定义按钮是否被禁用。
    使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
    <div>
        <el-button type="danger" disabled>禁用状态</el-button>
    </div>

    图标按钮：使用 icon 属性来为按钮添加图标。

    <div>
        <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" />
        <el-button type="primary" :icon="Delete" />
        <el-button type="primary" :icon="Search">Search</el-button>
        <el-button type="primary">
            Upload<el-icon class="el-icon--right">
                <Upload />
            </el-icon>
        </el-button>
    </div>

    按钮组：使用 el-button-group 对多个按钮分组
    <div>
        <el-button-group>
            <el-button :icon="Search"></el-button>
            <el-button :icon="Share"></el-button>
            <el-button :icon="Edit"></el-button>
        </el-button-group>
    </div>

    加载状态按钮：设置 loading 属性为 true 来显示加载中状态。
    <div>
        <el-button type="primary" loading="true">加载</el-button>
    </div>

    调整尺寸：使用 size 属性额外配置尺寸，可使用 large和small两种值。
    <div>
        <el-button size="large">大图标</el-button>
        <el-button size="">默认图标</el-button>
        <el-button size="small">小图标</el-button>
    </div>

    自定义颜色 beta
    <div>
        <el-button color="#000fff">自定义颜色</el-button>
    </div>
</template>

<script setup>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>

<style scoped>
div {
    margin: .625rem .625rem;
    padding: .3125rem;
}
</style>