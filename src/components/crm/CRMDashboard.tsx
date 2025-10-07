// src/components/crm/CRMDashboard.tsx
// src/components/crm/CRMDashboard.tsx
// src/components/crm/CRMDashboard.tsx
import { useState, useEffect } from 'react';
import { Search, Plus, Filter, Calendar, Mail, Phone, MessageCircle, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/hooks/use-toast';

interface Lead {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  marca: string;
  sitio_web?: string;
  estado: string;
  prioridad: string;
  origen: string;
  created_at: string;
  mensaje_enviado: boolean;
  whatsapp_enviado: boolean;
  reunion_agendada: boolean;
  fecha_reunion?: string;
  valor_estimado?: number;
  etapa?: string;
  acompanamiento?: string;
}

interface Interaccion {
  id: string;
  tipo: string;
  titulo: string;
  descripcion: string;
  created_at: string;
}

const CRMDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroEstado, setFiltroEstado] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [vistaActual, setVistaActual] = useState('kanban');
  const [leadSeleccionado, setLeadSeleccionado] = useState<Lead | null>(null);
  const [interacciones, setInteracciones] = useState<Interaccion[]>([]);
  const { toast } = useToast();

  const estados = ['Todos', 'Nuevo', 'Contactado', 'En seguimiento', 'Reunión agendada', 'Propuesta enviada', 'Cerrado ganado'];

  useEffect(() => {
    fetchLeads();

    // Suscripción en tiempo real
    const subscription = supabase
      .channel('leads_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'leads' },
        (payload) => {
          console.log('🔔 Cambio detectado:', payload);
          fetchLeads();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los leads",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchInteracciones = async (leadId: string) => {
    try {
      const { data, error } = await supabase
        .from('lead_interacciones')
        .select('*')
        .eq('lead_id', leadId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInteracciones(data || []);
    } catch (error) {
      console.error('Error fetching interacciones:', error);
    }
  };

  const getEstadoColor = (estado: string) => {
    const colores: { [key: string]: string } = {
      'Nuevo': 'bg-blue-100 text-blue-800 border-blue-200',
      'Contactado': 'bg-purple-100 text-purple-800 border-purple-200',
      'En seguimiento': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Reunión agendada': 'bg-orange-100 text-orange-800 border-orange-200',
      'Propuesta enviada': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Cerrado ganado': 'bg-green-100 text-green-800 border-green-200',
    };
    return colores[estado] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPrioridadColor = (prioridad: string) => {
    const colores: { [key: string]: string } = {
      'Urgente': 'text-red-600',
      'Alta': 'text-orange-600',
      'Media': 'text-yellow-600',
      'Baja': 'text-gray-600'
    };
    return colores[prioridad] || 'text-gray-600';
  };

  const leadsFiltrados = leads.filter(lead => {
    const coincideBusqueda = lead.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                             lead.email.toLowerCase().includes(busqueda.toLowerCase()) ||
                             (lead.marca && lead.marca.toLowerCase().includes(busqueda.toLowerCase()));
    const coincideEstado = filtroEstado === 'Todos' || lead.estado === filtroEstado;
    return coincideBusqueda && coincideEstado;
  });

  const leadsporEstado = estados.filter(e => e !== 'Todos').reduce((acc, estado) => {
    acc[estado] = leadsFiltrados.filter(lead => lead.estado === estado);
    return acc;
  }, {} as { [key: string]: Lead[] });

  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLeadClick = async (lead: Lead) => {
    setLeadSeleccionado(lead);
    await fetchInteracciones(lead.id);
    setVistaActual('detalle');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando CRM...</div>
      </div>
    );
  }

  // Vista Kanban
  const VistaKanban = () => (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {estados.filter(e => e !== 'Todos').map(estado => (
        <div key={estado} className="flex-shrink-0 w-80">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">{estado}</h3>
              <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                {leadsporEstado[estado]?.length || 0}
              </span>
            </div>
            <div className="space-y-3">
              {leadsporEstado[estado]?.map(lead => (
                <div 
                  key={lead.id}
                  onClick={() => handleLeadClick(lead)}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{lead.nombre}</h4>
                    <span className={`text-xs font-medium ${getPrioridadColor(lead.prioridad)}`}>
                      {lead.prioridad}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{lead.marca}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{lead.origen}</span>
                    <span>•</span>
                    <span>{formatFecha(lead.created_at)}</span>
                  </div>
                  {lead.valor_estimado && (
                    <div className="text-sm font-semibold text-green-600 mb-3">
                      €{lead.valor_estimado.toLocaleString()}
                    </div>
                  )}
                  <div className="flex gap-2 flex-wrap">
                    {lead.mensaje_enviado && (
                      <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        <CheckCircle className="w-3 h-3" />
                        Email
                      </span>
                    )}
                    {lead.whatsapp_enviado && (
                      <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        <CheckCircle className="w-3 h-3" />
                        WhatsApp
                      </span>
                    )}
                    {lead.reunion_agendada && (
                      <span className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" />
                        Reunión
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Vista Detalle
  const VistaDetalle = () => {
    if (!leadSeleccionado) return null;

    return (
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <button
            onClick={() => setVistaActual('kanban')}
            className="text-sm text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
          >
            ← Volver al tablero
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{leadSeleccionado.nombre}</h2>
              <p className="text-gray-600">{leadSeleccionado.marca}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEstadoColor(leadSeleccionado.estado)}`}>
              {leadSeleccionado.estado}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Información de Contacto</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900">{leadSeleccionado.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Teléfono</p>
                    <p className="text-sm font-medium text-gray-900">{leadSeleccionado.telefono}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Historial de Interacciones</h3>
              <div className="space-y-4">
                {interacciones.map(interaccion => (
                  <div key={interaccion.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">{interaccion.titulo}</h4>
                        <span className="text-xs text-gray-500">{formatFecha(interaccion.created_at)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{interaccion.descripcion}</p>
                      <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        {interaccion.tipo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Detalles</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Prioridad</p>
                  <span className={`inline-block px-2 py-1 text-sm font-medium rounded ${getPrioridadColor(leadSeleccionado.prioridad)}`}>
                    {leadSeleccionado.prioridad}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Origen</p>
                  <p className="text-sm font-medium text-gray-900">{leadSeleccionado.origen}</p>
                </div>
                {leadSeleccionado.valor_estimado && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Valor estimado</p>
                    <p className="text-lg font-bold text-green-600">
                      €{leadSeleccionado.valor_estimado.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CRM Wunjo Creations</h1>
        <p className="text-gray-600">Gestiona tus leads y oportunidades</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Leads</span>
            <AlertCircle className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
          <p className="text-xs text-green-600 mt-1">+{leads.filter(l => l.estado === 'Nuevo').length} nuevos</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">En proceso</span>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {leads.filter(l => !['Nuevo', 'Cerrado ganado', 'Cerrado perdido'].includes(l.estado)).length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Cerrados</span>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {leads.filter(l => l.estado === 'Cerrado ganado').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Valor Pipeline</span>
            <FileText className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            €{leads.reduce((sum, lead) => sum + (lead.valor_estimado || 0), 0).toLocaleString()}
          </p>
        </div>
      </div>

      {vistaActual !== 'detalle' && (
        <>
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nombre, email o marca..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  {estados.map(estado => (
                    <button
                      key={estado}
                      onClick={() => setFiltroEstado(estado)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        filtroEstado === estado
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {estado}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <VistaKanban />
        </>
      )}

      {vistaActual === 'detalle' && <VistaDetalle />}
    </div>
  );
};

export default CRMDashboard;