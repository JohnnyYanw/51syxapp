<template>
	<div class="train-page">
		<div class="item-div page-title">汽车常见问题</div>
		<div class="item-div help-item" v-for="item of questionList">
			<div class="help-title" @click="item.bool = !item.bool">{{item.question}}</div>
			<transition name="slide-fade">
				<p class="help-txt" v-show="item.bool">
					{{item.answer}}
				</p>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				questionList: [
					{
						question: '可以提前几天购票？',
						answer: '各地订票预售期在7-10天不等，具体以实际预售期为准。',
						bool: false
					}, {
						question: '为什么出发地栏提示找不到输入的城市名称？',
						answer: '该区域暂未开通网上预售票功能，您暂不能预订。',
						bool: false
					}, {
						question: '可以预订儿童票吗？',
						answer: '目前暂时无法预订儿童票，请您到发车站指定窗口进行咨询购买。',
						bool: false
					}, {
						question: '订票成功后为什么没显示座位号信息？',
						answer: '由于订票时无法在线选座，因此取票信息中不包含座位号，您去车站取票时取票系统会自动生成座位号。',
						bool: false
					}, {
						question: '订票能否用护照或其他有效证件购票呢？',
						answer: '目前订票只支持大陆居民第二代身份证号码，其他证件暂时无法下单购票。',
						bool: false
					}, {
						question: '不取票可以直接进站吗？',
						answer: '您好，现在51syx网站上有一部分汽车票是可以凭短信内容直接上车无需取票，请根据收到的短信内容查看是否需要取票上车。',
						bool: false
					}, {
						question: '可以直接退票或改签吗？',
						answer: '暂不支持网上退票及改签，如需改签，请退票后重新购买。',
						bool: false
					}, {
						question: '车站退改签要收取多少手续费？',
						answer: '1）本车次为拥有合法资质的旅行社包车，非客运站车辆；车辆舒适安全，致力于给您更好的出行体验；<br>2）出票后如需退票，请在发车前一天的15：00之前申请退票，退票手续费为票面价20%；发车前一天的15：00之后不能退票；<br>3）其他疑问请咨询服务热线：021-34780803，服务时间：8:00-22:00。',
						bool: false
					}, {
						question: '一张订单包含5张车票，其中1张需要退票/改签？',
						answer: '您可以拔打客服电话联系退票事宜，电话：021-34973919。',
						bool: false
					}, {
						question: '车站退改签要收取多少手续费？',
						answer: '1）本车次为拥有合法资质的旅行社包车，非客运站车辆；车辆舒适安全，致力于给您更好的出行体验；<br>2）出票后如需退票，请在发车前一天的15：00之前申请退票，退票手续费为票面价20%；发车前一天的15：00之后不能退票；<br>3）其他疑问请咨询服务热线：021-34780803，服务时间：8:00-22:00。',
						bool: false
					}, {
						question: '为什么付款成功后系统会提示出票失败？',
						answer: '因网络繁忙或余票不足等原因，如付款成功后出票失败，建议您更换其他班次或前往车站购买，系统会在3-7个工作日内自动办理原路退款。',
						bool: false
					}, {
						question: '保险及说明',
						answer: '投保事项<br>投保年龄：出生满20天、不满100周岁，且身体健康者。<br>保险期限：当次车次，指被保险人以乘客身份乘坐合法商业运营的客运汽车，并遵守承运人关于安全乘坐的规定，自持有效车票检票并进入所乘客运汽车车厢时起至抵达 车票载明的终点离开所乘客运汽车车厢的期间。<br>购买形式：通过《51随意行》购买，面向全国销售。<br>购买份数：每人至多购买1份，多购无效。<br>保障利益/保险责任/最高赔偿/保费<br>被保险人以乘客身份乘坐合法商业运营的客运火车，并遵守承运人关于安全乘坐的规定，自持有效车票检票并进入所乘客运火车车厢时起至抵达车票载明的终点离开所乘客运火车车厢的期间内遭受意外伤害所导致的意外伤害残疾、意外伤害身故保险责任。保险金额20万元(5元/份),承担被保险人以乘客身份乘坐合法商业运营的客运火车，并遵守承运人关于安全乘坐的规定，自持有效 车票检票并进入所乘客运火车车厢时起至抵达车票载明的 终点离开所乘客运火车车厢的期间内因遭受意外伤害所产生的门诊、住 院费用。 保险金额1万元（0免赔，100%赔付）。',
						bool: false
					}, {
						question: '订票能否用护照或其他有效证件购票呢？',
						answer: '目前订票只支持大陆居民第二代身份证号码，其他证件暂时无法下单购票。',
						bool: false
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.train-page {
		.item-div {
			width: 94%;
			padding: 0 3%;
			border-top: 1px solid #ddd;
			font-size: 14px;
			color: #333;
			&.page-title, .help-title {
				height: 38px;
				line-height: 38px;
				font-size: 16px;
				font-weight: bold;
			}
			.help-txt {
				line-height: 20px;
				padding-bottom: 5px;
			}
		}
		.page-title {
			border-top: none;
			color: #009efc;
		}
	}
	.slide-fade-enter-active, .slide-fade-leave-active {
		transition: all 0.4s ease;
	}
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateY(-20px);
		opacity: 0;
	}
</style>