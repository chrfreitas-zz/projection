(function(Vue, VMasker){
    'use strict';

    Vue.component('input-rate', {
        template: '<input class="step__input" type="text" v-on:keyup.enter="onNext" v-model="value" v-on:input="onChange">',
        data: function() {
            return {
                value: ''
            };
        },
        methods: {
            onChange() {
                this.$emit('change', this.$data.value);
            },
            onNext(){
                this.$emit('next');
            }
        },
        mounted: function(){
            VMasker(this.$el).maskPattern('99999');
        }
    });

})(Vue, VMasker);
