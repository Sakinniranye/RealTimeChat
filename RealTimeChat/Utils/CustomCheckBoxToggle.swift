//
//  CustomCheckBoxToggle.swift
//  RealTimeChat
//
//  Created by Daniel Akinniranye on 12/20/25.

import SwiftUI

struct CheckboxToggleStyle: ToggleStyle {
    var isReversed = false
    func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: 5) {
            Button {
                configuration.isOn.toggle()
            } label: {
                Image(systemName: configuration.isOn ? "checkmark.square" : "square")
                    .foregroundColor(configuration.isOn ? .blue : .primary)
            }
            .padding(5)
            .font(.title3)
            .accentColor(Color(UIColor.label))
            if isReversed {
                configuration.label
            }
            
            if !isReversed {
                configuration.label
            }
            
        }
    }
}
