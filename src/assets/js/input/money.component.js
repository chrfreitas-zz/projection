(function(Vue){

    'use strict';

    Vue.component('input-money', {
        template: '<input class="step__input" type="text" v-model="value" v-on:input="onChange">',
        data: function(){
            return {
                value: ''
            };
        },
        methods: {
            onChange: function(){
                this.$emit('change', this.$data.value);
            }
        }
    });

})(Vue);
