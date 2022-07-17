window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
        btns = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    const createKart = () => {
        let kart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        kart.classList.add('kart')
        field.classList.add('kart-field')
        closeBtn.classList.add('close')

        heading.textContent = 'In Our Kart'
        closeBtn.textContent = 'Close'

        document.body.appendChild(kart);
        kart.appendChild(heading);
        kart.appendChild(field);
        kart.appendChild(closeBtn);
    }
    createKart()
    
    let kart = document.querySelector('.kart'),
        closeBtn = document.querySelector('.close'),
        field = document.querySelector('.kart-field');

    openBtn.addEventListener('click', function () {
        kart.style.display = 'block'
    })

    closeBtn.addEventListener('click', function () {
        kart.style.display = 'none'
    });

    btns.forEach(function (item, i) {
        item.addEventListener('click', function () {
            let copyItem = products[i].cloneNode(true),
                btn = copyItem.querySelector('button');
            
            btn.remove()
            field.appendChild(copyItem)
            products[i].remove()
        })
    })
})

