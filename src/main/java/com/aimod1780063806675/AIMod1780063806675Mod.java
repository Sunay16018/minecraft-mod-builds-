package com.aimod1780063806675;

import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.object.builder.v1.entity.FabricEntityTypeBuilder;
import net.minecraft.entity.EntityDimensions;
import net.minecraft.entity.EntityType;
import net.minecraft.entity.SpawnGroup;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

public class AIMod1780063806675Mod implements ModInitializer {
    public static final EntityType<MutandKurtEntity> MUTAND_KURT = FabricEntityTypeBuilder.<MutandKurtEntity>create(SpawnGroup.MONSTER, MutandKurtEntity::new)
            .dimensions(EntityDimensions.fixed(0.9f, 1.4f))
            .trackRangeBlocks(8)
            .trackedUpdateRate(3)
            .build();

    @Override
    public void onInitialize() {
        Registry.register(Registries.ENTITY_TYPE, new Identifier("aimod1780063806675", "mutand_kurt"), MUTAND_KURT);
        // Register default attributes for the entity
        MutandKurtEntity.registerAttributes();
    }
}