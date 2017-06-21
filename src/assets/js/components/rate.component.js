(function(Vue, VMasker){
    'use strict';

    Vue.component('input-rate', {
        template: '<input class="step__input" type="text" v-model="value" v-on:input="onChange">',
        data: function() {
            return {
                value: ''
            };
        },
        methods: {
            onChange() {
                this.$emit('change', this.$data.value);
            }
        },
        mounted: function(){
            VMasker(this.$el).maskPattern('99999');
        }
    });

})(Vue, VMasker);
