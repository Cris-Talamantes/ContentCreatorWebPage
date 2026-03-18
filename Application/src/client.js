import { createClient } from '@supabase/supabase-js';


const URL = 'https://pxqjsgvgvqynpiyqnswf.supabase.co/';

const API_KEY = 'sb_publishable_xrHfv9YOjdV456yX0XAs5g_4Z04AD3q';

export const supabase = createClient(URL, API_KEY);