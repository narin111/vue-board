<script setup>
//** Import **//
import { ref } from 'vue'

//** Data **//

const emit = defineEmits(['rowSelectCallback', 'handleSelection'])
const props = defineProps({
    tableColumns: {
        type: Object,
        required: true
    },
    tableData: {
        type: Array,
        required: true
    },
    maxHeight: {
        type: String,
        default: null
    },
    highlightCurrentRow: {
        type: Boolean,
        default: false
    },
    hideOnSinglePage: {
        type: Boolean,
        default: true
    },
    pageKey: {
        type: String
    },
    isSelection: {
        type: Boolean,
        default: false
    }
})
const currentRow = ref()

const tableHeightMap = {
    small: 240,
    large: 440
}
const maxHeight = ref(tableHeightMap[props.maxHeight])
const selectedRow = ref(null)

//** Function **//
const handleRowClick = (row) => {
    if (props.highlightCurrentRow) {
        selectedRow.value = row
    }
    emit('rowSelectCallback', row)
}

const handleCurrentRowChange = (val) => {
    currentRow.value = val
}

const handleSelection = (val) => {
    emit('handleSelection', val)
}
</script>

<template>
    <div class="table-area">
        <el-table
            :data="tableData"
            :max-height="maxHeight"
            :border="true"
            :highlight-current-row="!props.isSelection"
            table-layout="auto"
            @row-click="handleRowClick"
            @current-change="handleCurrentRowChange"
            @selection-change="handleSelection">
            <el-table-column v-if="props.isSelection" type="selection" />
            <el-table-column
                :prop="column.prop"
                :label="column.label"
                :width="column.width"
                :align="column.align || 'center'"
                :header-align="column.headerAlign || 'center'"
                :sortable="column.sortable || true"
                v-for="column in tableColumns"
                :key="column.prop"
                :formatter="column.formatter">
                <template v-if="column.cellCustom" #default="scope">
                    <slot :name="column.prop" :scope="scope"></slot>
                </template>
            </el-table-column>
            <template #empty>
                <div class="no-data">데이터가 없습니다.</div>
            </template>
        </el-table>
    </div>
</template>
