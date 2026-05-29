package com.kurt.client;

import net.minecraft.client.render.entity.EntityRenderer;
import net.minecraft.client.render.entity.EntityRendererFactory.Context;
import net.minecraft.client.render.entity.MobEntityRenderer;
import net.minecraft.client.render.entity.model.EntityModelLayers;
import net.minecraft.client.render.entity.model.EntityModel;
import net.minecraft.client.render.entity.model.BipedEntityModel;
import net.minecraft.util.Identifier;
import com.kurt.entity.MutandKurtEntity;

public class MutandKurtRenderer extends MobEntityRenderer<MutandKurtEntity, BipedEntityModel<MutandKurtEntity>> {
    private static final Identifier TEXTURE = new Identifier("kurt", "textures/entity/mutand_kurt.png");

    public MutandKurtRenderer(Context ctx) {
        super(ctx, new BipedEntityModel<>(ctx.getPart(EntityModelLayers.PLAYER)), 0.5f);
    }

    @Override
    public Identifier getTexture(MutandKurtEntity entity) {
        return TEXTURE;
    }
}