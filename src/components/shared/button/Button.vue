<template>
    <button @click="sendAction()" class="button" :class="buttonStyle" :type="type"> {{ title }}</button>
</template>

<script>
export default {
    props: {
        type: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        confirm: Boolean,
        attrStyle: String
    },

    methods: {
        sendAction() {
            if (this.confirm) {
                if (confirm('Confirm action?')) {
                    this.$emit('activeButton')
                }
                return;
            }
            this.$emit('activeButton')
        }
    },

    computed: {
        buttonStyle() {
            if (this.attrStyle == 'default' || !this.attrStyle) return 'button-default'
            if (this.attrStyle == 'danger') return 'button-danger'
        }
    }
}
</script>

<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-default {
        background: darkcyan;
        color: white;
    }
</style>
