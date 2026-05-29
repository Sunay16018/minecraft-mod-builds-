package com.kurt;

import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.rendering.v1.EntityRendererRegistry;
import com.kurt.registry.ModEntities;
import com.kurt.client.MutandKurtRenderer;

public class KurtClient implements ClientModInitializer {
    @Override
    public void onInitializeClient() {
        EntityRendererRegistry.register(ModEntities.MUTAND_KURT, MutandKurtRenderer::new);
    }
}