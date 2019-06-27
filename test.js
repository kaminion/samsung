// var btnMenuAdd = document.querySelector(".wrtie_menu");
// var btnMenuOrder = document.querySelector(".order_menu");
// var div = document.querySelectorAll("div");
// var btn = document.querySelector(".btn")
// var ul = document.querySelector(".list");
// var li = document.querySelectorAll("li");


// var menuList = {da:15};

// function addMenuEvent()
// {   
//     var name = prompt("이름을 입력하세요");
//     var price;

//     if(menuList === null)
//     {
//         price = prompt("가격을 입력하세요");
//         menuList[name] = price;
//         console.log(menuList[name]);
//     }
//     else
//     {
//         for(i in menuList)
//         {
//             console.log(i);
//             if(i === name)
//             {
//                 console.log("이미있습니다");
//                 break;
//             }
//         }
//     }
    
// }

// function orderMenuEvent()
// {
//     console.log(menuList.name);
//     var orderList = "";
//     for(item in menuList)
//     {
//         orderList += item + "\n";
//     }
//     prompt(orderList + " 중에" + "주문해주세요");
//     console.log(menuList[name]);
// }
// function listOff()
// {
//     var i = 0;
//     while(i < li.length)
//     {
//         if(li[i].style.display === "none")
//             li[i].style.display = "block";
//         else
//         {
//             li[i].style.display = "none";
//         }
//         i++;
//     }
// }

// function init()
// {
//     var cl = document.createElement("li");
//     var text = document.createTextNode("메뉴");
//     ul.appendChild(cl);
//     cl.appendChild(text);

//     btn.addEventListener("click",listOff)
    

//     // btnMenuAdd.addEventListener("click", addMenuEvent );
//     // btnMenuOrder.addEventListener("click", orderMenuEvent );
//     // while(i < div.length)
//     // {
//     //     div[i].addEventListener("click", function(){if(this.className==="on")this.className = ""; else{this.className="on"}} )
//     //     i++;
//     // }
// }
// init();