import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function TestSupabase() {
  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('usuarios').select('*')
      if (error) console.error('❌ Error al conectar:', error)
      else console.log('✅ Conectado, datos:', data)
    }
    checkConnection()
  }, [])

  return <p>Probando conexión con Supabase… revisa la consola.</p>
}
