// 메인비주얼 슬라이드 부분
(function()
{
    var imgBox = document.querySelector(".imgBox");
    
    //li의 인덱스들을 저장함
    var liIndex = [];
    var index = 0;
    var maxSize = 0;
    var previous = 1;

    for(var i=0;i<imgBox.childNodes.length;i++)
    {
        if(imgBox.childNodes[i].tagName === "LI")
        {
            liIndex[maxSize] = i;
            maxSize++;
        }
        
        else
        {
            continue;
        }
    }
    
    console.log(liIndex);

    imgBox.addEventListener("click", function(event)
    {
        // 이벤트 처리 (원형 큐로 구현)
        event.preventDefault();
        var btn = event.target;
        if(btn.tagName === "A")
        {
            
            if(btn.className === "FSLbtn") // 좌측으로 -1 스텝 
            {
                
                console.log("L");

                imgBox.childNodes[previous].className = "";
                index = (index-1) % maxSize;
                if(index < -0)
                {
                    index = maxSize-1;
                }
                console.log("index" , index);

                // if(index <= -0) // -1에서 -1곱하면 +1 , 이 이후 L처리 시 +1에서 -1을 한 뒤(0) -1을 곱하면 -0 상태가 된다. -0 > (-0-1) > -1 * -1 = 1 그 후 반복..
                // {
                //     imgBox.childNodes[liIndex[-index]].className = "on";
                //     console.log("previous" , previous);
                //     previous = liIndex[-index];
                    
                // }
                // else
                // {
                imgBox.childNodes[liIndex[index]].className = "on";
                console.log("previous" , previous);
                previous = liIndex[index];
                // }
                
            }
            else if(btn.className === "FSRbtn") // 우측으로 +1 스텝
            {
                // index <= -0 ? index *= -1: index *= 1;
                console.log("R");
                imgBox.childNodes[previous].className = "";
                index = (index+1) % maxSize;
                console.log("index" , index);
                imgBox.childNodes[liIndex[index]].className = "on";
                console.log("previous" , previous);
                previous = liIndex[index];
            }
            
            else{ // L, R버튼 아닐시에 바로 리턴 
                return 0;
            }
            

        }
        else // A태그 아닐 시 리턴
        {
            return 0;
        }
    });
}());

// 두번째 슬라이드
(function(){
    var sixSlideEls = document.querySelectorAll(".sixSlide > div");
    var dotEl = document.querySelector(".dot");

    dotEl.addEventListener("click", dotWork);

    function dotWork(event)
    {
        
        event.preventDefault();
        
        if(event.target.tagName === "A")
        {
            for(var i=0;i < dotEl.querySelectorAll("button").length ;i++)
            {
                dotEl.querySelectorAll("button")[i].className = "";
            }
            event.target.parentNode.classList.add("on");
        }

    }




}());




function start()
{
    var nav = document.querySelector("nav");
    var wrap = document.querySelector(".wrap");
    var shadowBoxEl = document.querySelector(".shadowBox");
    var depthContainerEl = document.querySelector(".depthContainer");
    var menuRootEl = document.querySelector(".menuRoot");
    var imgBoxEl = document.querySelector(".imgBox");
    var savePage = null;

    window.addEventListener("resize", displayChangeWidth);
    
    // 초기화면 조정 
    displayChangeWidth()

    //nav 마우스 오버/리브 이벤트 부분
    function mouseOver(event)
    {  
        event.preventDefault();
        console.log(event.target);
        if((event.target.tagName === "A" || event.target.tagName === "LI") && event.target.textContent === "모바일")
        {
            var overObject = document.querySelector(".depthContainer");
            overObject.classList.add("on");
            savePage = overObject;
        }
    }
    function mouseOut(event)
    {
        var condition = event.relatedTarget;

        if(savePage === null) return -1;
        if(event.relatedTarget === null) return -1;

        while(condition.tagName !== "HTML")
        {
            if(condition.tagName === "NAV")
            {
                return 0;
            }
            condition = condition.parentNode;
        }
        savePage.classList.remove("on");
    }

    // 모바일 메뉴버튼 클릭 콜백 함수
    function mouseClick(event)
    {
        event.preventDefault();
        
        if(event.target.tagName === "A" && event.target.classList.contains("fa-bars"))
        {
            if(menuRootEl.classList.contains("on"))
            {
                init();
            }
            else
            {
                wrap.style.position = "fixed";
                
                menuRootEl.classList.add("on");
                shadowBoxEl.classList.add("on");
            }
            
        }
    }

    function menuListOpen(event)
    {
        event.preventDefault();
        console.log(event.target);
        if(event.target.tagName === "A" && event.target.textContent === "모바일")
        {
            if(depthContainerEl.classList.contains("on")) depthContainerEl.classList.remove("on");
            else depthContainerEl.classList.add("on");
        }
    }

    // 화면 블랙박스
    function shadowBoxClick(event)
    {
        if(event.target.classList.contains("shadowBox")) 
        {
            init();
        }
    }

    // 초기화 함수
    function init()
    {
        wrap.style.position = "unset";
        menuRootEl.classList.remove("on");
        shadowBoxEl.classList.remove("on");
        depthContainerEl.classList.remove("on")
    }

    // 화면 조정시 호출되는 콜백함수
    function displayChangeWidth()
    {
        var toggleChanger;
        if(savePage !== null) savePage.classList.remove("on");
        if((window.innerWidth|0) >= 1280)
        {
            toggleChanger = 0;
            imageChanger(toggleChanger);
            //오버 활성화 / 클릭 비활성화
            nav.addEventListener("mouseover", mouseOver);
            nav.addEventListener("mouseout", mouseOut);

            nav.removeEventListener("click", mouseClick);
            window.removeEventListener("click", shadowBoxClick);
            menuRootEl.removeEventListener("click", menuListOpen);
            init();
        }
        else if(window.innerWidth >= 655 && window.innerWidth < 1280)
        {
            toggleChanger = 0;
            imageChanger(toggleChanger);
            //오버 활성화 / 클릭 비활성화
            nav.addEventListener("click", mouseClick);
            window.addEventListener("click", shadowBoxClick);
            menuRootEl.addEventListener("click", menuListOpen);

            nav.removeEventListener("mouseover", mouseOver);
            nav.removeEventListener("mouseout", mouseOut);
            init();
        }
        else
        {
            toggleChanger = 1;
            imageChanger(toggleChanger);
            //클릭 활성화 / 오버 비활성화
            nav.addEventListener("click", mouseClick);
            
            menuRootEl.addEventListener("click", menuListOpen);

            window.removeEventListener("click", shadowBoxClick);
            nav.removeEventListener("mouseover", mouseOver);
            nav.removeEventListener("mouseout", mouseOut);
            init();
        }
    }
    
    //이미지 변환 함수
    function imageChanger(toggle)
    {
        // 정규식으로 조건식 검사
        var RegEx = new RegExp("PC");
        // 이미지 변환을 위한 변수 선언 
        var changer;
        var imageEls = imgBoxEl.querySelectorAll("li > img");

        if(toggle)
        {
            for(var i=0;i<imageEls.length;i++)
            {
                changer = imageEls[i].getAttribute("src").replace("_PC", "");
                imageEls[i].setAttribute("src", changer);
            }
        }
        else
        {
            for(var i=0;i<imageEls.length;i++)
            {
                changer = imageEls[i].getAttribute("src").replace("_PC", "");
                imageEls[i].setAttribute("src", changer);

                var pcChanger = imageEls[i].getAttribute("src").substring(0, imageEls[i].getAttribute("src").length-4);
                
                changer = imageEls[i].getAttribute("src").substring(imageEls[i].getAttribute("src").length-4, imageEls[i].getAttribute("src").length);
                
                if(changer !== ".jpg")
                {
                    pcChanger = imageEls[i].getAttribute("src").substring(0, imageEls[i].getAttribute("src").length-5);
                    changer = imageEls[i].getAttribute("src").substring(imageEls[i].getAttribute("src").length-5, imageEls[i].getAttribute("src").length);
                }
                imageEls[i].setAttribute("src", pcChanger + "_PC" + changer);
                console.log(pcChanger + changer);
                
            }
        }
    }

}

start();