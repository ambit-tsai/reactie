// IE8 didn't have `document.head`
if (!document.head) {
    document.head = document.getElementsByTagName('head')[0];
}
