var subarraysWithKDistinct = function(l1, l2) {
    n1 = 0;
    n2 = 0;
    debugger
    for (let i = l1.length-1; i >= 0; i--) {
        n1 = n1 * 10 + l1[i];
    }
    for (let i = l2.length-1; i >= 0; i--) {
        n2 = n2 * 10 + l2[i];
    }
    // for (let i = 0; i < l2.length; i++) {
    //     n1 = n1 * 10 + l2[i];
    // }
    console.log(n1,n2);
    sum = n1 + n2;
    sum = (n1+n2).toString().split('');
    console.log(sum)
    result = [];
    for (let i = sum.length-1; i >= 0; i--) {
        result.push(sum[i]);
    }
    console.log(result);
    return result;
};
l1 = [2,4,3];
l2 = [5,6,4];
subarraysWithKDistinct(l1, l2);

