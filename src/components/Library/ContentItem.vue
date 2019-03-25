<template>
    <button
        type="button"
        class="card-cuntom"
        :class="{'card-selected':selected,'card-normal':!selected}"
        @click.stop="clicked"
    >
        <div class="card-body" style="padding:1em 1em 0 1em">
            <span class="badge-cuntom badge-fb">{{findzh()}}</span>
            <span v-if="value.type=='FB'">
                <span
                    v-for="item in value.content"
                    :key="item.id"
                    :class="{'blank':(item.substr(0,1)=='@'),'plain':(item.substr(0,1)!='@')}"
                >{{item.replace('@','')}}</span>
            </span>
        </div>
        <div class="label-id-wrapper">
            <span class="label-id" @click.stop="advanced">ID:&nbsp;{{value.identifier}}</span>
        </div>
    </button>
</template>

<script>
export default {
    name: "ContentItem",
    props: ["value"],
    data: function() {
        return {
            selected: false,
            idclicked: false,
            en: ["SC", "MC", "TF", "FB", "TQ", "SA", "EQ"],
            zh: ["单选", "多选", "判断", "填空", "翻译", "简答", "问答"]
        };
    },
    methods: {
        findzh: function() {
            for (let i = 0; i < this.en.length; i++) {
                if (this.en[i] === this.value.type) {
                    return this.zh[i];
                }
            }
            return "???.";
        },
        clicked: function() {
            this.selected = !this.selected;
            this.$emit("select", {
                selected: this.selected,
                identifier: this.value.identifier
            });
        },
        advanced: function() {
            //
        }
    }
};
</script>

<style scoped>
.plain {
    border: none;
    color: var(--main-color);
    font-weight: normal;
}
.blank {
    margin: 0 0.25em;
    padding: 0 0.25em;
    font-weight: bold;
    color: var(--primary-color);
    border-bottom: 1px solid var(--main-color);
}
.badge-cuntom {
    margin-right: 0.6em;
    border-radius: 0.6em;
    color: var(--back-color);
    padding: 0.25em 0.5em;
    font-size: 0.75em;
    background: var(--main-color);
}
.badge-fb {
    background: var(--primary-color);
    color: white;
}
.card-cuntom {
    margin: 1em 0;
    outline: none;
    border-radius: 0.5em;
    border: 1px solid #eee;
    text-align: justify;
    margin: 0.75em 0.5em;
    padding: 0.25em 0.5em;
    padding-bottom: 0;
    transition: all 0.25s;
}

.card-normal {
    background: var(--back-color);
}
.card-normal:hover {
    border: 1px solid transparent;
    box-shadow: 0 0.2em 2em 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
}

.card-selected {
    border: 1px solid transparent;
    background: var(--primary-opcity-color);
    transform: scale(1);
    box-shadow: none;
    opacity: 0.8;
}

.col-custom {
    text-align: end;
    vertical-align: middle;
}
.label-id-wrapper {
    width: calc(100% - 0.75em);
    text-align: right;
    padding: 0;
    margin: 0;
}
.label-id {
    display: inline-block;
    font-size: 18px;
    border-radius: 10px;
    padding: 1px 10px;
    margin: 0;
    background: none;
    color: rgba(0, 0, 0, 0.15);
    -webkit-transform-origin-x: 100%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}
.label-id:hover {
    background: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.8);
}
</style>