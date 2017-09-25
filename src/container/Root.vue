<script>
	import RegisterComponent from 'components/Register/RegisterComponent.vue';

	export default {
		components: {
			RegisterComponent
		},
		name: 'Root'
	};
</script>

<template>
	<div class="wrapper">
		<register-component></register-component>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		height: 100%;
	}
</style>
