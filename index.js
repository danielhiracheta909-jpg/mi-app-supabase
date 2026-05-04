import { createClient } from '@supabase/supabase-js'

// Sustituye con tus datos reales
const supabaseUrl = 'https://wtmybkouvlyaqccwenkm.supabase.co'
const supabaseKey = 'sb_publishable_OhYhVWMctSvrtoVLHdrMpw_4LiHJwFQ'

const supabase = createClient(supabaseUrl, supabaseKey)

async function probarConexion() {
    console.log("Conectando...")
    // Solo deja esta línea, borra las que tengan errores o digan 'paises'
    const { data, error } = await supabase.from('estudiantes').select('*')

    if (error) {
        console.log("Error de conexión:", error.message)
    } else {
        console.log("¡Conexión exitosa! Datos recibidos:", data)
    }
}

probarConexion()