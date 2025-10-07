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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const dataParaSupabase = {
        nombre: values.nombre,
        email: values.email, // 🆕 AGREGADO
        telefono: values.telefono,
        marca: values.marca,
        sitio_web: values.sitioWeb || null,
        deseo_crear: values.deseoCrear,
        sentimiento: values.sentimiento,
        proposito: values.proposito,
        etapa: values.etapa,
        acompanamiento: values.acompanamiento,
        llamada: values.llamada,
        estado: 'Nuevo', // 🆕 AGREGADO para CRM
        origen: 'Web', // 🆕 AGREGADO para CRM
      };

      console.log('📤 Enviando datos a Supabase:', dataParaSupabase);

      const { data, error } = await supabase
        .from('wunjocreations')
        .insert(dataParaSupabase)
        .select();

      console.log('🔍 Respuesta completa de Supabase:', { data, error });

      if (error) {
        console.error('❌ Error al guardar:', error);
        toast({
          title: "Error al enviar el formulario",
          description: `${error.message}`,
          variant: "destructive",
        });
      } else {
        console.log('✅ Datos guardados exitosamente:', data);
        toast({
          title: "🌿 Gracias por compartir tu energía con nosotras.",
          description: "En breve te contactaremos para guiarte en el siguiente paso de tu experiencia Wunjo. 💫",
        });
        form.reset();
      }
    } catch (err) {
      console.error('❌ Error inesperado completo:', err);
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
    <section id="colabora" className="py-32 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
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
            <div className="space-y-6">
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
            <div className="space-y-6">
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
            <div className="space-y-6">
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
            <div className="space-y-6">
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
            <div className="space-y-6">
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