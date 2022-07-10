const app = Vue.createApp({
    data() {
        return{
            titulo: 'Banco Cerrotico, con VUE - JS',
            enlace: 'http://www.youtube.com/',
            cantidad: 0,
            usuario: 'Gus Gus',
            servicios: ['Cheques', 'Consignaciones', 'Pagos'],
            desavilitar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100;
        },
        disminuirSaldo(valor){
            if (this.cantidad === 0) {
                this.desavilitar = true;
                alert('Tu saldo es de cero')
                return
            }
            this.cantidad = this.cantidad - valor;
        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad<500 ? 'text-danger' : 'text-success'
        }
    }
})