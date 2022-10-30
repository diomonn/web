(function() {
    const T = document.querySelector('.T');
    const l = document.querySelector('.l');
    const r = document.querySelector('.r');
    const B = document.querySelector('.BIGBIG');
    const BI = document.querySelector('.BIGBIG img');
    const Images = ['./html/images/JAVA1.jpg', './html/images/JAVA4.jpg', './html/images/JAVA2.jpg', './html/images/JAVA3.jpg', './html/images/JAVA5.png', './html/images/JAVA6.png', './html/images/JAVA3.jpg', './html/images/JAVA1.jpg', './html/images/JAVA4.jpg']

    function click(i) {
        B.style.display = 'flex';
        B.index = i;
        BI.src = Images[i]

    }

    for (let i = 0; i < Images.length; i++) {
        const div = document.createElement('div');
        div.style.backgroundImage = 'url(' + Images[i] + ')';

        div.addEventListener('click', function() {
            click(i)
        })


        T.appendChild(div)
    }
    r.onclick = function() {
        ++B.index <= Images.length ? click(B.index) : click(0);

    }
    l.onclick = function() {
        --B.index >= 0 ? click(B.index) : click(Images.length);

    }
    BI.onclick = function() {
        console.log(1);
        B.style.display = "none"
    }
})()