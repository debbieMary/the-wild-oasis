
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hgaoyfiaqtmlzcqiuumu.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYW95ZmlhcXRtbHpjcWl1dW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MDQ3MzUsImV4cCI6MjA1OTk4MDczNX0.yREgX_QIPh8fuwaVOOYKFMJuXd7hIz7ZiyKM6YmseDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;