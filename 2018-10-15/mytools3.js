(function(){

    let mytools = (function(){
        function css() { //arguments  [0]元素  [2]获取的样式
            let toS = Object.prototype.toString;
            if(arguments.length === 2){
                //批量设置
                if(toS.call(arguments[1]) === '[object Object]'){
                    setCssFromObj(...arguments);
                }else if(toS.call(arguments[1]) === '[object String]'){
                    //获取
                    return getCss(...arguments);//...['#box','width'] ->'#box','width' 
                }
            }else if(arguments.length === 3){
                setCss(...arguments);
            }
        }

        function getCss(ele,attr){
            ele = document.querySelectorAll(ele);
            return parseFloat(getComputedStyle(ele[0])[attr]);
        }

        function setCss(ele,attr,val){
            let dw = /^-?((\d+)|((\d+)?\.\d+))(px|rem|em|%|pt)$/;  //0.5px
            let yd = /^width|height|fontSize|marginTop|paddingTop|left|top$/;//..
            ele = document.querySelectorAll(ele);
            for(let i=0;i<ele.length;i++){
                if(dw.test(val)){
                    ele[i].style[attr] = val;
                }else{
                    if(yd.test(attr)){
                        ele[i].style[attr] = val + 'px';
                    }else{
                        ele[i].style[attr] = val;
                    }
                }
            }
        }

        function setCssFromObj(ele,obj){
            for(let attr in obj){
                setCss(ele,attr,obj[attr]);
            }
        }

        return {
            css,
            setCss,
            getCss,
            setCssFromObj
        }
    })();

    window.mytools = mytools;

})();