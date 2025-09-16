<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
    member: { type: Object, required: true }
});

const contacts = computed(() => {
    const list = props.member?.ContactMedia || [];
    return list.map((c) => {
        if (typeof c === "string") return { iconName: "", link: c };
        return { iconName: c.iconName || "", link: c.link || "" };
    }).filter(x => x.link);
});

function iconFor(name = "", link = "") {
    const s = name.toLowerCase();
    if (s.includes("github")) return "mdi:github";
    if (s.includes("linkedin")) return "mdi:linkedin";
    const host = safeHost(link);
    if (host.includes("github")) return "mdi:github";
    if (host.includes("linkedin")) return "mdi:linkedin";
    return "mdi:link-variant";
}

function safeHost(url) {
    try { return new URL(url).hostname; } catch { return ""; }
}
</script>

<template>
    <div class="member-card" tabindex="0">
        <img :src="member.img" :alt="member.name" class="member-img" />

        <div class="member-card-info-base">
            <h3 class="member-name">{{ member.name }}</h3>
            <span v-if="member.rol" class="member-rol mini">{{ member.rol }}</span>
        </div>

        <div class="member-card-back">
            <h4 class="member-card-back-name">{{ member.name }}</h4>

            <p v-if="member.CurrentOcupation" class="member-card-back-ocupation">
                {{ member.CurrentOcupation }}
            </p>

            <ul v-if="member.TechStack?.length" class="member-card-back-tagss">
                <li v-for="(t, i) in member.TechStack" :key="i" class="tag">{{ t }}</li>
            </ul>

            <p v-if="member.Education" class="member-card-back-educ">{{ member.Education }}</p>

            <div v-if="contacts.length" class="member-card-back-contacts">
                <a v-for="(l, i) in contacts" :key="i" :href="l.link" target="_blank" rel="noopener">
                    <Icon :icon="iconFor(l.iconName, l.link)" width="18" height="18" style="vertical-align:-3px;" />
                    <span style="margin-left:6px">{{ safeHost(l.link) || l.iconName }}</span>
                </a>
            </div>

            <a v-if="member.cv" :href="member.cv" target="_blank" rel="noopener" class="member-card-cv">Ver CV</a>
        </div>
    </div>
</template>

<style scoped>
.member-card {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background: white;
    aspect-ratio: 3/4;
    max-width: 280px;
    color: #fff;
    height: 500px;
}

.member-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: saturate(1.05);
}

.member-card-info-base {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    padding: 12px 14px;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .55));
    backdrop-filter: blur(4px);
    display: flex;
    align-items: baseline;
    justify-content: space-between;

}

.member-name {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
}

.member-rol {
    padding: 2px 8px;
    border-radius: 999px;
    font-weight: 700;
    background: rgba(255, 255, 255, .12);
}

.member-card-back {
    position: absolute;
    inset: 0;
    padding: 18px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background:
        linear-gradient(180deg, rgba(5, 10, 25, .9), rgba(5, 10, 25, .96)),
        linear-gradient(transparent 23px, rgba(255, 255, 255, .06) 24px),
        linear-gradient(90deg, transparent 23px, rgba(255, 255, 255, .06) 24px);
    background-size: cover, 24px 24px, 24px 24px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity .18s ease, transform .18s ease;
    pointer-events: none;
}

.member-card:hover .member-card-back,
.member-card:focus-within .member-card-back {
    opacity: 1;
    transform: none;
    pointer-events: auto;
    cursor: pointer;
}

.member-card-back-name {
    margin: 0 0 2px 0;
    font-size: 1.05rem;
    font-weight: 800;
    color: #fff;
}

.member-card-back-ocupation {
    margin: 0;
    color: #c9d3ff;
    opacity: .95;
}

.member-card-back-educ {
    margin: 0;
    color: #b8c1d9;
    opacity: .9;
}

.member-card-back-tagss {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 2px 0 0 0;
    padding: 0;
    list-style: none;
}

.tag {
    font-size: .78rem;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, .08);
    border: 1px solid rgba(255, 255, 255, .1);
}

.member-card-back-contacts {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.member-card-back-contacts a {
    color: var(--background-color);
    text-decoration: none;
    font-weight: 600;
}

.member-card-back-contacts a:hover {
    text-decoration: underline;
}

.member-card-cv {
    margin-top: 2px;
    align-self: start;
    background: #fff;
    color: #0f1220;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 10px;
    text-decoration: none;
}

.member-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .06), 0 0 0 1px rgba(0, 99, 177, .12);
}

.member-card:hover .member-img {
    transform: scale(1.02);
    transition: transform .25s ease;
}

@media (max-width: 560px) {
    .member-card {
        aspect-ratio: 4/5;
    }
}
</style>
