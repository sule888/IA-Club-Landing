<template>
  <div class="main-cont">
    <div class="marquee-track scroll-right">
      <div class="marquee-item " v-for="i in 10" :key="i">
        <span class="icon"><img src="/public/iconCircuit.svg" alt="Robot icon" width="48" height="48" />

        </span>
        <span class="titles">Contactos y Organizadores</span>
      </div>
    </div>
    <section class="contact-section" style="margin:0  5%;">
      <div class="contact-grid">
        <div class="contact-card" v-for="(contact, index) in contacts" :key="index">
          <h3 class="normal-text text-sec-color">{{ contact.name }}</h3>
          <p class="contact-role normal-text">{{ contact.role }}</p>
          <a class="link normal-text text-main-color" :href="`mailto:${contact.email}`">
            {{ contact.email }}
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const contacts = [
  {
    name: "Dra. Manuela Alejandra Zalapa Garibay",
    role: "Coordinadora de la Carrera de Ingeniería Mecánica ",
    email: "manuela.zalapa@uacj.mx "
    
  },
  {
    name: "Dr. Roberto Romero López",
    role: "Jefe del Departamento de Ingeniería Industrial y Manufactura",
    email: "rromero@uacj.mx"
  },
  {
    name: "Dr. Luis Alberto Rodríguez Picón",
    role: "Coordinador de la Maestría en Ingeniería Industrial",
    email: "luis.picon@uacj.mx"
  },
  {
    name: "Dr. Luis Asunción Pérez-Domínguez",
    role: "Coordinador del Doctorado en Tecnología",
    email: "doctorado.tecnologia@uacj.mx"
  },
  {
    name: "Dr. Iván Juan Carlos Pérez Olguín",
    role: "Coordinador de la Maestría en Tecnología",
    email: "ivan.perez@uacj.mx"
  },
  {
    name: "Dr. Javier Molina Salazar",
    role: "Coordinador de la Maestría en Ingeniería en Manufactura",
    email: "jamolina@uacj.mx"
  }
]
</script>
<style scoped>
.main-cont {
  display: flex;
  flex-direction: column;
  gap: 72px;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 64px;
  animation: scroll-right 40s linear infinite;

}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 48px;

}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
}

.contact-section {
  background-color: var(--backgorund-color);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.contact-card {
  border: 2px solid #4F9D8D;
  border-radius: 12px;
  padding: 32px;
  background-color: transparent;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-25px);
}

.contact-name {
  color: #b088de;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.contact-role {
  margin-bottom: 1rem;
}

</style>
