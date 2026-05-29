package com.kurt.client.renderer;

import net.minecraft.client.render.entity.EntityRendererFactory;
import net.minecraft.client.render.entity.MobEntityRenderer;
import net.minecraft.util.Identifier;
import com.kurt.MutandKurtEntity;
import com.kurt.client.renderer.model.MutandKurtEntityModel;

public class MutandKurtEntityRenderer extends MobEntityRenderer<MutandKurtEntity, MutandKurtEntityModel> {
    private static final Identifier TEXTURE = new Identifier("kurt", "textures/entity/mutand_kurt.png");

    public MutandKurtEntityRenderer(EntityRendererFactory.Context ctx) {
        super(ctx, new MutandKurtEntityModel(ctx.getPart()), 0.5f);
    }

    @Override
    public Identifier getTexture(MutandKurtEntity entity) {
        return TEXTURE;
    }
}