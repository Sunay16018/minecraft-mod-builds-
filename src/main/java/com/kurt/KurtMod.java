package com.kurt;

import net.fabricmc.api.ModInitializer;
import com.kurt.registry.ModEntities;
import com.kurt.registry.ModItems;

public class KurtMod implements ModInitializer {
    @Override
    public void onInitialize() {
        // Force class loading to register entities and items
        ModEntities.init();
        ModItems.init();
    }
}