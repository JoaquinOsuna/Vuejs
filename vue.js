
var data= {
        titulo: 'Lista de Tareas',
        tareas: [{texto: 'Aprender Vue.js',
                terminada: false},
                {texto: 'Aprender Angular 2',
                terminada: false},
                {texto: 'Aprender Ionic',
                terminada: false},],
        nuevaTarea : ''
    }


Vue.component('titulo', {
    template: '<h2>{{titulo}}</h2>',
    data: function(){
        return { titulo: '-Lista de Tareas-'}
    }
})

Vue.component('nueva-tarea', {
    template: `<div class="input-group">
                    <input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" v-on:keyup.enter='agregarTarea' class="form-control">
                    <span class="input-group-btn">
                        <button type="button" v-on:click="agregarTarea()" class="btn btn-primary">Agregar</button>
                    </span>
                </div>`,
    data: function(){
        return data;
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

Vue.component('lista-tareas', {
    template: `<ul class="list-group">
        <li v-for="(tarea, indice) in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}"> 
            {{tarea.texto}}
            <span class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-success" v-on:click="tarea.terminada = !tarea.terminada"></button>
                <button type="button" class="btn btn-danger" v-on:click="borrar(indice)"></button>
            </span>
        </li>   
    </ul>`,
    data: function(){
        return data;
    },
    methods: {
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }
    }
})

var app = new Vue({
    el: '#app',
    data: data,
    methods: {
        
    }
})