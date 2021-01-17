<template>
	<div id="app">
		<BookList />
	</div>
</template>

<script>
import BookList from "./components/BookList";

export default {
	//다른곳에서 사용시 Vue파일 이름으로 import
	name: "App",
	components: {
		BookList, //2. 사용 컴포넌트 등록(자식) - 선택자 역할
	},
};
</script>

<style></style>