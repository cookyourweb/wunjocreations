// src/components/sections/Colabora.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/lib/supabaseClient";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { Sparkles, User, Heart, TrendingUp, Users, Calendar, Briefcase, Globe, Target, Layers, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-contacto.jpg";

const formSchema = z.object({
  nombre: z.string().trim().min(2, "Por favor ingresa tu nombre completo").max(100),
  email: z.string().email("Por favor ingresa un email válido"), // 🆕 AGREGADO
  telefono: z.string().trim().min(9, "Por favor ingresa un teléfono válido").max(20),
  marca: z.string().trim().min(2, "Por favor cuéntanos sobre tu marca o proyecto").max(200),
  sitioWeb: z.string().trim().max(500).optional(),
  deseoCrear: z.string().trim().min(10, "Cuéntanos más sobre lo que deseas crear").max(1000),
  sentimiento: z.string().trim().min(5, "Comparte cómo te gustaría que se sintiera").max(500),
  proposito: z.string().trim().min(10, "Cuéntanos sobre la energía detrás de tu marca").max(1000),
  etapa: z.enum(["sonando", "tengo-marca", "redisenar"], {
    required_error: "Por favor selecciona en qué etapa estás",
  }),
  acompanamiento: z.enum(["experiencia-completa", "colaboracion-puntual", "explorando"], {
    required_error: "Por favor selecciona el nivel de acompañamiento",
  }),
  llamada: z.enum(["si-llamada", "mas-info"], {
    required_error: "Por favor selecciona una opción",
  }),
});

const Colabora = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("hero");
  const [enviado, setEnviado] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "", // 🆕 AGREGADO
      telefono: "",
      marca: "",
      sitioWeb: "",
      deseoCrear: "",
      sentimiento: "",
      proposito: "",
    },
  });

  const llamadaSeleccionada = form.watch("llamada");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "datos", "conexion", "etapa", "acompanamiento", "llamada"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Contacto", icon: Sparkles },
    { id: "datos", label: "Datos", icon: User },
    { id: "conexion", label: "Conexión", icon: Heart },
    { id: "etapa", label: "Etapa", icon: TrendingUp },
    { id: "acompanamiento", label: "Acompañamiento", icon: Users },
    { id: "llamada", label: "Llamada", icon: Calendar },
  ];

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Enviando tu información...",
      description: "Estamos procesando tu solicitud. Por favor espera un momento.",
    });

    try {
      const dataParaSupabase = {
        nombre: values.nombre,
        email: values.email,
        telefono: values.telefono,
        marca: values.marca,
        sitio_web: values.sitioWeb || null,
        deseo_crear: values.deseoCrear,
        sentimiento: values.sentimiento,
        proposito: values.proposito,
        etapa: values.etapa,
        acompanamiento: values.acompanamiento,
        llamada: values.llamada,
        estado: 'Nuevo',
        origen: 'Web',
      };

      console.log('📤 Enviando datos a Supabase:', dataParaSupabase);

      const { data, error } = await supabase
        .from('wunjocreations')
        .insert(dataParaSupabase)
        .select();

      console.log('🔍 Respuesta completa de Supabase:', { data, error });

      if (error) {
        // 🔴 IMPROVED ERROR LOGGING
        console.error('❌ Error completo:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });

        toast({
          title: "Error al enviar el formulario",
          description: `${error.message}${error.hint ? ' - ' + error.hint : ''}`,
          variant: "destructive",
        });
        return; // Stop execution if error
      }

      // ✅ SUCCESS
      console.log('✅ Datos guardados exitosamente:', data);

      // Enviar email de notificación
      await emailjs.send(
        "service_0pvpr0t",
        "template_cx8k5nv",
        {
          nombre: values.nombre,
          email: values.email,
          telefono: values.telefono,
          marca: values.marca,
          sitio_web: values.sitioWeb || "—",
          deseo_crear: values.deseoCrear,
          sentimiento: values.sentimiento,
          proposito: values.proposito,
          etapa: values.etapa,
          acompanamiento: values.acompanamiento,
          llamada: values.llamada,
        },
        "YnbVYK3jntIgNZoih"
      );

      form.reset();
      setEnviado(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (err) {
      console.error('❌ Error inesperado completo:', {
        error: err,
        message: err.message,
        stack: err.stack
      });

      toast({
        title: "Error inesperado",
        description: "Hubo un problema inesperado. Por favor intenta de nuevo más tarde.",
        variant: "destructive",
      });
    }
  };

  const getButtonText = () => {
    if (llamadaSeleccionada === "si-llamada") {
      return "Agenda tu llamada por WhatsApp";
    } else if (llamadaSeleccionada === "mas-info") {
      return "Solicito información";
    }
    return "Enviar formulario";
  };

  if (enviado) {
    return (
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            ¡Recibido!
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Gracias por contarnos sobre tu comunidad. En breve nos ponemos en contacto contigo para dar el siguiente paso.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Revisa tu bandeja de entrada — te enviaremos un mensaje en las próximas 24–48 horas.
          </p>
          <a
            href="/"
            className="inline-block mt-4 font-body text-sm text-primary hover:text-[hsl(38,80%,70%)] transition-colors underline-offset-4 hover:underline"
          >
            Volver al inicio →
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="colabora" className="relative pt-32 pb-32 lg:pb-24 px-6">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Fondo decorativo - contenedor separado para no afectar sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div id="hero" className="text-center space-y-6 scroll-mt-32">
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Primer paso
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.2]">
            Cuéntanos sobre{" "}
            <span className="text-gradient-warm">tu comunidad</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Analizamos tu método, tu promesa y el perfil de tus alumnos para diseñar una experiencia personalizada con IA que retiene más y convierte mejor.
          </p>
        </div>

        {/* Separador decorativo - solo desktop */}
        <div className="flex items-center gap-4 max-w-sm mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* Menú de navegación sticky - Desktop */}
        <nav className="hidden lg:block sticky top-20 z-40 -mx-6 px-6 py-4 bg-background/95 backdrop-blur-lg border-b border-border/30">
          <div className="flex gap-2 justify-center max-w-4xl mx-auto">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-warm text-[hsl(25,15%,8%)] scale-105"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
                title={label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Menú de navegación fijo inferior - Móvil */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/50 safe-area-inset-bottom">
          <div className="flex items-center justify-around px-2 py-3 max-w-full overflow-x-auto">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all duration-300 min-w-0 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-to-b from-primary to-accent text-primary-foreground scale-110"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                title={label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-[10px] font-medium truncate max-w-[60px]">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </nav>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 bg-card/30 p-8 md:p-12 rounded-2xl border border-border">
            
            {/* Datos básicos */}
            <div id="datos" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground">Datos básicos</h3>
              
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><User className="w-4 h-4 text-primary" />Tu nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 🆕 CAMPO EMAIL AGREGADO AQUÍ */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />Tu email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />Tu teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+34 600 000 000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="marca"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" />Tu marca o proyecto actual</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu marca, empresa, proyecto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sitioWeb"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" />Tu sitio web o redes (si ya tienes)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://www.tumarca.com o @tumarca" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Resto del formulario igual... */}
            {/* Tu comunidad */}
            <div id="conexion" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground">Tu comunidad</h3>

              <FormField
                control={form.control}
                name="deseoCrear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" />¿Cuál es el formato de tu comunidad y cuántas personas tiene?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ej. curso online de 200 alumnos, mentoría grupal de 50 personas, comunidad de suscripción con 500 miembros..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sentimiento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Target className="w-4 h-4 text-primary" />¿Cuál es tu mayor reto ahora mismo?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ej. abandono de alumnos, desmotivación, no puedo escalar sin agotarme, no sé quién está progresando..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proposito"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" />¿Qué resultado concreto quieres conseguir?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ej. reducir el abandono a la mitad, escalar a 1.000 alumnos sin añadir horas de trabajo, mejorar la tasa de finalización..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Nivel de desarrollo */}
            <div id="etapa" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground flex items-center gap-2"><Layers className="w-5 h-5 text-primary" />¿En qué etapa estás?</h3>
              
              <FormField
                control={form.control}
                name="etapa"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="sonando" id="sonando" />
                          <Label htmlFor="sonando" className="cursor-pointer flex-1">
                            Estoy construyendo mi curso o mentoría
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="tengo-marca" id="tengo-marca" />
                          <Label htmlFor="tengo-marca" className="cursor-pointer flex-1">
                            Ya tengo comunidad activa y quiero mejorar la retención
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="redisenar" id="redisenar" />
                          <Label htmlFor="redisenar" className="cursor-pointer flex-1">
                            Quiero escalar sin añadir más horas de trabajo
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Nivel de acompañamiento */}
            <div id="acompanamiento" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground flex items-center gap-2"><Heart className="w-5 h-5 text-primary" />¿Qué tipo de colaboración buscas?</h3>
              
              <FormField
                control={form.control}
                name="acompanamiento"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="experiencia-completa" id="experiencia-completa" />
                          <Label htmlFor="experiencia-completa" className="cursor-pointer flex-1">
                            Diseño completo de experiencia personalizada con IA (estrategia + implementación)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="colaboracion-puntual" id="colaboracion-puntual" />
                          <Label htmlFor="colaboracion-puntual" className="cursor-pointer flex-1">
                            Proyecto puntual (automatización, app o sistema específico)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="explorando" id="explorando" />
                          <Label htmlFor="explorando" className="cursor-pointer flex-1">
                            Quiero entender primero qué es posible para mi caso
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Llamada a la acción */}
            <div id="llamada" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" />¿Siguiente paso?</h3>
              <p className="text-muted-foreground">Una llamada de 30 min para analizar tu caso y ver si tiene sentido trabajar juntos</p>
              
              <FormField
                control={form.control}
                name="llamada"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="si-llamada" id="si-llamada" />
                          <Label htmlFor="si-llamada" className="cursor-pointer flex-1">
                            Sí, quiero reservar una llamada
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="mas-info" id="mas-info" />
                          <Label htmlFor="mas-info" className="cursor-pointer flex-1">
                            Prefiero que me envíen más información primero 
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Enviando..." : getButtonText()}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Colabora;