<template>
  <div class="marquee-container">
    <div class="marquee-track scroll-right">
      <div class="marquee-item" v-for="i in 10" :key="i">
        <span class="icon"
          ><img src="/public/iconCircuit.svg" alt="Robot icon" width="48" height="48" />

        </span>
        <span class="text">Contactos y Organizadores</span>
      </div>
    </div>
     <section class="contact-section" style="margin:0  5%;">
    <div class="contact-grid">
      <div class="contact-card" v-for="(contact, index) in contacts" :key="index">
        <h3 class="contact-name">{{ contact.name }}</h3>
        <p class="contact-role">{{ contact.role }}</p>
        <a class="contact-email" :href="`mailto:${contact.email}`">
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
.marquee-container {
  overflow: hidden;
  width: 100%;
  background: var(--backgorund-color);
  padding: 1rem 0;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 5rem; 
  animation: scroll-right 40s linear infinite;
  margin-bottom: 150px;

}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.text {
  color: #000;
  font-size: 48px;
}
.contact-section {

background-color: var(--backgorund-color);}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-card {
  border: 2px solid #4F9D8D;
  border-radius: 12px;
  padding: 1.5rem;
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
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
}

.contact-email {
  color: #4F9D8D;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
