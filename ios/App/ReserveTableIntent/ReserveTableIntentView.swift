//
//  ReserveTableIntentView.swift
//  App
//
//  Created by Dariusz Zabrzeński on 08/05/2023.
//

import Foundation
import SwiftUI

struct Table:Identifiable {
    var id: Int
    var name: String
    init(_ id: Int, _ name: String) {
        self.id = id
        self.name = name
    }
}

struct ReserveTableIntentView: View {
    var tables: [Table] = [
        Table(1, "For 2"),
        Table(2, "Family table"),
        Table(3, "Outdoor table")
    ]
    var body: some View {
        
        if #available(iOS 16.2, *) {
            VStack{
                Text("List of available tables")
                HStack {
                    ForEach(tables) { t in
                        HStack {
                            Spacer()
                            Link(destination: URL(string: "intentsexample://open-modal/\(t.id)")!){
                                Text(t.name)
                            }
                            Spacer()
                        }
                        .frame(minWidth: 40, minHeight: 40)
                        .background(.blue)
                        
                        .clipShape(Capsule())
                    }
                }
            }
        }
    }
}
