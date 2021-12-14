var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [{texto: 'Aprender Vue.js',
                terminada: false},
                {texto: 'Aprender Angular 2',
                terminada: false},
                {texto: 'Aprender Ionic',
                terminada: false},],
        nuevaTarea : ''
    },
    methods: {
        agregarTarea: function(){
            var texto1 = this.nuevaTarea.trim();
            if(texto1){
                this.tareas.push({
                    texto: texto1,
                    terminada: false
                })
            }
            this.nuevaTarea = ''
        }
    }
})