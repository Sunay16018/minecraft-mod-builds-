package com.kurt.registry;

import net.minecraft.item.Item;
import net.minecraft.item.Item.Settings;
import net.minecraft.item.SpawnEggItem;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;
import com.kurt.registry.ModEntities;

public class ModItems {
    public static final Item MUTAND_KURT_SPAWN_EGG = new SpawnEggItem(ModEntities.MUTAND_KURT, 0x8B4513, 0xFFFFFF, new Settings().maxCount(64));

    public static void init() {
        Registry.register(Registries.ITEM, new Identifier("kurt", "mutand_kurt_spawn_egg"), MUTAND_KURT_SPAWN_EGG);
    }
}