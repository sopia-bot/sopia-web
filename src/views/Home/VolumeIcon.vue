<template>
	<ul class="grafica">
		<li><span>&nbsp;</span></li>
		<li><span>&nbsp;</span></li>
		<li><span>&nbsp;</span></li>
		<li><span>&nbsp;</span></li>
		<li><span>&nbsp;</span></li>
		<li><span>&nbsp;</span></li>
		<li><span>&nbsp;</span></li>
	</ul>
</template>
<style scoped>
.grafica {
	transform: rotate(180deg);
	height: 200px;
}

.grafica li{
	display:inline-block;
	margin-left: 10px;
}

.grafica li span{
	display:block;
	width:25px;
	animation: grafic 400ms linear infinite alternate;
}

@keyframes grafic {
	0%{height:15px;}
	100%{height:140px;}
}

li:nth-child(1) span{
	background:#3949AB;
	animation-delay:0.3s;
}

li:nth-child(2) span{
	background:#303F9F;
	animation-duration:0.7s;
}

li:nth-child(3) span{
	background:#3F51B5;
	animation-delay:0.8s;
}

li:nth-child(4) span{
	background:#303F9F;
	animation-delay:0.4s;
}

li:nth-child(5) span{
	background:#3949AB;
	animation-duration:0.6s;
}

li:nth-child(6) span{
	background:#283593;
	animation-delay:0.6s;
}

li:nth-child(7) span{
	background:#3949AB;
	animation-duration:0.5s;
}
</style>