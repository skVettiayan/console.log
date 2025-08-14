var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    const half = Math.floor(totalLength / 2);

    let i = 0, j = 0, count = 0;
    let prev = 0, curr = 0;

    while (count <= half) {
        console.log(prev,curr);
        prev = curr;
        if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {

        // if (i < nums1.length) {
        curr = nums1[i++];
        } else {
        curr = nums2[j++];
        }
        count++;
        console.log(count);
        console.log(prev,curr);
    }
    console.log(isEven ? (prev + curr) / 2 : curr);
    return isEven ? (prev + curr) / 2 : curr;
};
l1 = [1,3];
l2 = [2];
findMedianSortedArrays(l1, l2);

