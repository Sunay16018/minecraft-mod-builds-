package com.kurt.entity;

import net.minecraft.entity.EntityType;
import net.minecraft.entity.ai.goal.LookAroundGoal;
import net.minecraft.entity.ai.goal.WanderAroundGoal;
import net.minecraft.entity.passive.AnimalEntity;
import net.minecraft.world.World;

public class MutandKurtEntity extends AnimalEntity {
    public MutandKurtEntity(EntityType<? extends AnimalEntity> type, World world) {
        super(type, world);
    }

    @Override
    protected void initGoals() {
        this.goalSelector.add(0, new WanderAroundGoal(this, 1.0));
        this.goalSelector.add(1, new LookAroundGoal(this));
    }

    @Override
    public boolean isBreedingItem(net.minecraft.item.ItemStack stack) {
        // No breeding items for now
        return false;
    }
}