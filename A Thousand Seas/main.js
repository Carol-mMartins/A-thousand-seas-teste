const elements = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting === true ) {
            entry.target.classList.remove('hidden')
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
            entry.target.classList.add('hidden')
        }

        console.log(entry)
    } )
} )

elements.forEach( (elements) => myObserver.observe(elements) )