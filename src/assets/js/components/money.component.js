(function(Vue, VMasker){

    'use strict';

    Vue.component('input-money', {
        template: '<input class="step__input" type="text" v-model="value" v-on:input="onChange">',
        data: function(){
            return {
                value: 0
            };
        },
        methods: {
            onChange: function(){
                this.$emit('change', this.$data.value);
            }
        },
        mounted: function(){

            VMasker(this.$el).maskMoney({
                precision: 2,
                separator: ',',
                delimiter: '.',
                zeroCents: true
            });
        }
    });

})(Vue, VMasker);
