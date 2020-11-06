<template>
	<view class="content">
		<h1>我的</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Uni'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	
	h1{text-decoration: underline;}
</style>
