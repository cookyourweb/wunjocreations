// src/components/sections/Colabora.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { useState, useEffect } from "react";
import { Sparkles, User, Heart, TrendingUp, Users, Calendar } from "lucide-react";

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
      toast({
        title: "🌿 Gracias por compartir tu energía con nosotras.",
        description: "En breve te contactaremos para guiarte en el siguiente paso de tu experiencia Wunjo. 💫",
      });
      form.reset();

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

  return (
    <section id="colabora" className="relative py-32 px-6 bg-gradient-to-b from-muted/30 to-background">
      {/* Menú flotante de navegación de secciones */}
      <nav className="fixed bottom-4 left-4 right-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:right-8 z-40">
        <div className="bg-card/90 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl p-2 lg:p-3">
          <div className="flex lg:flex-col gap-1 lg:gap-2 overflow-x-auto lg:overflow-x-visible lg:overflow-y-visible justify-center">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative flex items-center justify-center lg:justify-start lg:gap-2 px-2 lg:px-3 py-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
                title={label}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="hidden lg:inline text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto space-y-12">
        <div id="hero" className="text-center space-y-8 scroll-mt-24">
          <div className="inline-block">
            <Badge className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-primary/90 via-accent/90 to-secondary/90 backdrop-blur-xl border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 mr-2 inline animate-pulse" />
              Contacto
            </Badge>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.2]">
            Inicia tu experiencia Wunjo.
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              Este es el primer paso para crear un espacio digital con alma.<br />
              Queremos conocer tu energía, tu historia y lo que deseas manifestar.
            </p>
            <p>
              Cuéntanos sobre ti y tu marca, y prepararemos una propuesta personalizada
              para ayudarte a transformar tu visión en presencia.
            </p>
            <p className="text-foreground font-medium text-xl">
              💫 La tecnología se convierte en arte cuando vibra con tu propósito.
            </p>
          </div>
        </div>

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
                    <FormLabel>Tu nombre completo 👤</FormLabel>
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
                    <FormLabel>Tu email 📨</FormLabel>
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
                    <FormLabel>Tu teléfono 📞</FormLabel>
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
                    <FormLabel>Tu marca o proyecto actual 💫</FormLabel>
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
                    <FormLabel>Tu sitio web o redes (si ya tienes) 🔗</FormLabel>
                    <FormControl>
                      <Input placeholder="https://www.tumarca.com o @tumarca" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Resto del formulario igual... */}
            {/* Conexión emocional */}
            <div id="conexion" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground">🧠 Conexión emocional</h3>
              
              <FormField
                control={form.control}
                name="deseoCrear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Qué deseas crear o transformar con Wunjo Creations?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ej. una web con propósito, un rediseño consciente, una app experiencial..." className="min-h-[100px]" {...field} />
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
                    <FormLabel>¿Cómo te gustaría que se sintiera tu presencia digital?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ej. cálida, poderosa, mística, minimalista, expansiva..." {...field} />
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
                    <FormLabel>¿Cuál es la energía o propósito detrás de tu marca?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Comparte la historia que impulsa tu creación..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Nivel de desarrollo */}
            <div id="etapa" className="space-y-6 scroll-mt-24">
              <h3 className="font-display text-2xl font-medium text-foreground">🔍 ¿En qué etapa estás?</h3>
              
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
                            Soñando el proyecto ✨
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="tengo-marca" id="tengo-marca" />
                          <Label htmlFor="tengo-marca" className="cursor-pointer flex-1">
                            Ya tengo mi marca, pero quiero coherencia y expansión 🌿
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="redisenar" id="redisenar" />
                          <Label htmlFor="redisenar" className="cursor-pointer flex-1">
                            Busco rediseñar mi universo digital completo 🌙
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
              <h3 className="font-display text-2xl font-medium text-foreground">🤝 Nivel de acompañamiento</h3>
              
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
                            Quiero una experiencia completa (web, estrategia y acompañamiento)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="colaboracion-puntual" id="colaboracion-puntual" />
                          <Label htmlFor="colaboracion-puntual" className="cursor-pointer flex-1">
                            Busco una colaboración puntual (web o app)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="explorando" id="explorando" />
                          <Label htmlFor="explorando" className="cursor-pointer flex-1">
                            Aún estoy explorando posibilidades
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
              <h3 className="font-display text-2xl font-medium text-foreground">📅 ¿Te gustaría agendar una llamada?</h3>
              <p className="text-muted-foreground">Para conocernos y sentir si Wunjo resuena contigo</p>
              
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
                            Sí, quiero reservar una llamada ✨
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