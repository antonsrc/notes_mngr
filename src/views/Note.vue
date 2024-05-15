<script>
export default {
    data() {
        return {
            showError: false,
            note_content: '',
            title: '',
        }
    },
    props: ['note', 'ts'],
    methods: {
        removeNote(ts) {
            this.$store.commit('remove_note', ts);
            this.$router.push('/');
        }
    },
}
</script>

<template>
    <div>
        <div class="Note">
            <div class="Title">{{ note.title }}</div>
            <div class="Time">{{ (new Date(+ts)).toLocaleString('ru-RU') }}</div>
            <div class="Content" style="white-space: pre-line">{{ note.content }}</div>
        </div>
        <div class="Btn" @click="removeNote(ts)">Удалить заметку</div>
        <router-link to="/" tag="div" class="Btn">Назад</router-link>
    </div>
</template>
