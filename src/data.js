export const key = "AIzaSyAgV0UQxP4HE53_pmu3cG-fQ5sTuSi8680"

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