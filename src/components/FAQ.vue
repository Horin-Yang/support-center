<template>
    <main class="faq">
        <h1>Frenquently Asked Questions</h1>

        <Loading v-if="loading" />

        <div class="error" v-if="error">
            Can't load the questions
        </div>

        <section class="list">
            <article v-for="question of questions" :key="question.title">
                <h2 v-html="question.title"></h2>
                <p v-html="question.content"></p>
            </article>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            questions: [],
            error: null,
            loading: false,
        }
    },

    async created () {
        this.loading =true
        try {
            this.questions = await this.$fetch('questions')
        }
        catch(e) {
            this.error = e
        }
        this.loading = false
    },
}
</script>
