package com.kurt.client.renderer.model;

import net.minecraft.client.model.ModelPart;
import net.minecraft.client.model.ModelPartBuilder;
import net.minecraft.client.model.ModelTransform;
import net.minecraft.client.model.TexturedModelData;
import net.minecraft.client.model.ModelData;
import net.minecraft.client.render.entity.model.EntityModel;
import com.kurt.MutandKurtEntity;

public class MutandKurtEntityModel extends EntityModel<MutandKurtEntity> {
    private final ModelPart root;

    public MutandKurtEntityModel(ModelPart root) {
        this.root = root;
    }

    public static TexturedModelData getTexturedModelData() {
        ModelData modelData = new ModelData();
        ModelPartBuilder builder = ModelPartBuilder.create()
                .cuboid(-4.0F, -8.0F, -4.0F, 8, 8, 8); // Simple cube as placeholder
        modelData.getRoot().addChild("body", builder, ModelTransform.pivot(0.0F, 24.0F, 0.0F));
        return TexturedModelData.of(modelData, 64, 32);
    }

    @Override
    public void setAngles(MutandKurtEntity entity, float limbSwing, float limbSwingAmount, float ageInTicks, float netHeadYaw, float headPitch) {
        // No custom animation for this placeholder model
    }

    @Override
    public void render(net.minecraft.client.render.VertexConsumer vertexConsumer, net.minecraft.client.util.math.MatrixStack matrices, int light, int overlay, float red, float green, float blue, float alpha) {
        root.render(matrices, vertexConsumer, light, overlay, red, green, blue, alpha);
    }
}