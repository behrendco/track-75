import { createClient } from "@/lib/supabase/client";

export const submitSoft = async (
    diet: boolean,
    train: boolean,
    water: boolean,
    read: boolean
) => {
    const supabase = createClient();

    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) return false;

    const { error } = await supabase
        .from("soft")
        .insert({ user_id: userId, diet: diet, train: train, water: water, read: read });

    if (error) return false;
    return true;
}