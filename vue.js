var app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Aprende Vue.js Facilmente',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'
    },
        beforeCreate: function(){
            console.log('Llamando beforeCreate');
        },
        created: function(){
            console.log('Llamando create');
        },
        beforeMount: function(){
            console.log('Llamando beforeMount');
        },
        mounted: function(){
            console.log('Llamando mounted');
        },
        beforeUpdate: function(){
            console.log('Llamando beforeUpdate');
        },
        updated: function(){
            console.log('Llamando updated');
        },
        beforeDestroy: function(){
            console.log('Llamando beforeDestroy');
        },
        destroyed: function(){
            console.log('Llamando destroyed');
        },
    methods: {
            destruir : function(){
                this.$destroy();
            }
    }
}) 

new Vue({
    el: '#vm',
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        quinto: 0,
        suma: 0
    },
    computed: {
        total: function(){
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    }
})

new Vue({
    el: '#nv',
    data: {
        nombre: ''
    }
})


