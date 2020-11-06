<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<h1 class="title">{{title}}</h1>
		</view>
		<button v-on:click="goto">我的</button>
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
			goto(){
				uni.navigateTo({
					url:'/pages/mine/mine'
				})
			}
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

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #f00;
	}
	h1{text-decoration: underline;}
</style>
