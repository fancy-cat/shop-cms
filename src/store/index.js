import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

function readStorage(){
    var cartsStr = localStorage.getItem("carts-info");
    // return JSON.parse(localStorage.getItem("carts-info")) || [];
    if (cartsStr == null || cartsStr.trim() == "") {
        return []
    } else {
        return JSON.parse(cartsStr);
    }
}
function writeStorage(carts){
    localStorage.setItem("carts-info",JSON.stringify(carts));
}

export default new Vuex.Store({
    state:{
        //从本地读取
        cartsInfo:readStorage()
    },
    getters:{
        //获取商品总数
        totalCounts:state=>{
            var sum=0;
            state.cartsInfo.forEach(v=>sum+=v.count);
            return sum;
        },
        //获取商品所有的id，用逗号隔开返回
        getids:state=>state.cartsInfo.map(v=>v.id).join(","),
        //根据id获取对应的商品数量
        getcountbyid:state=>id=>{
            var temp = state.cartsInfo.find(v=>v.id=id);
            return temp.count;
        }
    },
    mutations:{
        addCarts(state,obj){
            // 从本地读取，判断是否存在，增加，再次存入
            
            var temp = state.cartsInfo.find(v=>{
                return v.id == obj.id;
            });
            if(temp){
                temp.count+=obj.count;
            }else{
                state.cartsInfo.push(obj);
            }
            //再将更新后的数据存一份本地
            writeStorage(state.cartsInfo);
            
        },
        updateList(state,cartsList){
            cartsList.forEach(v=>{
               var temp2 =  state.cartsInfo.find(j=>j.id==v.id);
               temp2.count = v.count;
            })
            //再将数据存入到本地
            writeStorage(state.cartsInfo);
            console.log(state.cartsInfo)
        }
    }
})
 