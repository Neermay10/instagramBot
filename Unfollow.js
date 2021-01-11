(() => {
    let i = 0;
    letcount = 0;
    const unfollowInterval = setInterval(()=> {
        if (count >= 100){
            clearInterval(unfollowInterval)
            return;
        }
        let list = documet.querySelectorAll('button');
        for(let btn of list){
            if(btn.innerText === 'Unfollow'){
                btn.click();
                console.log('Unfollowed');
                count++
            }
        }
        if(list[i].innerText === 'Following'){
            list[i].click
        }
        i++
    },4000);
    console.log("intervalID =>",unfollowInterval)
})();
