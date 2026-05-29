package com.aimod1780072229806;

import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.object.builder.v1.entity.FabricEntityTypeBuilder;
import net.minecraft.entity.EntityDimensions;
import net.minecraft.entity.EntityType;
import net.minecraft.entity.SpawnGroup;
import net.minecraft.item.Item;
import net.minecraft.item.SpawnEggItem;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

public class AIMod1780072229806Mod implements ModInitializer {
    public static final String MOD_ID = "aimod1780072229806";

    // Entity registration
    public static final EntityType<MutandKurtEntity> MUTAND_KURT = Registry.register(
            Registries.ENTITY_TYPE,
            new Identifier(MOD_ID, "mutand_kurt"),
            FabricEntityTypeBuilder.create(SpawnGroup.MONSTER, MutandKurtEntity::new)
                    .dimensions(EntityDimensions.fixed(0.6f, 1.9f))
                    .build()
    );

    // Spawn egg registration
    public static final Item MUTAND_KURT_SPAWN_EGG = Registry.register(
            Registries.ITEM,
            new Identifier(MOD_ID, "mutand_kurt_spawn_egg"),
            new SpawnEggItem(MUTAND_KURT, 0x555555, 0xAAAAAA, new Item.Settings())
    );

    @Override
    public void onInitialize() {
        // No additional initialization needed for this simple example
    }
}