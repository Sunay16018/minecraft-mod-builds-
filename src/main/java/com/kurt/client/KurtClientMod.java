package com.kurt.client;

import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.rendering.v1.EntityRendererRegistry;
import com.kurt.KurtMod;
import com.kurt.client.renderer.MutandKurtEntityRenderer;

public class KurtClientMod implements ClientModInitializer {
    @Override
    public void onInitializeClient() {
        EntityRendererRegistry.register(KurtMod.MUTAND_KURT, MutandKurtEntityRenderer::new);
    }
}