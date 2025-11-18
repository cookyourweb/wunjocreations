# 🚀 Guía de Implementación CRM - Paso a Paso

## ⏱ Tiempo estimado: 2-3 horas

---

## 📋 Checklist de Implementación

### ✅ Fase 1: Preparación de Base de Datos (30 min)

- [ ] **1.1** Acceder a Supabase Dashboard
- [ ] **1.2** Ir a SQL Editor
- [ ] **1.3** Ejecutar script de creación de tablas:
  ```sql
  -- Copiar y ejecutar el SQL completo del artifact "database-setup"
  -- Incluye: leads, lead_interacciones, lead_tareas, lead_propuestas, lead_documentos
  ```
- [ ] **1.4** Verificar que las tablas se crearon correctamente:
  ```sql
  SELECT table_name FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name LIKE 'lead%';
  ```
- [ ] **1.5** Configurar políticas RLS (ya incluidas en el script)
- [ ] **1.6** Verificar triggers y funciones

### ✅ Fase 2: Actualizar Formulario de Contacto (15 min)

- [ ] **2.1** Abrir `src/components/sections/Colabora.tsx`
- [ ] **2.2** Copiar el código actualizado del artifact "colabora-fixed"
- [ ] **2.3** Verificar que el campo `email` esté incluido
- [ ] **2.4** Probar el formulario localmente:
  ```bash
  npm run dev
  ```
- [ ] **2.5** Ir a `http://localhost:8080/#colabora`
- [ ] **2.6** Llenar y enviar formulario de prueba
- [ ] **2.7** Verificar en Supabase Table Editor que:
  - Se creó registro en `wunjocreations`
  - Se creó automáticamente registro en `leads`
  - Se creó registro en `lead_interacciones`

### ✅ Fase 3: Crear Componentes del CRM (30 min)

- [ ] **3.1** Crear carpeta de componentes CRM:
  ```bash
  mkdir -p src/components/crm
  ```

- [ ] **3.2** Crear archivo principal del CRM:
  ```bash
  touch src/components/crm/CRMDashboard.tsx
  ```

- [ ] **3.3** Copiar código del artifact "crm-dashboard" a `CRMDashboard.tsx`

- [ ] **3.4** Crear página del CRM:
  ```bash
  touch src/pages/CRM.tsx
  ```

- [ ] **3.5** Añadir contenido a `CRM.tsx`:
  ```typescript
  import CRMDashboard from "@/components/crm/CRMDashboard";

  const CRM = () => {
    return <CRMDashboard />;
  };

  export default CRM;
  ```

### ✅ Fase 4: Configurar Rutas (10 min)

- [ ] **4.1** Abrir `src/App.tsx`

- [ ] **4.2** Importar el componente CRM:
  ```typescript
  import CRM from "@/pages/CRM";
  ```

- [ ] **4.3** Añadir ruta en el Router:
  ```typescript
  <Route path="/crm" element={<CRM />} />
  ```

- [ ] **4.4** Verificar que react-router-dom esté instalado:
  ```bash
  npm list react-router-dom
  ```

- [ ] **4.5** Si no está instalado:
  ```bash
  npm install react-router-dom
  ```

- [ ] **4.6** Probar la ruta:
  ```bash
  # Abrir http://localhost:8080/crm
  ```

### ✅ Fase 5: Conectar con Datos Reales (20 min)

- [ ] **5.1** En `CRMDashboard.tsx`, reemplazar datos mock con llamada a Supabase:

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const CRMDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('leads')
          .select(`
            *,
            lead_interacciones:lead_interacciones(count),
            lead_tareas:lead_tareas(count)
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        setLeads(data || []);
      } catch (err) {
        console.error('Error fetching leads:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();

    // Suscripción en tiempo real
    const subscription = supabase
      .channel('leads_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'leads' },
        (payload) => {
          console.log('🔔 Lead actualizado:', payload);
          fetchLeads();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando CRM...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  // ... resto del componente
};
```

- [ ] **5.2** Probar que los datos se cargan correctamente
- [ ] **5.3** Verificar actualización en tiempo real:
  - Abrir CRM en navegador
  - Enviar formulario desde landing
  - Verificar que aparece automáticamente en CRM

### ✅ Fase 6: Proteger Ruta del CRM (15 min) [OPCIONAL]

- [ ] **6.1** Crear componente de protección:
  ```bash
  touch src/components/ProtectedRoute.tsx
  ```

- [ ] **6.2** Implementar autenticación básica:

```typescript
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkAuth();

    // Escuchar cambios en auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Verificando acceso...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
```

- [ ] **6.3** Actualizar ruta en `App.tsx`:
```typescript
import { ProtectedRoute } from "@/components/ProtectedRoute";

<Route 
  path="/crm" 
  element={
    <ProtectedRoute>
      <CRM />
    </ProtectedRoute>
  } 
/>
```

- [ ] **6.4** Crear página de login (próxima fase)

### ✅ Fase 7: Testing Completo (20 min)

- [ ] **7.1** Test: Enviar formulario desde landing
  - Verificar creación en `wunjocreations`
  - Verificar creación automática en `leads`
  - Verificar interacción inicial registrada

- [ ] **7.2** Test: Ver lead en CRM
  - Abrir `/crm`
  - Verificar que el lead aparece
  - Verificar datos correctos
  - Verificar estado "Nuevo"

- [ ] **7.3** Test: Cambiar estado de lead
  - Click en lead
  - Cambiar estado
  - Verificar actualización en BD
  - Verificar registro en historial

- [ ] **7.4** Test: Añadir nota
  - Escribir nota
  - Guardar
  - Verificar en `lead_interacciones`

- [ ] **7.5** Test: Actualización en tiempo real
  - Abrir CRM en dos pestañas
  - Cambiar algo en una
  - Verificar actualización automática en la otra

- [ ] **7.6** Test: Búsqueda y filtros
  - Buscar por nombre
  - Filtrar por estado
  - Verificar resultados correctos

### ✅ Fase 8: Configurar Automatización n8n (45 min)

Ver guía detallada en artifact "n8n-automation-guide"

- [ ] **8.1** Instalar n8n (local o cloud)
- [ ] **8.2** Crear cuenta en Airtable
- [ ] **8.3** Crear workspace en Notion
- [ ] **8.4** Configurar Twilio para WhatsApp
- [ ] **8.5** Importar workflow en n8n
- [ ] **8.6** Configurar credenciales
- [ ] **8.7** Activar workflow
- [ ] **8.8** Probar flujo completo

---

## 🎨 Mejoras Opcionales

### Dashboard Avanzado

- [ ] Gráficos con recharts
- [ ] Métricas por período
- [ ] Tasa de conversión
- [ ] Forecast de ventas

### Funcionalidades CRM

- [ ] Drag & drop para cambiar estados
- [ ] Exportar a CSV/Excel
- [ ] Plantillas de email
- [ ] Recordatorios automáticos
- [ ] Integración con calendario
- [ ] Chat interno del equipo
- [ ] Notas de voz
- [ ] Adjuntar archivos

### Automatizaciones

- [ ] Scoring automático de leads
- [ ] Asignación inteligente
- [ ] Follow-up automático
- [ ] Propuestas con IA
- [ ] Análisis de sentimiento

---

## 🐛 Troubleshooting

### Error: "leads table does not exist"
**Solución**: Ejecutar el SQL de creación de tablas en Supabase

### Error: "RLS policy violation"
**Solución**: Verificar políticas RLS en Supabase

### CRM no carga datos
**Solución**: 
1. Verificar credenciales en `.env`
2. Verificar políticas de Supabase
3. Ver console.log para errores

### Formulario no se envía
**Solución**:
1. Verificar que email esté en el schema de validación
2. Verificar conexión a Supabase
3. Ver errores en consola

### Actualización en tiempo real no funciona
**Solución**:
1. Verificar suscripción en el código
2. Verificar que Realtime esté habilitado en Supabase
3. Verificar políticas RLS para SELECT

---

## 📞 Soporte

¿Problemas durante la implementación?

1. Revisa los logs en la consola del navegador
2. Revisa los logs de Supabase
3. Contacta al equipo en Slack: #wunjo-dev-support

---

## ✨ Resultado Final

Al completar todos los pasos tendrás:

✅ Formulario de contacto funcional conectado a Supabase
✅ Sistema CRM completo con gestión de leads
✅ Dashboard visual con métricas en tiempo real
✅ Historial completo de interacciones
✅ Gestión de tareas y agenda
✅ Automatización completa con n8n
✅ Integración con Airtable, Notion, Email y WhatsApp

---

**Tiempo total estimado: 2-3 horas**
**Dificultad: Media** 🟡

¡Éxito con la implementación! 🚀# 🚀 Guía de Implementación CRM - Paso a Paso

## ⏱ Tiempo estimado: 2-3 horas

---

## 📋 Checklist de Implementación

### ✅ Fase 1: Preparación de Base de Datos (30 min)

- [ ] **1.1** Acceder a Supabase Dashboard
- [ ] **1.2** Ir a SQL Editor
- [ ] **1.3** Ejecutar script de creación de tablas:
  ```sql
  -- Copiar y ejecutar el SQL completo del artifact "database-setup"
  -- Incluye: leads, lead_interacciones, lead_tareas, lead_propuestas, lead_documentos
  ```
- [ ] **1.4** Verificar que las tablas se crearon correctamente:
  ```sql
  SELECT table_name FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name LIKE 'lead%';
  ```
- [ ] **1.5** Configurar políticas RLS (ya incluidas en el script)
- [ ] **1.6** Verificar triggers y funciones

### ✅ Fase 2: Actualizar Formulario de Contacto (15 min)

- [ ] **2.1** Abrir `src/components/sections/Colabora.tsx`
- [ ] **2.2** Copiar el código actualizado del artifact "colabora-fixed"
- [ ] **2.3** Verificar que el campo `email` esté incluido
- [ ] **2.4** Probar el formulario localmente:
  ```bash
  npm run dev
  ```
- [ ] **2.5** Ir a `http://localhost:8080/#colabora`
- [ ] **2.6** Llenar y enviar formulario de prueba
- [ ] **2.7** Verificar en Supabase Table Editor que:
  - Se creó registro en `wunjocreations`
  - Se creó automáticamente registro en `leads`
  - Se creó registro en `lead_interacciones`

### ✅ Fase 3: Crear Componentes del CRM (30 min)

- [ ] **3.1** Crear carpeta de componentes CRM:
  ```bash
  mkdir -p src/components/crm
  ```

- [ ] **3.2** Crear archivo principal del CRM:
  ```bash
  touch src/components/crm/CRMDashboard.tsx
  ```

- [ ] **3.3** Copiar código del artifact "crm-dashboard" a `CRMDashboard.tsx`

- [ ] **3.4** Crear página del CRM:
  ```bash
  touch src/pages/CRM.tsx
  ```

- [ ] **3.5** Añadir contenido a `CRM.tsx`:
  ```typescript
  import CRMDashboard from "@/components/crm/CRMDashboard";

  const CRM = () => {
    return <CRMDashboard />;
  };

  export default CRM;
  ```

### ✅ Fase 4: Configurar Rutas (10 min)

- [ ] **4.1** Abrir `src/App.tsx`

- [ ] **4.2** Importar el componente CRM:
  ```typescript
  import CRM from "@/pages/CRM";
  ```

- [ ] **4.3** Añadir ruta en el Router:
  ```typescript
  <Route path="/crm" element={<CRM />} />
  ```

- [ ] **4.4** Verificar que react-router-dom esté instalado:
  ```bash
  npm list react-router-dom
  ```

- [ ] **4.5** Si no está instalado:
  ```bash
  npm install react-router-dom
  ```

- [ ] **4.6** Probar la ruta:
  ```bash
  # Abrir http://localhost:8080/crm
  ```

### ✅ Fase 5: Conectar con Datos Reales (20 min)

- [ ] **5.1** En `CRMDashboard.tsx`, reemplazar datos mock con llamada a Supabase:

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const CRMDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('leads')
          .select(`
            *,
            lead_interacciones:lead_interacciones(count),
            lead_tareas:lead_tareas(count)
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        setLeads(data || []);
      } catch (err) {
        console.error('Error fetching leads:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();

    // Suscripción en tiempo real
    const subscription = supabase
      .channel('leads_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'leads' },
        (payload) => {
          console.log('🔔 Lead actualizado:', payload);
          fetchLeads();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando CRM...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  // ... resto del componente
};
```

- [ ] **5.2** Probar que los datos se cargan correctamente
- [ ] **5.3** Verificar actualización en tiempo real:
  - Abrir CRM en navegador
  - Enviar formulario desde landing
  - Verificar que aparece automáticamente en CRM

### ✅ Fase 6: Proteger Ruta del CRM (15 min) [OPCIONAL]

- [ ] **6.1** Crear componente de protección:
  ```bash
  touch src/components/ProtectedRoute.tsx
  ```

- [ ] **6.2** Implementar autenticación básica:

```typescript
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkAuth();

    // Escuchar cambios en auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Verificando acceso...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
```

- [ ] **6.3** Actualizar ruta en `App.tsx`:
```typescript
import { ProtectedRoute } from "@/components/ProtectedRoute";

<Route 
  path="/crm" 
  element={
    <ProtectedRoute>
      <CRM />
    </ProtectedRoute>
  } 
/>
```

- [ ] **6.4** Crear página de login (próxima fase)

### ✅ Fase 7: Testing Completo (20 min)

- [ ] **7.1** Test: Enviar formulario desde landing
  - Verificar creación en `wunjocreations`
  - Verificar creación automática en `leads`
  - Verificar interacción inicial registrada

- [ ] **7.2** Test: Ver lead en CRM
  - Abrir `/crm`
  - Verificar que el lead aparece
  - Verificar datos correctos
  - Verificar estado "Nuevo"

- [ ] **7.3** Test: Cambiar estado de lead
  - Click en lead
  - Cambiar estado
  - Verificar actualización en BD
  - Verificar registro en historial

- [ ] **7.4** Test: Añadir nota
  - Escribir nota
  - Guardar
  - Verificar en `lead_interacciones`

- [ ] **7.5** Test: Actualización en tiempo real
  - Abrir CRM en dos pestañas
  - Cambiar algo en una
  - Verificar actualización automática en la otra

- [ ] **7.6** Test: Búsqueda y filtros
  - Buscar por nombre
  - Filtrar por estado
  - Verificar resultados correctos

### ✅ Fase 8: Configurar Automatización n8n (45 min)

Ver guía detallada en artifact "n8n-automation-guide"

- [ ] **8.1** Instalar n8n (local o cloud)
- [ ] **8.2** Crear cuenta en Airtable
- [ ] **8.3** Crear workspace en Notion
- [ ] **8.4** Configurar Twilio para WhatsApp
- [ ] **8.5** Importar workflow en n8n
- [ ] **8.6** Configurar credenciales
- [ ] **8.7** Activar workflow
- [ ] **8.8** Probar flujo completo

---

## 🎨 Mejoras Opcionales

### Dashboard Avanzado

- [ ] Gráficos con recharts
- [ ] Métricas por período
- [ ] Tasa de conversión
- [ ] Forecast de ventas

### Funcionalidades CRM

- [ ] Drag & drop para cambiar estados
- [ ] Exportar a CSV/Excel
- [ ] Plantillas de email
- [ ] Recordatorios automáticos
- [ ] Integración con calendario
- [ ] Chat interno del equipo
- [ ] Notas de voz
- [ ] Adjuntar archivos

### Automatizaciones

- [ ] Scoring automático de leads
- [ ] Asignación inteligente
- [ ] Follow-up automático
- [ ] Propuestas con IA
- [ ] Análisis de sentimiento

---

## 🐛 Troubleshooting

### Error: "leads table does not exist"
**Solución**: Ejecutar el SQL de creación de tablas en Supabase

### Error: "RLS policy violation"
**Solución**: Verificar políticas RLS en Supabase

### CRM no carga datos
**Solución**: 
1. Verificar credenciales en `.env`
2. Verificar políticas de Supabase
3. Ver console.log para errores

### Formulario no se envía
**Solución**:
1. Verificar que email esté en el schema de validación
2. Verificar conexión a Supabase
3. Ver errores en consola

### Actualización en tiempo real no funciona
**Solución**:
1. Verificar suscripción en el código
2. Verificar que Realtime esté habilitado en Supabase
3. Verificar políticas RLS para SELECT

---

## 📞 Soporte

¿Problemas durante la implementación?

1. Revisa los logs en la consola del navegador
2. Revisa los logs de Supabase
3. Contacta al equipo en Slack: #wunjo-dev-support

---

## ✨ Resultado Final

Al completar todos los pasos tendrás:

✅ Formulario de contacto funcional conectado a Supabase
✅ Sistema CRM completo con gestión de leads
✅ Dashboard visual con métricas en tiempo real
✅ Historial completo de interacciones
✅ Gestión de tareas y agenda
✅ Automatización completa con n8n
✅ Integración con Airtable, Notion, Email y WhatsApp

---

**Tiempo total estimado: 2-3 horas**
**Dificultad: Media** 🟡

¡Éxito con la implementación! 🚀
---

# 🎓 Plan de Formación para Desarrolladores Wunjo

## 🌿 Introducción

Lo que Wunjo crea no es un simple sistema, es un **ecosistema de transformación personalizada**.

Para poder diseñarlo, liderarlo y entenderlo en profundidad, necesitas dominar **7 áreas principales** que combinan tecnología, psicología, negocios y diseño.

---

## 📚 Las 7 Ramas del Conocimiento Wunjo

### 🌿 1. Psicología del Comportamiento Humano

**Para qué:** Entender por qué las personas avanzan, se bloquean o abandonan.

**Temas clave:**
- Motivación intrínseca y extrínseca
- Hábitos y cambio de comportamiento
- Mecanismos de resistencia (procrastinación, autosabotaje)
- Dopamina y enfoque
- Sistemas de recompensa
- Desarrollo de identidad

**Libros recomendados:**
- **Atomic Habits** — James Clear
- **The Power of Habit** — Charles Duhigg
- **Mindset** — Carol Dweck
- **Thinking, Fast and Slow** — Daniel Kahneman

---

### 🌈 2. Psicología Evolutiva y Crecimiento Personal

**Para qué:** Diseñar experiencias que realmente transformen.

**Temas clave:**
- Etapas del desarrollo humano
- Procesos de maduración emocional
- Mecanismos de trauma, reparación y regulación
- Arquetipos, sombras, ego
- Autorrealización

**Libros recomendados:**
- **El Poder del Ahora** — Eckhart Tolle
- **Inteligencia Emocional** — Daniel Goleman
- **Awareness** — Anthony de Mello
- **The Hero With a Thousand Faces** — Joseph Campbell

---

### 🧠 3. Coaching y Mentalidad (Mindset Coaching)

**Para qué:** Integrar mensajes de mentalidad y acompañamiento emocional.

**Temas clave:**
- Preguntas poderosas
- Guía sin dirigir
- Accountability (responsabilidad)
- Gestión de emociones
- Creencias limitantes
- Acompañamiento desde la compasión y el rigor

**Formaciones útiles:**
- Coaching profesional (ICF / ASESCO)
- Coaching ontológico
- Coaching de identidad

**Libros recomendados:**
- **The Coaching Habit** — Michael Bungay Stanier
- **The Inner Game of Tennis** — Timothy Gallwey
- **Psycho-Cybernetics** — Maxwell Maltz

---

### 💼 4. Negocios, Ventas y Construcción de Ofertas

**Para qué:** Entender mejor cómo piensa un creador, un mentor o un alumno.

**Temas clave:**
- Propuesta de valor
- Creación de ofertas
- Procesos de venta
- Customer journey
- Retención y experiencia del cliente
- Escalabilidad

**Libros base:**
- **$100M Offers** — Alex Hormozi
- **$100M Leads** — Alex Hormozi
- **DotCom Secrets** — Russell Brunson
- **Expert Secrets** — Russell Brunson
- **Traffic Secrets** — Russell Brunson

---

### 🌀 5. Diseño Instruccional y Experiencia de Aprendizaje

**Para qué:** Convertir cualquier curso en una experiencia transformadora y personalizada.

**Temas clave:**
- Cómo estructurar un proceso paso a paso
- Cómo generar resultados predecibles
- Cómo medir el progreso
- Cómo crear hitos de aprendizaje
- Cómo convertir contenido en práctica
- Cómo generar engagement a largo plazo

**Libros recomendados:**
- **Designing for Growth** — Jeanne Liedtka
- **Ultralearning** — Scott Young
- **The Art of Explanation** — Lee LeFever

---

### 🤖 6. Inteligencia Artificial Aplicada a Personalización

**Para qué:** Dominar la parte técnica del ecosistema.

**Áreas esenciales:**
- Prompting avanzado
- Personalización dinámica
- Sistemas de recomendación
- Análisis de datos individuales
- Automatizaciones (Zapier, Make)
- Dashboards
- WhatsApp API / email automation

**Recomendación:**
Formarte en:
- Prompt Engineering
- IA aplicada a eduTech
- Automatizaciones avanzadas con IA
- (Cursos cortos → Udemy / Domestika / YouTube)

---

### 🎨 7. Diseño de Experiencias (UX Emocional + Narrativa)

**Para qué:** Hacer que el ecosistema tenga "alma", como Wunjo.

**Temas clave:**
- Narrativa transformacional
- Diseño centrado en la emoción
- Storytelling simbólico
- Gamificación ligera
- Rituales digitales
- Estética y coherencia de marca

**Libros recomendados:**
- **The Power of Moments** — Chip & Dan Heath
- **Hooked** — Nir Eyal
- **Storybrand** — Donald Miller
- **Creative Confidence** — IDEO / Kelley Brothers

---

## 🧩 Resumen: ¿Qué necesitas aprender?

1. ✅ Psicología humana y cambio de comportamiento
2. ✅ Crecimiento personal y mentalidad
3. ✅ Coaching y acompañamiento emocional
4. ✅ Negocios y ofertas (Hormozi + Brunson)
5. ✅ Diseño instruccional + UX de aprendizaje
6. ✅ IA aplicada a personalización
7. ✅ Storytelling y experiencia emocional

**Si dominas esto, no solo puedes crear un acompañamiento personalizado…**
**Puedes construir un nuevo tipo de producto digital que nadie más está ofreciendo.**

---

## 🚀 Próximos Pasos

¿Te gustaría un **Plan de Formación Personalizado de 90 días** con:
- División por semanas
- Libros específicos
- Ejercicios prácticos
- Proyectos reales

Contacta con el equipo Wunjo para más detalles sobre el programa de formación.

---

**¡Bienvenido al ecosistema Wunjo!** 🌿
