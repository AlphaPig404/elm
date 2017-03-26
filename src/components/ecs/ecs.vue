<template>
	<div class="ecs">
		<div class="main">
			<div class="row row1">
				<div class="card">
					<v-card></v-card>
				</div>
				<div class="todo"></div>
			</div>
			<div class="row">
				<div class="lately"></div>
			</div>
			<div class="row">
				<div class="tap">
					<v-tap></v-tap>
				</div>
			</div>
			<div class="row">
				<div class="tap">
					<v-tap></v-tap>
				</div>
			</div>
		</div>
		<div class="aside">
			<div class="row">
				<div class="tap">
					<v-tap></v-tap>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import tap from '../tap/tap.vue';
	import card from '../card/card.vue';
	export default {
		components: {
			'v-tap': tap,
			'v-card': card
		}
	}
</script>

<style>
	.ecs{
		position: relative;
	}
	.ecs .main{
		padding-right: 338px;
	}
	.ecs .aside{
		position: absolute;
		width: 338px;
		top: 0;
		right: 0;
		height: 100%;
		background-color: #fff;
	}
	.row{
		margin: 10px;
	}
</style>