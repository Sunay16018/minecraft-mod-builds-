package com.kurt;

import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.object.builder.v1.entity.FabricEntityTypeBuilder;
import net.minecraft.entity.EntityDimensions;
import net.minecraft.entity.SpawnGroup;
import net.minecraft.entity.EntityType;
import net.minecraft.item.Item;
import net.minecraft.item.SpawnEggItem;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

public class KurtMod implements ModInitializer {
    public static final EntityType<MutandKurtEntity> MUTAND_KURT = Registry.register(
            Registries.ENTITY_TYPE,
            new Identifier("kurt", "mutand_kurt"),
            FabricEntityTypeBuilder.create(SpawnGroup.CREATURE, MutandKurtEntity::new)
                    .dimensions(EntityDimensions.fixed(0.9f, 1.4f))
                    .trackRangeBlocks(8)
                    .trackedUpdateRate(3)
                    .build()
    );

    public static final Item MUTAND_KURT_SPAWN_EGG = Registry.register(
            Registries.ITEM,
            new Identifier("kurt", "mutand_kurt_spawn_egg"),
            new SpawnEggItem(MUTAND_KURT, 0x8B4513, 0xFFFFFF, new Item.Settings())
    );

    @Override
    public void onInitialize() {
        // No additional initialization required for this simple example
    }
}