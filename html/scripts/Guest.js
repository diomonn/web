(function() {
    const Guest = document.querySelector('.Guest');
    const user = document.querySelector('.user');
    const bth = document.querySelector('.bth');
    const tall = document.querySelector('.tall');
    const msg = document.querySelector('.msg');
    const Gusetmsg = [{
        user: 'lasa',
        tall: 'good job!!!'
    }, {
        user: 'lasa',
        tall: 'good j21ob!!!'
    }, {
        user: 'lasa',
        tall: 'good j21ob!!!'
    }, {
        user: 'lasa',
        tall: 'good j21ob!!!'
    }, {
        user: 'lasa',
        tall: 'good j21ob!!!'
    }, {
        user: 'lasa',
        tall: 'good j21ob!!!'
    }, ]

    Gusetmsg.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="./html/images/L.png"></img><div class='abox'> <div>
            ${element.user}
            </div>  <div>
            ${element.tall}
            </div>   <div>
            ${new Date().toLocaleString() }
            </div>
                </div>`
        div.className = 'a'
        msg.appendChild(div)
    });

    function add() {
        const div = document.createElement('div');
        div.innerHTML = `<img src="./html/images/h4.png"></img><div class='abox'> <div>
            ${user.value}
            </div>  <div>
            ${tall.value}
            </div>   <div>
            ${new Date().toLocaleString() }
            </div>
                </div>`
        div.className = 'a'
        msg.appendChild(div)
    }
    bth.onclick = function() {
        add()
    }

})()