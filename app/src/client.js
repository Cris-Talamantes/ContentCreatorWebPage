import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(URL, API_KEY);


const URL = 'https://pxqjsgvgvqynpiyqnswf.supabase.co/';

const API_KEY = 'sb_secret_yWyTHgvkTdwVdMEcdYeOBg_0xOkWOPv';

const supabase = createClient(URL, API_KEY);