const nums1 = [ 1, 2, 3] ;
const nums2 = [ 4, 5, 6 ];

console.log([ ...nums1, nums2 ]);
// [1, 2, 3, 4, 5, 6]

console.log([ 'a', 'b', ...nums2 ]);
// ["a", "b", 4, 5, 6]

console.log([ ...nums1, nums2, 7, 8, 9 ]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]