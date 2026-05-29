package com.kurt.registry;

import net.fabricmc.fabric.api.object.builder.v1.entity.FabricEntityTypeBuilder;
import net.minecraft.entity.EntityDimensions;
import net.minecraft.entity.EntityType;
import net.minecraft.entity.SpawnGroup;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;
import com.kurt.entity.MutandKurtEntity;

public class ModEntities {
    public static final EntityType<MutandKurtEntity> MUTAND_KURT = FabricEntityTypeBuilder.<MutandKurtEntity>create(SpawnGroup.CREATURE, MutandKurtEntity::new)
            .dimensions(EntityDimensions.fixed(0.9f, 1.4f))
            .trackRangeBlocks(8)
            .trackedUpdateRate(3)
            .build();

    public static void init() {
        Registry.register(Registries.ENTITY_TYPE, new Identifier("kurt", "mutand_kurt"), MUTAND_KURT);
    }
}