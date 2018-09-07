<template>
    <div>
        <header class="news-header">
            Hello {{name}}!
        </header>
        <div class="news-content"><NewsList></NewsList></div>
        
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue';
import NewsList from '../components/NewsList/index.vue';

export default Vue.extend({
    data() {
        return {
            name: 'hacker news'
        }
    },
    components: {
        NewsList
    }
})
</script>

<style lang="less">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

.news-header {
    width: 100%;
    background: #fff;
    padding: 15px;
    position: fixed;
    top: 0;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}
.news-content {
    margin: 56px 0 0 0;
}
</style>

