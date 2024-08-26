$(function(){
	
	let totalNumber = 0;
	
	$(".materialBtn").on("click",function(){
		
		totalNumber++;
		
		let number =  Number($(this).data("number"));
		
		let inputData = "";
		let getNumber = Number($(".getNum"+number).text());
		
		switch(number) {
			case 1 :
				 inputData = $('.materialNameDiv').eq(0).find("input").val();
			break;
			case 2 :
				inputData = $('.materialNameDiv').eq(1).find("input").val();
			break;
			case 3 :
				inputData = $('.materialNameDiv').eq(2).find("input").val();
			break;
			case 4 :
				inputData = $('.materialNameDiv').eq(3).find("input").val();
			break;
			case 5 :
				inputData = $('.materialNameDiv').eq(4).find("input").val();
			break;
			default:break;
		}
		
		$(".getNum"+number).text(getNumber + 1);
		
		$('[class*="getPercent"]').each(function(index, element) {
		    let $element = $(element);
			let percentData = 0;
			if(Number($(".getNum"+(index + 1)).text()) == 0){
				percentData = 0;
			}else{
				percentData = Number($(".getNum"+(index + 1)).text()) / totalNumber * 100;	
			}
		
		    $element.text(percentData.toFixed(2));
		});
		
		$(".materialAllNum").text("사용한 비정형 물질 개수 : "+ totalNumber +"개");

		$(".logContainer").append("<div>"+ totalNumber +". "+inputData+"</div>");
		
	});

});

$(".textChangeBtn").on("click",function(){
	let number = $(this).data("number");
	
	switch(number) {
			case 1 :
				$(".materialNameText").each(function(index, element) {
					let $element = $(element);
					
					switch(index) {
						case 0: 
							$element.text("3% 재료 : ");
						break;
						case 1: 
							$element.text("6% 재료 : ");
						break;
						case 2: 
							$element.text("15% 재료 : ");
						break;
						case 3: 
							$element.text("38% 재료 1 : ");
						break;
						case 4: 
							$element.text("38% 재료 2 : ");
						break;
					}
				});
			break;	
			case 2 :
				$(".materialNameText").each(function(index, element) {
					let $element = $(element);
					
					switch(index) {
						case 0: 
							$element.text("6% 재료 : ");
						break;
						case 1: 
							$element.text("10% 재료 : ");
						break;
						case 2: 
							$element.text("20% 재료 : ");
						break;
						case 3: 
							$element.text("32% 재료 1 : ");
						break;
						case 4: 
							$element.text("32% 재료 2 : ");
						break;
					}
				});
			break;
			default:break;
		}
	

	
});
	


	