<script>
export default {
    data() {
        return {
            showError: false,
            note_content: '',
            title: '',
        }
    },
    methods: {
        checkInputData(text) {
            let filterSpaces = text.replace(/\s+/g, '');
            if (filterSpaces.length == 0) {
                return false;
            } else {
                return true;
            }
        },
        saveAndNavigate(ts, title, content) {
            if (this.checkInputData(title) && this.checkInputData(content)) {
                this.$store.commit('add_note', { ts: ts, title: title, content: content });
                this.$router.push('/');
                this.showError = false;
            } else {
                this.showError = true;
            }
        }
    },
}
</script>

<template>
    <div id="newNote">
        <label>Наименование заметки:</label>
        <br>
        <input type="text" v-model="title" placeholder="Введите заголовок заметки" size="30" />
        <br>

        <label>Содержание заметки:</label>
        <br>
        <textarea v-model="note_content" placeholder="Введите содеражние заметки" cols="29"></textarea>
        <br>

        <router-link to="/" tag="div" class="Btn">Назад</router-link>
        <div class="Btn" @click="saveAndNavigate(Date.now(), title, note_content)">Сохранить заметку</div>
        <div v-if="showError" class="ErrorMessage">Ошибка! Введите данные в поле заголовка и/или содержания</div>
    </div>
</template>
