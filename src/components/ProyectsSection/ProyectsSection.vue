<!--! USO 
 <ProyectsSection
  :projects="projects"
  :socials="[
    { label: 'Facebook', href: '#facebook', icon: 'logos:facebook' },
    { label: 'Discord', href: '#discord', icon: 'skill-icons:discord' },
    { label: 'Whatsapp', href: '#whatsapp', icon: 'logos:whatsapp-icon' },
    { label: 'Github', href: '#github', icon: 'icon-park:github' },
    { label: 'Linkedin', href: '#linkedin', icon: 'skill-icons:linkedin' },
  ]"
/>
 -->


<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import ProyectCard from "./ProyectCard.vue";

/**
 * Props esperadas:
 * projects: Array<{
 *   id: string|number,
 *   title: string,
 *   image?: string,
 *   area?: { label: string, icon: string },
 *   description?: string,
 *   stack?: Array<{ icon: string, label: string, color?: string }>,
 *   clientName?: string,
 *   details?: {
 *     longDescription?: string,
 *     stacksByArea?: Record<'front'|'back'|'db'|'deploy'|'ml'|'devops'|string,
 *                       Array<{ icon: string, label: string, color?: string }>>
 *   }
 * }>
 * socials?: Array<{ label: string, href: string, icon: string }>
 */
const props = defineProps({
    projects: {
        type: Array,
        default: () => ([
            {
                id: 1,
                title: "Plataforma de Telemedicina",
                image: "https://qready.quironprevencion.com/wp-content/uploads/2023/11/telemedicina.jpg",
                area: { label: "Salud", icon: "mdi:stethoscope" },
                description: "Un sistema de videollamadas y gestión de citas médicas.",
                stack: [
                    { icon: "logos:vue", label: "Vue.js", color: "#42b883" },
                    { icon: "logos:nodejs-icon", label: "Node.js", color: "#68a063" },
                    { icon: "logos:mongodb-icon", label: "MongoDB", color: "#4DB33D" },
                ],
                clientName: "Clínica Salud+",
                details: {
                    longDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Este proyecto conecta doctores y pacientes en un solo portal, con gestión de citas, recetas electrónicas y chat seguro.",
                    stacksByArea: {
                        front: [{ icon: "logos:vue", label: "Vue.js", color: "#42b883" }],
                        back: [{ icon: "logos:nodejs-icon", label: "Node.js", color: "#68a063" }],
                        db: [{ icon: "logos:mongodb-icon", label: "MongoDB", color: "#4DB33D" }],
                        deploy: [{ icon: "logos:vercel-icon", label: "Vercel", color: "#000000" }],
                    },
                },
            },
            {
                id: 2,
                title: "Plataforma de Agricultura Inteligente",
                image: "https://cdn.wikifarmer.com/images/thumbnail/2023/04/agricultura-de-precision-tecnologias-1200x630.jpg",
                area: { label: "Agricultura", icon: "mdi:leaf" },
                description: "Monitoreo de cultivos con sensores IoT y analítica en tiempo real.",
                stack: [
                    { icon: "logos:python", label: "Python", color: "#3776AB" },
                    { icon: "logos:django-icon", label: "Django", color: "#092e20" },
                    { icon: "logos:postgresql", label: "PostgreSQL", color: "#336791" },
                ],
                clientName: "AgroTech Solutions",
                details: {
                    longDescription:
                        "Este proyecto integra sensores de humedad y temperatura en el campo, enviando datos a un servidor central con dashboards de visualización para agricultores.",
                    stacksByArea: {
                        front: [{ icon: "logos:react", label: "React", color: "#61dafb" }],
                        back: [{ icon: "logos:django-icon", label: "Django", color: "#092e20" }],
                        db: [{ icon: "logos:postgresql", label: "PostgreSQL", color: "#336791" }],
                        ml: [{ icon: "logos:python", label: "Python", color: "#3776AB" }],
                    },
                },
            },
            {
                id: 3,
                title: "Plataforma Educativa Escolar",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-DySklqMuwIoJEhd5zGREXBMTfmxf536Eg&s",
                area: { label: "Educación", icon: "mdi:school-outline" },
                description: "Sistema de cursos en línea con gamificación y foros estudiantiles.",
                stack: [
                    { icon: "logos:typescript-icon", label: "TypeScript", color: "#3178c6" },
                    { icon: "logos:nextjs-icon", label: "Next.js", color: "#000000" },
                    { icon: "logos:mysql", label: "MySQL", color: "#4479A1" },
                ],
                clientName: "Colegio Nacional",
                details: {
                    longDescription:
                        "Un LMS completo con gamificación, insignias y foros de discusión. Permite a profesores subir cursos, tareas y gestionar evaluaciones.",
                    stacksByArea: {
                        front: [{ icon: "logos:nextjs-icon", label: "Next.js", color: "#000000" }],
                        back: [{ icon: "logos:typescript-icon", label: "TypeScript", color: "#3178c6" }],
                        db: [{ icon: "logos:mysql", label: "MySQL", color: "#4479A1" }],
                        deploy: [{ icon: "logos:netlify", label: "Netlify", color: "#00C7B7" }],
                    },
                },
            },
        ])
    },
    socials: {
        type: Array,
        default: () => ([

            { label: 'Facebook', href: '#facebook', icon: 'logos:facebook' },
            { label: 'Discord', href: '#discord', icon: 'skill-icons:discord' },
            { label: 'Whatsapp', href: '#whatsapp', icon: 'logos:whatsapp-icon' },
            { label: 'Github', href: '#github', icon: 'icon-park:github' },
            { label: 'Linkedin', href: '#linkedin', icon: 'skill-icons:linkedin' },
        ])
    }
});

const showContact = ref(false);
const showProcess = ref(false);
const active = ref(null);

const loremLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus. Integer vehicula, nulla a volutpat suscipit, odio nisl accumsan metus, vitae mattis lorem lorem non urna.";

const process = [
    { icon: "mdi:account-voice", title: "Reunión inicial", text: "Lorem ipsum: entendemos contexto, metas y restricciones." },
    { icon: "mdi:clipboard-text", title: "Planificación", text: "Backlog y alcance; cronograma y puntos de control." },
    { icon: "mdi:code-braces", title: "Desarrollo", text: "Sprints cortos; calidad, pruebas y CI básica." },
    { icon: "mdi:progress-check", title: "Entregas parciales", text: "Demos periódicas para retroalimentación temprana." },
    { icon: "mdi:wrench-cog", title: "Ajustes finales", text: "Correcciones y hardening antes de la salida." },
    { icon: "mdi:rocket-launch", title: "Entrega final", text: "Despliegue, handoff y documentación breve." },
];

const services = [
    { icon: "mdi:lightbulb-on-outline", title: "Consultoría técnica", text: "Evaluación rápida de viabilidad y arquitectura." },
    { icon: "mdi:cube-scan", title: "Prototipado", text: "MVPs de baja/alta fidelidad para validar ideas." },
    { icon: "mdi:shield-search", title: "Auditoría de código", text: "Revisión enfocada en calidad y seguridad." },
    { icon: "mdi:handshake-outline", title: "Mentoría & capacitación", text: "Sesiones guiadas para tu equipo interno." },
    { icon: "mdi:palette-outline", title: "UX/UI review", text: "Heurísticas y microinteracciones esenciales." },
    { icon: "mdi:cloud-sync-outline", title: "Setup en la nube", text: "Pipelines y despliegues reproducibles." },
];

const areaLabels = {
    front: "Frontend",
    back: "Backend",
    db: "Base de datos",
    deploy: "Despliegue",
    devops: "DevOps",
    ml: "ML/IA"
};

function openDetails(p) { active.value = p; }
function closeDetails() { active.value = null; }
</script>


<template>
    <section class="projects-section">
        <div class="grid">
            <ProyectCard v-for="p in projects" :key="p.id" />
            <!-- <article v-for="p in projects" :key="p.id" class="card">
                <div class="thumb" role="img" :aria-label="`Imagen de ${p.title}`">
                    <img v-if="p.image" :src="p.image" :alt="p.title" />
                    <div v-else class="thumb-fallback">
                        <Icon icon="mdi:image-multiple-outline" class="fallback-icon" aria-hidden="true" />
                    </div>
                </div>

                <h3 class="card-title">{{ p.title }}</h3>

                <div class="area-chip">
                    <Icon :icon="p.area?.icon || 'mdi:briefcase-outline'" class="area-icon" aria-hidden="true" />
                    <span class="normal-text">{{ p.area?.label || 'General' }}</span>
                </div>

                <p class="normal-text desc">
                    {{ p.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }}
                </p>

                <div class="stack">
                    <span class="normal-text-bold stack-label">Stack:</span>
                    <div class="stack-icons">
                        <Icon v-for="(t, i) in p.stack || []" :key="i" :icon="t.icon" class="stack-icon"
                            :style="{ color: t.color || 'inherit' }" :title="t.label" aria-hidden="true" />
                    </div>
                </div>

                <div class="client normal-text">
                    <Icon icon="mdi:domain" class="client-icon" aria-hidden="true" />
                    {{ p.clientName || 'Cliente confidencial' }}
                </div>

                <div class="card-actions">
                    <button class="main-btn ghost" @click="openDetails(p)">
                        <Icon icon="mdi:information-outline" class="btn-icon" aria-hidden="true" />
                        Conoce más del proyecto
                    </button>
                </div>
            </article> -->
        </div>
        <div class="actions">


            <button class="main-btn " @click="showProcess = !showProcess">
                <Icon icon="mdi:timeline-outline" class="btn-icon" aria-hidden="true" />
                Conoce nuestro proceso
            </button>
        </div>
        <div v-if="showProcess" class="process">
            <ol class="timeline">
                <li v-for="(step, idx) in process" :key="idx" class="timeline-item">
                    <div class="step-icon-wrap">
                        <Icon :icon="step.icon" class="step-icon" aria-hidden="true" />
                    </div>
                    <div class="step-body">
                        <div class="step-title normal-text-bold">{{ step.title }}</div>
                        <div class="step-text normal-text">{{ step.text }}</div>
                    </div>
                </li>
            </ol>
        </div>
        <div class="more-services">
            <h4 class="subtitles">Servicios relacionados</h4>
            <div class="services-grid">
                <div v-for="(s, i) in services" :key="i" class="service-card">
                    <Icon :icon="s.icon" class="service-icon" aria-hidden="true" />
                    <div class="service-title normal-text-bold">{{ s.title }}</div>
                    <div class="service-text normal-text">{{ s.text }}</div>
                </div>
            </div>
        </div>
        <div class="contact-card">
            <h1 class="subtitles text-sec-color"> Contactanos</h1>
            <p class="normal-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit similique rerum incidunt ipsum
                possimus, dicta reiciendis atque tempora aut et earum ipsa nam consequuntur corporis? Nostrum
                accusantium sed quo.
            </p>

            <div class="socials">
                <a v-for="(s, i) in socials" :key="i" :href="s.href" class="social-link" :aria-label="s.label"
                    target="_blank" rel="noopener">
                    <Icon :icon="s.icon" class="social-icon" aria-hidden="true" />
                    <span class="normal-text">{{ s.label }}</span>
                </a>
            </div>
        </div>
        <div v-if="active" class="modal-backdrop" @click.self="closeDetails">
            <div class="modal">
                <header class="modal-header">
                    <h3 class="subtitles">{{ active.title }}</h3>
                    <button class="btn-close" @click="closeDetails" aria-label="Cerrar">
                        <Icon icon="mdi:close" />
                    </button>
                </header>

                <section class="modal-body">
                    <p class="normal-text">
                        {{ active.details?.longDescription || loremLong }}
                    </p>

                    <div class="modal-stack">
                        <div v-for="(arr, area) in active.details?.stacksByArea || {}" :key="area" class="stack-block">
                            <div class="stack-area normal-text-bold">{{ areaLabels[area] || area }}</div>
                            <div class="stack-icons">
                                <Icon v-for="(t, i) in arr" :key="i" :icon="t.icon" class="stack-icon"
                                    :style="{ color: t.color || 'inherit' }" :title="t.label" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="modal-footer">
                    <button class="main-btn" @click="closeDetails">Cerrar</button>
                </footer>
            </div>
        </div>
    </section>
</template>



<style scoped>
.projects-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
}

.actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
}

.main-btn.outline {
    background: transparent;
    color: var(--main-color);
    border: 1px solid var(--main-color);
}

.main-btn.ghost {
    background: transparent;
    color: var(--main-color);
    border: 1px dashed var(--main-color);
}

.btn-icon {
    margin-right: 6px;
    vertical-align: -2px;
    font-size: 18px;
}

/* Contacto */
.contact-card {
    background: transparent;
}

.socials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 8px 12px;
    margin-top: 12px;
}

.social-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 6px;
    background: #f6f8fa;
    text-decoration: none;
    color: #222;
    transition: transform .08s ease, background .18s ease;
}

.social-link:hover {
    background: #eef1f3;
    transform: translateY(-1px);
}

.social-icon {
    font-size: 20px;
}

/* Proceso */
.process {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    margin: 0 0 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .06);
}

.timeline {
    list-style: none;
    margin: 0;
    padding: 0;
}

.timeline-item {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 8px 12px;
    padding: 10px 0;
    position: relative;
}

.timeline-item:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 19px;
    top: calc(100% + 0px);
    width: 2px;
    height: 16px;
    background: #d7dde3;
}

.step-icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #eef1f3;
}

.step-icon {
    font-size: 20px;
    color: var(--main-color);
}

.step-title {
    margin-bottom: 2px;
}

.step-text {
    color: #444;
}

/* Grid de cards */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    margin-top: 8px;
}

.card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .06);
    display: flex;
    flex-direction: column;
}

.thumb {
    width: 100%;
    aspect-ratio: 16/9;
    background: #e3e9ef;
    display: grid;
    place-items: center;
}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumb-fallback {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
}

.fallback-icon {
    font-size: 42px;
    color: #9aa7b2;
}

.card-title {
    font-size: 20px;
    font-weight: 700;
    padding: 12px 12px 4px;
}

.area-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin: 0 12px 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: #f1f4f7;
    color: var(--main-color);
    width: fit-content;
}

.area-icon {
    font-size: 18px;
}

.desc {
    padding: 0 12px 8px;
    color: #444;
}

.stack {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px 12px;
}

.stack-label {
    margin-right: 4px;
}

.stack-icons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.stack-icon {
    font-size: 22px;
}

.client {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px 12px;
    color: #333;
}

.client-icon {
    font-size: 18px;
    color: #666;
}

.card-actions {
    margin-top: auto;
    padding: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

/* Más servicios */
.more-services {
    margin-top: 28px;
}

.services-grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 12px;
}

.service-card {
    background: #fff;
    border-radius: 10px;
    padding: 14px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .06);
}

.service-icon {
    font-size: 24px;
    color: var(--main-color);
    margin-bottom: 6px;
}

.service-title {
    margin-bottom: 4px;
}

/* Modal */
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .35);
    display: grid;
    place-items: center;
    z-index: 50;
}

.modal {
    width: min(920px, 92vw);
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .25);
    display: flex;
    flex-direction: column;
    max-height: 86vh;
    overflow: hidden;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 8px;
    border-bottom: 1px solid #eef1f3;
}

.btn-close {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
}

.btn-close:hover {
    background: #f3f5f7;
}

.modal-body {
    padding: 16px;
    overflow: auto;
}

.modal-footer {
    padding: 12px 16px;
    border-top: 1px solid #eef1f3;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

@media (max-width: 650px) {
    .timeline-item {
        grid-template-columns: 36px 1fr;
    }

    .step-icon-wrap {
        width: 36px;
        height: 36px;
    }
}
</style>
