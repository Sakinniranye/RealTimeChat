//
//  AuthInputStyles.swift
//  RealTimeChat
//
//  Created by Daniel Akinniranye on 12/20/25.
//

import SwiftUI

struct AuthInputStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.system(size: 15))
            .padding(10)
            .overlay(RoundedRectangle(cornerRadius: 5).stroke(Color.gray.opacity(0.2), lineWidth: 1))
            .autocorrectionDisabled(true)
    }
}
