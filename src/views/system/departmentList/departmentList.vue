<template>
	<div style="margin: 20px;">
		<a-card title="部门管理" style="min-height: calc(100vh - 160px);">
			<a-button type="primary" class="addInp" @click="add">新增部门</a-button>
			<a-table :columns="columns" :data-source="data" :row-selection="{onChange:tableOnChange}" :pagination="false">
				<span slot="action" slot-scope="text, record">
					<a @click="edit(text)">编辑</a>
					<a @click="deleteMessage(text)" style="margin-left: 30px;">删除</a>
				</span>
			</a-table>
			<a-pagination style="margin-top: 30px;" @change="paginationChange" v-model="current" :total="total" show-less-items />
		</a-card>
	</div>
</template>

<script>
	// this.current = e
	// this.$router.push(`/message_edit/${e}`)
	import helper from '../../../utils/helper.js'
	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id'
		},
		{
			title: '操作',
			key: 'action',
			scopedSlots: { customRender: 'action' }
		}
	];
	export default{
		data(){
			return{
				current:1,
				total:1,
				columns,
				data:[{key:1,id:1}],
			}
		},
		created(){
			// console.log(this.$route.params)
			if(this.$route.params.searchVal){
				console.log('有搜索值')
				if(this.$route.params.pageNumber){
					console.log('有页数')
				}
			}else{
				if(this.$route.params.pageNumber){
					console.log('有页数')
				}
			}
			// if(this.$router.params.searchVal){
				
			// }else{
			// 	if(this.$route.params.pageNumber){
			// 		console.log('有页数')
			// 	}
			// }
		},
		methods:{
			tableOnChange(e){//多选变化
				
			},
			add(){
				
				this.$router.push('/system/department/add')
			},
			paginationChange(){
				
			},
			edit(e){
				this.$router.push({
					path: '/system/department/edit',
					query: { q: helper.aesEncryptUrlData({ id: e.id }) }
				});
			}
		}
	}
</script>

<style>
</style>
