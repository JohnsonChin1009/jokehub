import { supabase } from '@/lib/supabaseClient';

export const fetchJokes = async() => {
    const { data, error } = await supabase.from('jokes').select();

    if ( error ) {
        console.error("Error fetching jokes", error.message);
        return [];
    } else {
        console.log(data);
    }
}