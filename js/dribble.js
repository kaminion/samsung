// var 내꺼 = document.querySelector("div");
// var 을수특기 = {
//     가르치기 : "거의 매일",
//     배우기 : "코드"
// };

// var 할일2 = function()
// {
//     alert("안녕하세요");
// }

// var all = [멤버1, 멤버2, 멤버3, 멤버4, 멤버5, 멤버6, 멤버7, 멤버8];

// var 멤버1 = "정송이";
// var 멤버2 = "정강이";
// var 멤버3 = "김달식";
// var 멤버4 = "송강호";
// var 멤버5 = ["유호성", "서강서", "김이례"];
// var 멤버6 = "김이해";
// var 멤버7 = "원미연";
// var 멤버8 = "강동원";   

// var mem2 = [];

// all.forEach(function(avatar){
//     mem2.push(avatar + "hi");
// });



// 내꺼.addEventListener("click",function 할일()
// {   
//     을수특기["청소"] = "매일";
//     을수특기.음악 = "피아노";
//     console.log(을수특기);
// });
// alert("안녕하세요");

// let nameClass = "t_school";
// nameClass.split("_");
// console.log(nameClass.split("_"));

// var 앞 = nameClass.substring(2,9);

// var 뒤 = "안녕하세요. 정을수입니다.";
// console.log(뒤.substring(6,10));

// let img = document.querySelector("img");
// var imgaddr = img.getAttribute("src");
// console.log(imgaddr);



// img.addEventListener("click", function(){
//     img.setAttribute("src", "btn_on.gif")
// }
// );

// var 이름 = "정을수";
// var 나이 = "43세";
// var 직업 = "Front-end Director";
// // var 완성된문장="제 이름은 " + parameterName + "이며 " + "나이는 " + age + " 입니다. " + "직업은 " + job + " 입니다.";

// var 끝인사 = 소개하기(["정을수", "43세", "Front-end Director"]);
// console.log(끝인사);

// function 소개하기(전달자)
// {
//     alert();

//     return 전달자[0] + 전달자[1] + 전달자[2];
// }

// var a = 2;
// var b = 2;
// var c = 2;
// var 결과 = a === b === c;


// var 일분은몇초 = 60;
// var 한시간은몇분 = 60;
// var 계산결과;

// var 초계산하기 = function(hours){
//     var result;      
//     result = hours * 60 * 60;

//     계산결과 = result;
//     alert(result);
//     return result;
// };
// 초계산하기(2);
// console.log(계산결과);



// (function(){
//     var menu = ["김치찌개", "라면", "치킨", "피자"];
//     var order = prompt("1.김치찌개 2.라면 3.치킨 4.피자 원하는 메뉴의 숫자를 입력하시오") - 1;

//     if(menu.length >= order && order >= 0 )
//     {
//         console.log(menu[order]);
//     }
//     else
//     {
//         console.log("취소하셨습니다.");
//     }

// }());



var menu = 
{
    김치찌개 : 7000,
    라면 : 3000,
    치킨 : 18000,
    피자 : 22000
};

(function(){
        var order = prompt("김치찌개/라면 /치킨 / 피자중 하나를 적으시오");
        if(order === null){
            console.log("취소를 누르셨습니다.");
        }
        else if(menu[order] === undefined)
        {
                console.log("메뉴가 없습니다.");
        }
        else {
            for (temp in menu)
            {
                if(order === temp)  console.log(menu[temp] + "주문하셨습니다.");
            
            }
        }
        
        // if(menu[order] !== null)
        // {
        //     console.log(menu[order]);
        // }
        // else
        // {
        //     console.log("NO");
        // }
        
}()
)