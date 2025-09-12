<script setup>
const props = defineProps({
    member: {
        type: Object,
        required: true,
        default: () => [
            {
                name: "Sarah Williams",
                isComiteMember: false,
                rol: "",
                img: "https://picsum.photos/seed/sarah/600/600",
                CurrentOcupation: "Frontend Dev",
                TechStack: ["Vue", "Tailwind"],
                Education: "Ing. Sistemas",
                cv: "",
                ContactMedia: ["https://twitter.com"],
            },
            {
                name: "David Miller",
                isComiteMember: false,
                rol: "",
                img: "https://picsum.photos/seed/david/600/600",
                CurrentOcupation: "Backend Dev",
                TechStack: ["Go", "Postgres"],
                Education: "Ing. Software",
                cv: "",
                ContactMedia: [],
            },
            {
                name: "Emily Johnson",
                isComiteMember: false,
                rol: "",
                img: "https://picsum.photos/seed/emily/600/600",
                CurrentOcupation: "Data Analyst",
                TechStack: ["SQL", "dbt"],
                Education: "Lic. Matemáticas",
                cv: "",
                ContactMedia: [],
            },
            {
                name: "Jillie Bernard",
                isComiteMember: false,
                rol: "",
                img: "https://picsum.photos/seed/jillie/600/600",
                CurrentOcupation: "UX Designer",
                TechStack: ["Figma"],
                Education: "Diseño",
                cv: "",
                ContactMedia: [],
            },
        ],
    },
});
</script>

<template>
    <div class="card">
        <img :src="member.img" :alt="member.name" class="avatar" />
        <div class="body">
            <header class="head">
                <h3 class="name">{{ member.name }}</h3>
                <span v-if="member.rol" class="role">{{ member.rol }}</span>
            </header>

            <p v-if="member.CurrentOcupation" class="ocup">
                {{ member.CurrentOcupation }}
            </p>

            <ul v-if="member.TechStack?.length" class="tags">
                <li v-for="(t, i) in member.TechStack" :key="i" class="tag">{{ t }}</li>
            </ul>

            <p v-if="member.Education" class="edu">{{ member.Education }}</p>

            <div class="links" v-if="member.ContactMedia?.length">
                <a v-for="(l, i) in member.ContactMedia" :key="i" :href="l" target="_blank" rel="noopener">
                </a>
            </div>

            <a v-if="member.cv" :href="member.cv" target="_blank" rel="noopener" class="cv-btn">Ver CV</a>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 16px;
    display: grid;
    grid-template-columns: 96px 1fr;
    gap: 16px;
    color: white;
}

.avatar {
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 12px;
}

.head {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
}

.name {
    font-size: 1.1rem;
    font-weight: 700;
}

.role {
    background: rgba(255, 255, 255, 0.08);
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 0.8rem;
}

.ocup,
.edu {
    opacity: 0.9;
    margin: 6px 0;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 8px 0;
}

.tag {
    padding: 4px 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.07);
    font-size: 0.8rem;
}

.links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 6px;
}

.links a {
    color: #cfd8ff;
    text-decoration: underline;
}

.cv-btn {
    margin-top: 10px;
    display: inline-block;
    background: #fff;
    color: #0f1220;
    padding: 6px 12px;
    border-radius: 10px;
    font-weight: 600;
}

@media (max-width: 540px) {
    .card {
        grid-template-columns: 1fr;
        text-align: left;
    }

    .avatar {
        width: 100%;
        height: 180px;
    }
}
</style>
