/**
 * Definition for singly-linked list.
 **/

function ListNode(val) {
      this.val = val;
      this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = [];
    var carry = 0;
    while(l1 !== null || l2 !== null) {
        var num = (l1 ? l1.val : 0) +   (l2 ? l2.val : 0) + carry;
        carry = 0;
        if (num >= 10) {
            carry = 1;
            num = num - 10;
        }
        result.push(num);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    if (carry === 1) {
        result.push(carry);
    }
    return result;    
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2))

var l3 = new ListNode(8);
l3.next = new ListNode(1);
var l4 = new ListNode(0);
console.log(addTwoNumbers(l3,l4));