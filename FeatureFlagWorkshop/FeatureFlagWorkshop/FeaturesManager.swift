//
//  FeaturesManager.swift
//  FeatureFlagWorkshop
//
//  Created by Joao Lucas Camilo on 13/12/23.
//

import Foundation
import SwiftUI

struct FeatureFlags: Codable {
    let FeatureRed: Bool
    let FeatureGreen: Bool
    let FeatureBlue: Bool
}

final class FeaturesManager {
    static let shared = FeaturesManager()
    var featuresUrl:String = "http://0.0.0.0:3000/api/v4"
    var currentFeatures: FeatureFlags = .init(FeatureRed: false, FeatureGreen: false, FeatureBlue: false)
    
    init() {
        getCurrentFeatures()
    }
    
    func getCurrentFeatures() {
        print("fetching")
        guard let url = URL(string: self.featuresUrl) else {
            print("wrong url")
            return }

        URLSession.shared.dataTask(with: url) { data, response, error in
            guard let data = data else { return }
            do {
                let features = try JSONDecoder().decode(FeatureFlags.self, from: data)
                DispatchQueue.main.async {
                    print(features)
                    self.currentFeatures = features
                    print(self.currentFeatures)
                }
            } catch {
                print(error.localizedDescription)
            }
        }.resume()
    }
}


#Preview {
    ContentView()
}
