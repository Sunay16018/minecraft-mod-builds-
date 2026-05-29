package com.aimod1780063746930;

import net.fabricmc.api.ModInitializer;
import net.minecraft.entity.attribute.DefaultAttributeContainer;
import net.minecraft.registry.Registry;
import net.minecraft.registry.RegistryKey;
import net.minecraft.registry.RegistryKeys;

public class ModEntityAttributes implements ModInitializer {
    @Override
    public void onInitialize() {
        Registry.register(Registries.ENTITY_TYPE, new Identifier("aimod1780063746930", "mutand_kurt"), AIMod1780063746930Mod.MUTAND_KURT_ENTITY_TYPE);
        // Register default attributes
        DefaultAttributeContainer attributes = MutandKurtEntity.createAttributes().build();
        Registry.register(Registries.ENTITY_TYPE, new Identifier("aimod1780063746930", "mutand_kurt"), AIMod1780063746930Mod.MUTAND_KURT_ENTITY_TYPE);
        // Fabric automatically picks up attributes via EntityAttributeRegistry
        net.fabricmc.fabric.api.object.builder.v1.entity.FabricDefaultAttributeRegistry.register(AIMod1780063746930Mod.MUTAND_KURT_ENTITY_TYPE, attributes);
    }
}