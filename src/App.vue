<style>

</style>
<template>
    <div>
        <p v-for="link in linkList" :key="link.name">
            <a :href="link.url" target="_blank">{{ link.name }}</a>
        </p>
    </div>
</template>

<script>

export default {
    head: {
        title: 'Andrijor\'s Github Page'
    },
    data() {
        return {
            // LIST FOR ALL SOCAIL MEDIA LINKS
            linkList: [
                {
                    name: 'Github',
                    url: 'https://github.com/andrijor',
                },
            ],
            //profileImg: profileImage
        }
    },

}
</script>