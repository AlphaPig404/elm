<template>
	<div class="redis">
		<div class="slider">
			<v-carousel></v-carousel>
		</div>
		<div class="hot">
			<h2>热门精选</h2>
			<div class="music-list">
				<v-card></v-card>
			</div>
		</div>
		
	</div>
</template>

<script>
	import collapse from '../collapse/collapse.vue'
	import carousel from '../carousel/carousel.vue'
	import card from '../card/card.vue'
	export default{
		components:{
			'v-carousel': carousel,
			'v-collapse': collapse,
			'v-card': card
		}
	}
</script>

<style>
	.redis .hot{
		width: 96%;
		margin: 10px auto;
		display: flex;
		flex-direction: column;
	}
	.redis .hot .el-col-8 {
	    width: initial;
	    flex: 1;
	}
	.redis .hot .music-list{
		padding: 20px;
	}
</style>