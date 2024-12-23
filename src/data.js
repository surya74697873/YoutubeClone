//export const key = "AIzaSyAgV0UQxP4HE53_pmu3cG-fQ5sTuSi8680" //java
//export const key = "AIzaSyD8AWItgLFiQgErYMw4Sn7I4Lvgf3T2Kxs" //ai
 export const key = "AIzaSyCrEoGeyPZb1TT5ve4NCc2aSLI-e8Sq74s"  //mersal
// export const key = "AIzaSyAnkA7iBauk6bpxwVQA2gIAT2Lvy-Y_7ZM" //jsp

export function convertViewCount(count){
    if(count > 10000000){
        return Math.floor(count/10000000) + "Cr"
    }
    else if(count > 100000){
        return Math.floor(count/100000) + "L"
    }
    else if(count > 1000){
        return Math.floor(count/1000) + "T"
    }
    else
        return count+"";
}