<script>
export default {
    data() {
        return {
            fromTS: '2024-01-01T00:00',
            toTS: (new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('T')[0]) + 'T23:59',
        }
    },
    methods: {
        truncate(str, max) {
            return str.length > max ? str.substr(0, max - 1) + '...' : str;
        },
        removeNote(ts) {
            this.$store.commit('remove_note', ts);
        }
    },
}
</script>

<template>
    <div id="home">
        <router-link to="/new_note" tag="div" class="Btn">Новая заметка</router-link>
        <div id="dateFilter">
            <div>Выберите период </div>
            <label>От: </label>
            <input type="datetime-local" v-model="fromTS" />
            <br>
            <label>До: </label>
            <input type="datetime-local" v-model="toTS" />
            <br>
        </div>
        <div id="notes">
            <div v-for="(note, key, index) in this.$store.state.notes" class="Note">
                <div v-if="((new Date(fromTS)).getTime() <= +key) && (+key <= (new Date(toTS)).getTime())"
                    :style="{ paddingLeft: '0.5rem' }">
                    <router-link :to="{ name: 'Note', params: { ts: key, note: note } }" tag="div" class="Title">
                        {{ note.title }}
                    </router-link>
                    <div class="Time">{{ (new Date(+key)).toLocaleString('ru-RU') }}</div>
                    <div class="Content" style="white-space: pre-line">{{ truncate(note.content, 15) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#notes {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.3rem;
}

.Title {
    font-size: 1.3rem;
    font-weight: bold;
}

.Time {
    font-size: 0.8rem;
    color: rgb(75, 75, 75);
}

.Content {
    font-size: 1.2rem;
}

.Note {
    background-color: rgb(255, 249, 223);
}
</style>

<style scoped>
.Title {
    cursor: pointer;
}
</style>