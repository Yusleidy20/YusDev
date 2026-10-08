import React from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiHeart,
  FiLayout,
  FiMessageCircle,
  FiRefreshCw,
  FiShield,
  FiShoppingBag,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";

const whatsappLink = (message: string) =>
  `https://wa.me/573212684025?text=${encodeURIComponent(message)}`;

const advantages = [
  {
    icon: <FiSmartphone aria-hidden="true" />,
    title: "Se ve bien en cualquier pantalla",
    description: "Una experiencia cómoda para tus clientes desde celular, tablet o computadora.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Rápida y fácil de usar",
    description: "Páginas ágiles, claras y pensadas para que encontrar lo importante sea sencillo.",
  },
  {
    icon: <FiHeart aria-hidden="true" />,
    title: "Hecha para tu negocio",
    description: "Diseño y contenido alineados con tus objetivos, tu marca y tus clientes.",
  },
  {
    icon: <FiMessageCircle aria-hidden="true" />,
    title: "Acompañamiento cercano",
    description: "Comunicación directa y orientación durante cada etapa del proyecto.",
  },
];

const services = [
  {
    icon: <FiLayout aria-hidden="true" />,
    number: "01",
    title: "Web para tu negocio",
    description:
      "Presenta tus servicios, experiencia y formas de contacto en un sitio profesional que genere confianza desde la primera visita.",
    tags: ["Sitio corporativo", "Presencia digital"],
  },
  {
    icon: <FiArrowUpRight aria-hidden="true" />,
    number: "02",
    title: "Landing page",
    description:
      "Una página enfocada en una sola meta: recibir consultas, agendar citas o impulsar una oferta con llamados a la acción claros.",
    tags: ["Campañas", "Más consultas"],
  },
  {
    icon: <FiShoppingBag aria-hidden="true" />,
    number: "03",
    title: "Tienda en línea",
    description:
      "Muestra tus productos, facilita el proceso de compra y permite que tus clientes exploren tu catálogo desde cualquier lugar.",
    tags: ["Catálogo", "Ventas en línea"],
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    number: "04",
    title: "Mejoras y mantenimiento",
    description:
      "Actualizamos tu página, mejoramos su presentación y te ayudamos a mantenerla al día para que siga funcionando como debe.",
    tags: ["Rediseño", "Soporte"],
  },
];

const steps = [
  {
    number: "01",
    title: "Nos cuentas tu idea",
    description: "Hablamos de tu negocio, tus clientes y lo que quieres conseguir con tu página.",
  },
  {
    number: "02",
    title: "Definimos el plan",
    description: "Te proponemos el alcance, los tiempos y la inversión antes de empezar.",
  },
  {
    number: "03",
    title: "Diseñamos y construimos",
    description: "Creamos tu sitio y revisamos contigo cada detalle para que represente tu negocio.",
  },
  {
    number: "04",
    title: "Publicamos y te acompañamos",
    description: "Dejamos tu web lista y te explicamos cómo usarla y qué sigue.",
  },
];

const plans = [
  {
    name: "Plan Emprendedor",
    description: "Para empezar a mostrar tu negocio en internet.",
    features: [
      "Página de inicio con información esencial",
      "Diseño adaptable a celular",
      "Botón directo a WhatsApp",
      "Formulario de contacto",
      "Orientación para publicar tu web",
    ],
    featured: false,
  },
  {
    name: "Plan PYME",
    description: "Una presencia completa para atraer y atender clientes.",
    features: [
      "Sitio de varias secciones",
      "Diseño personalizado para tu marca",
      "Servicios, preguntas frecuentes y contacto",
      "Enlaces a redes sociales y WhatsApp",
      "Configuración básica para buscadores",
      "Acompañamiento durante el lanzamiento",
    ],
    featured: true,
  },
  {
    name: "Plan a tu medida",
    description: "Para tiendas en línea y proyectos con necesidades especiales.",
    features: [
      "Alcance definido según tus objetivos",
      "Catálogo o funcionalidades a medida",
      "Integraciones según los requisitos",
      "Diseño adaptable a celular",
      "Propuesta personalizada de soporte",
    ],
    featured: false,
  },
];

const projectIdeas = [
  {
    label: "Ejemplo de solución",
    title: "Negocio local",
    problem: "Los clientes no encuentran fácilmente los servicios, horarios o ubicación.",
    solution: "Una web clara con servicios, información útil y contacto directo por WhatsApp.",
    outcome: "Facilitar las consultas y ayudar a que más personas den el siguiente paso.",
  },
  {
    label: "Ejemplo de solución",
    title: "Profesional independiente",
    problem: "Su experiencia está dispersa y es difícil explicar qué ofrece.",
    solution: "Una página personal que reúne su propuesta, experiencia, testimonios y agenda de contacto.",
    outcome: "Transmitir confianza y convertir visitas en nuevas oportunidades.",
  },
  {
    label: "Ejemplo de solución",
    title: "Marca de productos",
    problem: "El catálogo solo se comparte por mensajes y toma tiempo responder cada consulta.",
    solution: "Una tienda en línea con productos organizados y un recorrido de compra sencillo.",
    outcome: "Mostrar el catálogo en todo momento y simplificar la compra.",
  },
];

const faqs = [
  {
    question: "¿Necesito tener dominio y hosting antes de empezar?",
    answer:
      "No. Te orientamos para elegirlos y podemos incluir su configuración dentro de la propuesta. El dominio y el hosting se cotizan según tus necesidades y normalmente se pagan directamente al proveedor.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi página?",
    answer:
      "Depende del alcance, el contenido y las funcionalidades. Después de conocer tu proyecto te compartimos un plazo realista y las etapas de entrega, para que sepas qué esperar desde el inicio.",
  },
  {
    question: "¿Podré actualizar la información por mi cuenta?",
    answer:
      "Sí, podemos preparar una solución acorde a lo que necesites y explicarte cómo actualizar los contenidos principales. Si prefieres delegarlo, también podemos conversar sobre opciones de mantenimiento.",
  },
  {
    question: "¿Qué información debo tener para comenzar?",
    answer:
      "Con una idea de tus servicios, el tipo de cliente al que quieres llegar y tus datos de contacto podemos empezar. Si aún no tienes textos o imágenes, te ayudamos a definir qué hace falta.",
  },
  {
    question: "¿El precio incluye dominio, hosting y cambios futuros?",
    answer:
      "Cada propuesta detalla qué incluye para evitar sorpresas. Dominio, hosting, funcionalidades especiales y mantenimiento pueden variar según el proyecto; revisamos contigo las opciones antes de contratar.",
  },
];

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />

      <section className="trust-strip" aria-label="Características del servicio">
        <span><FiCheck aria-hidden="true" /> Atención personalizada</span>
        <span><FiCheck aria-hidden="true" /> Diseño adaptable a celular</span>
        <span><FiCheck aria-hidden="true" /> Propuesta clara antes de empezar</span>
      </section>

      <section className="section value-section" id="nosotros">
        <div className="section-heading">
          <p className="eyebrow">Tu negocio merece una buena primera impresión</p>
          <h2>Una web que trabaja para <span>hacer crecer tu negocio.</span></h2>
          <p className="section-intro">
            No se trata solo de estar en internet. Creamos una presencia digital clara
            que ayuda a tus clientes a entender lo que ofreces y saber cómo contactarte.
          </p>
        </div>
        <div className="advantage-grid">
          {advantages.map((item) => (
            <article className="advantage-card" key={item.title}>
              <span className="icon-tile">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="servicios">
        <div className="section-heading">
          <p className="eyebrow">Soluciones digitales para cada etapa</p>
          <h2>Lo que tu negocio necesita, <span>sin complicaciones.</span></h2>
          <p className="section-intro">
            Desde tu primera página hasta una tienda en línea: encontramos la solución
            que tiene sentido para tus objetivos.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="icon-tile">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="section-heading">
          <p className="eyebrow">Así de fácil</p>
          <h2>De la primera idea <span>a tu web en línea.</span></h2>
          <p className="section-intro">
            Un proceso cercano y transparente. Siempre sabrás en qué etapa estamos y qué sigue.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href="#contacto">Cuéntanos tu idea <FiArrowDown aria-hidden="true" /></a>
      </section>

      <section className="section plans-section" id="planes">
        <div className="section-heading">
          <p className="eyebrow">Opciones para empezar</p>
          <h2>Un plan para cada <span>tipo de proyecto.</span></h2>
          <p className="section-intro">
            Estos planes son un punto de partida. Recibe una cotización gratuita y
            ajustada a lo que realmente necesitas.
          </p>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="plan-badge">Más elegido</span>}
              <p className="plan-label">YusDev · {plan.name}</p>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><FiCheck aria-hidden="true" /> {feature}</li>
                ))}
              </ul>
              <a
                className={plan.featured ? "button button-primary plan-button" : "button button-outline plan-button"}
                href={whatsappLink(`Hola YusDev, me interesa cotizar el ${plan.name}. ¿Podemos conversar?`)}
                target="_blank"
                rel="noreferrer"
              >
                Cotizar este plan <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="plans-note"><FiShield aria-hidden="true" /> Sin compromiso: primero conversamos y recibes una propuesta clara.</p>
      </section>

      <section className="section work-section" id="proyectos">
        <div className="section-heading">
          <p className="eyebrow">Ideas con propósito</p>
          <h2>Una buena web empieza <span>por entender el reto.</span></h2>
          <p className="section-intro">
            Cada negocio tiene necesidades distintas. Estos ejemplos ilustran cómo
            planteamos una solución; no son casos de clientes ni resultados atribuidos.
          </p>
        </div>
        <div className="work-grid">
          {projectIdeas.map((project, index) => (
            <article className="work-card" key={project.title}>
              <div className={`work-visual work-visual-${index + 1}`} aria-hidden="true">
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="visual-line visual-line-long" />
                <span className="visual-line" />
                <span className="visual-button" />
                <span className="visual-block" />
              </div>
              <div className="work-card-content">
                <p className="work-label">{project.label}</p>
                <h3>{project.title}</h3>
                <dl>
                  <div><dt>El reto</dt><dd>{project.problem}</dd></div>
                  <div><dt>La solución</dt><dd>{project.solution}</dd></div>
                  <div><dt>El objetivo</dt><dd>{project.outcome}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="preguntas">
        <div className="faq-heading">
          <p className="eyebrow">Resolvemos tus dudas</p>
          <h2>Preguntas frecuentes</h2>
          <p>Si tienes otra pregunta, estamos a un mensaje de distancia.</p>
          <a className="text-link" href={whatsappLink("Hola YusDev, tengo una pregunta sobre una página web.")} target="_blank" rel="noreferrer">
            Escríbenos por WhatsApp <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Tu próximo cliente puede encontrarte en línea</p>
          <h2>¿Hacemos realidad tu idea?</h2>
          <p>Cuéntanos qué tienes en mente. La primera conversación y la cotización son gratuitas.</p>
        </div>
        <a className="button button-light" href="#contacto">Quiero cotizar mi web <FiArrowUpRight aria-hidden="true" /></a>
      </section>

      <Contact />
    </main>
    <footer className="site-footer">
      <a className="footer-brand" href="#inicio">YusDev<span>.</span></a>
      <p>Diseñamos experiencias digitales para negocios que quieren crecer.</p>
      <a href={whatsappLink("Hola YusDev, quiero conversar sobre mi proyecto web.")} target="_blank" rel="noreferrer">
        Hablemos de tu proyecto <FiArrowUpRight aria-hidden="true" />
      </a>
      <small>© {new Date().getFullYear()} YusDev. Todos los derechos reservados.</small>
    </footer>
    <WhatsAppButton />
  </>
);

export default App;
