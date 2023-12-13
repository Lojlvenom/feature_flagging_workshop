//
//  FeatureFlagWorkshopApp.swift
//  FeatureFlagWorkshop
//
//  Created by Joao Lucas Camilo on 13/12/23.
//

import SwiftUI

@main
struct FeatureFlagWorkshopApp: App {
    let featureManager =  FeaturesManager.shared
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear{
                    print("on appear 1")
                    featureManager.getCurrentFeatures()
                }
        }
    }
}
