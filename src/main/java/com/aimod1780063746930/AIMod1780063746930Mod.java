package com.aimod1780063746930;

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

public class AIMod1780063746930Mod implements ModInitializer {

    public static final EntityType<MutandKurtEntity> MUTAND_KURT_ENTITY_TYPE = FabricEntityTypeBuilder
            .create(SpawnGroup.CREATURE, MutandKurtEntity::new)
            .dimensions(EntityDimensions.fixed(0.6f, 1.8f))
            .trackRangeBlocks(64)
            .trackedUpdateRate(3)
            .build();

    public static final Item MUTAND_KURT_SPAWN_EGG = new SpawnEggItem(
            MUTAND_KURT_ENTITY_TYPE,
            0x8B4513, // primary color (saddle brown)
            0x2F4F4F, // secondary color (dark slate gray)
            new Item.Settings()
    );

    @Override
    public void onInitialize() {
        // Register entity type
        Registry.register(Registries.ENTITY_TYPE,
                new Identifier("aimod1780063746930", "mutand_kurt"),
                MUTAND_KURT_ENTITY_TYPE);

        // Register spawn egg item
        Registry.register(Registries.ITEM,
                new Identifier("aimod1780063746930", "mutand_kurt_spawn_egg"),
                MUTAND_KURT_SPAWN_EGG);
    }
}