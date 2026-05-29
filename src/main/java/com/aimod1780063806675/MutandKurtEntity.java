package com.aimod1780063806675;

import net.minecraft.entity.EntityType;
import net.minecraft.entity.attribute.DefaultAttributeContainer;
import net.minecraft.entity.attribute.EntityAttributes;
import net.minecraft.entity.mob.MobEntity;
import net.minecraft.world.World;

public class MutandKurtEntity extends MobEntity {
    public MutandKurtEntity(EntityType<? extends MobEntity> type, World world) {
        super(type, world);
    }

    public static void registerAttributes() {
        DefaultAttributeContainer.Builder builder = MobEntity.createMobAttributes()
                .add(EntityAttributes.GENERIC_MAX_HEALTH, 20.0)
                .add(EntityAttributes.GENERIC_MOVEMENT_SPEED, 0.25)
                .add(EntityAttributes.GENERIC_ATTACK_DAMAGE, 4.0);
        net.minecraft.registry.Registries.ATTRIBUTE.register(new net.minecraft.util.Identifier("aimod1780063806675", "mutand_kurt"), builder.build());
    }
}