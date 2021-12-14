
new Vue({
    el: '#vm',
    data: {
        imagen: 'https://th.bing.com/th/id/OIP.EgSPriuEnAtlIWJV8R_E1QHaGs?pid=ImgDet&rs=1'
    }
})

new Vue({
    el: '#vt',
    data: {
        texto: 'Bienvenido al curso de Vue.js'
    }
})

new Vue({
    el: '#vh',
    data: {
        texthtml: "<em>Bienvenido al curso de Vue.js</em>"
    }
})

new Vue({
    el: '#vifelse',
    data: {
        mostrar : false
    }
})

new Vue({
    el: '#velseif',
    data: {
        parrafo: 1
    }
})

new Vue({
    el: '#vf',
    data: {
        paises: [{nombre: 'Mexico'}, {nombre: 'Espana'}, {nombre: 'Colombia'}],

    }
})

new Vue({
    el: '#vob',
    data: {
        empleado: {
            nombre: 'Carlos Castro',
            edad: '30 a;os',
            nacionalidad: 'Mexicano',
            profesion: 'Programador',
            empresa: 'IBM',
            telefono: '2532905'
        }
    }
})