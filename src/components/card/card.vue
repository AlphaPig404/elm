<template>
	<el-row>
	  <el-col :span="8" v-for="(o, index) in 16" :offset="index > 0 ? 2 : 0" :key="" class="music-item">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../../assets/logo.png" class="image">
	      <div style="padding: 14px;">
	        <span>Hello vue!</span>
	      </div>
	    </el-card>
	  </el-col>
	</el-row>
</template>

<script>
	export default {
	  data() {
	    return {
	      currentDate: new Date()
	    };
	  }
	}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .el-col-offset-2{
  	margin-left: 0;
  }
  .music-item{
  	padding: 10px;
  }

</style>