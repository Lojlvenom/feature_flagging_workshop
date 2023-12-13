//
//  ContentView.swift
//  FeatureFlagWorkshop
//
//  Created by Joao Lucas Camilo on 13/12/23.
//

import SwiftUI

struct ContentView: View {
    var featureManager = FeaturesManager.shared
    var body: some View {
        VStack {
            if featureManager.currentFeatures.FeatureRed == true {
                Button("Press Me") {
                    print("Button pressed!")
                }
                .padding()
                .background(.red)
                .clipShape(Capsule())
                .foregroundColor(.white)
            }
            
            if featureManager.currentFeatures.FeatureGreen {
                Button("Press Me") {
                    print("Button pressed!")
                }
                .padding()
                .background(.green)
                .clipShape(Capsule())
                .foregroundColor(.white)
                
            }
            
             if featureManager.currentFeatures.FeatureBlue {
                Button("Press Me") {
                    print("Button pressed!")
                }
                .padding()
                .background(.blue)
                .clipShape(Capsule())
                .foregroundColor(.white)
            }
            
            else if featureManager.currentFeatures.FeatureBlue == false &&  featureManager.currentFeatures.FeatureRed == false &&  featureManager.currentFeatures.FeatureGreen == false {
                Text("No features Here")
            }

        }
        .padding()
        .onAppear {
            self.featureManager.getCurrentFeatures()
        }
    }
        
}

#Preview {
    ContentView()
}
