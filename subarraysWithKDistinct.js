var subarraysWithKDistinct = function(nums, k) {
    uniqueInt = [];
    // debugger
    subArrCount = 0;
    subArrays = [];
    for (let subArrLen = k; subArrLen <= nums.length; subArrLen++) {   
            
        for(let i=0;i<nums.length;i++){
            // console.log(nums.toString());
            // console.log(subArrLen);
            // subArr = nums.slice(i,i+subArrLen);
            let subArr = [];
            for (let j = i; j < i+subArrLen && nums[j]; j++) {
                subArr.push(nums[j]);                
            }
            console.log(subArr)
            subArrayCheck = []
            for (let k = 0; k < subArr.length; k++) {
                if(!subArrayCheck.includes(subArr[k])){
                    subArrayCheck.push(subArr[k])
                }               
            }
            // subArr.forEach(element => {
            //     if(!subArrayCheck.includes(element)){
            //         subArrayCheck.push(element)
            //     }
            // });
            // console.log(subArrayCheck)
            if(subArrayCheck.length == k && subArr.length == subArrLen){
                subArrCount = subArrCount+1;
                subArrays.push(subArr);
            }
        }
    }
    console.log(subArrCount);
    console.log(subArrays);
};
// k=360;

nums = [1,2,1,2,3];
k= 2;
subarraysWithKDistinct(nums,k);
// alert("siva")
