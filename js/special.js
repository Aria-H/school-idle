$(function(){	

		//隐私设置switch开关
		new Vue({
			el:".set-privacy",
			data:function(){
				return{
					value3: true,
		        	value4: true
				};
			},
			filters:{
				
			},
			mounted:function(){
				
			},
			methods:{
				
			}
		});
		
		//自带清空的搜索框
		new Vue({
		      el:".header-nav",
		      data: function() {
		        return { 
		           input10: ''
		        };
		
		      },
		    });
		    
		//日历
		new Vue({
			el:".block",
			data:function(){
				 return {
		        pickerOptions2: {
		          shortcuts: [{
		            text: '最近一周',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', [start, end]);
		            }
		          }, {
		            text: '最近一个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
		              picker.$emit('pick', [start, end]);
		            }
		          }, {
		            text: '最近三个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
		              picker.$emit('pick', [start, end]);
		            }
		          }]
		        },
		        value6: '',
		        value7: ''
		      };
			}
		});
 
 
		// 发布弹出框
 		new Vue({
 			el:".content",
 			data:function(){
 				return {
		        dialogVisible: false
		      };
 			},
 			methods:{
 				handleClose(done) {
			        this.$confirm('确认关闭？')
			          .then(_ => {
			            done();
			          })
			          .catch(_ => {});
			      }
			   }
 		});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
})  
    
    
    
    
    
    
    
    
