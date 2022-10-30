(function() {
    const lis = document.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            goto(i)
        }
    }

    function goto(i) {
        window.location.href = `./Article.html?${i}`
    }
})()