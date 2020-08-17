const CONSTAPI = {
	addAdminUser:{//登录时注册用户，如已祖册会返回unid_id
		url:"/admin/user",
		method:"POST"
	},
	addRole:{//添加角色
		url:'/admin/role',
		method:'POST'
	},
	roleList:{
		url:'/admin/role/list/paging',
		method:'GET'
	},
	roleDetail:{//角色详情
		url:'/admin/role/find_type/id',
		method:'GET'
	},
	putRole:{//更新角色
		url:'/admin/role',
		method:'PUT'
	},
	deleteRole:{//删除角色
		url:'/admin/role',
		method:'DELETE'
	},
	addSysModule:{//添加模块
		url:'/admin/system/module',
		method:'POST'
	},
	moduleList:{//模块列表
		url:'/admin/system/module/list',
		method:'GET'
	},
	modileListPage:{
		url:'/admin/system/module/list/paging',
		method:'GET'
	},
	deleteModule:{//删除模块
		url:'/admin/system/module',
		method:'DELETE'
	},
	putModule:{//更新模块
		url:'/admin/system/module',
		method:'PUT'
	},
	moduleDetail:{
		url:'/admin/system/module',
		method:'GET'
	}, //获取模块（通过模块编号）
	addApi:{//新增api
		url:'/admin/system/api',
		method:'POST'
	},
	apiList:{//api列表
		url:'/admin/system/api/list/paging',
		method:'GET'
	},
	apiDetail:{//api详情
		url:'/admin/system/api/find_type/id',
		method:'GET'
	},
	putApi:{//更新api
		url:'/admin/system/api',
		method:'PUT'
	},
	deleteApi:{//删除api
		url:'/admin/system/api',
		method:'DELETE'
	},
	userTypeList:{
		url:'/admin/system/user/type/list',
		method:'GET'
	},
	apiAllList:{//获取所有的api
		url:'/admin/system/api/list',
		method:'GET'
	},
	addRolePower:{//新增用户的路由权限
		url:'/admin/role/privilege',
		method:'POST'
	},
	rolePowerList:{//授权用户的列表
		url:'/admin/role/privilege/list/paging',
		method:'GET'
	},
	rolePowerDetail:{//授权用户详情
		url:'/admin/role/privilege/find_type/id',
		method:'GET'
	},
	putRolePower:{//更新用户绑定的api
		url:'/admin/role/privilege',
		method:'PUT'
	},
	deleteRolePower:{
		url:'/admin/role/privilege',
		method:'DELETE'
	},
	putUserType:{
		url:'/admin/system/user/type',
		method:'PUT'
	},
	userTypeDetail:{
		url:'/admin/system/user/type',
		method:'GET'
	},//获取用户类型
}
export default CONSTAPI