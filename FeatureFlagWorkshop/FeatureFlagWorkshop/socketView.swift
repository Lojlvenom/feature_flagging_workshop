//
//  socketView.swift
//  FeatureFlagWorkshop
//
//  Created by Joao Lucas Camilo on 13/12/23.
//

import SwiftUI
import SocketIO

struct socketView: View {
    @ObservedObject var websocket = Service()
    
    var body: some View {
        NavigationView {
            ZStack {
                Color.yellow.ignoresSafeArea().opacity(websocket.features.background ? 1 : 0)
                
                VStack {
                    if websocket.features.homeImage {
                        Image(systemName: "sun.max")
                            .resizable()
                            .frame(width: 100.0, height: 100.0)
                            .padding(10)
                            .tint(.black)
                        Text("Here comes the SUN")
                        
                        
                    }
                    
                    if websocket.features.Form {
                        Form {
                            Text("Hello, world!")
                            Text("Hello, world!")
                            Text("Hello, world!")
                        }
                    }
                    
                    
                    
                }
                if websocket.features.navigationButton {
                    NavigationLink {
                        Text("This is Detail View")
                    } label: {
                        Text("Detail")
                    }
                }
            }
        }
        
    }
    
}

final class Service: ObservableObject {
    @Published var features: Features = .init(background: false, homeImage: false, Form: false, navigationButton: false)
    
    private var manager = SocketManager(socketURL: URL(string: "ws://localhost:3000")!, config: [.log(true), .compress])
    
    init() {
        let socket = manager.defaultSocket
        socket.on(clientEvent: .connect) {_, _ in
            //                    socket.emit("features", "hello from iphone")
        }
        
        socket.on("featureFlags") { data, ack in
            let message = data[0] as? String
            print(message!)
            if message == "home_image_enable" {
                self.features.homeImage = true
                print(self.features)
            }
            if message == "home_image_disable" {
                self.features.homeImage = false
                print(self.features)
            }
            
            if message == "backgroun_enable" {
                self.features.background = true
                print(self.features)
            }
            if message == "backgroun_disable" {
                self.features.background = false
                print(self.features)
            }
            
            if message == "form_enable" {
                self.features.Form = true
                print(self.features)
            }
            if message == "form_disable" {
                self.features.Form = false
                print(self.features)
            }
            
            if message == "navigation_enable" {
                self.features.navigationButton = true
                print(self.features)
            }
            if message == "navigation_disable" {
                self.features.navigationButton = false
                print(self.features)
            }
        }
        
        
        socket.connect()
    }
}
#Preview {
    socketView()
}

struct Features {
    var background: Bool
    var homeImage: Bool
    var Form: Bool
    var navigationButton: Bool
}
