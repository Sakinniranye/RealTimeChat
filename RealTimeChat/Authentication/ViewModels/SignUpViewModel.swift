//
//  SignUpViewModel.swift
//  RealTimeChat
//
//  Created by Samuel Akinniranye on 12/21/25.
//

import Foundation

final class SignUpViewModel: ObservableObject { // ViewModel that notifies SwiftUI when state changes

    // MARK: - Input
    @Published var fullName: String = ""
    @Published var email: String = ""
    @Published var password: String = ""
    @Published var confirmPassword: String = ""
    @Published var isLoading: Bool = false

    var doPasswordsMatch: Bool {
        !password.isEmpty && password == confirmPassword
    }

    // MARK: - Output (derived state)
    var isFormValid: Bool {
        !fullName.isEmpty &&
        !email.isEmpty &&
        !password.isEmpty &&
        !confirmPassword.isEmpty &&
        doPasswordsMatch
    }

    // MARK: - Actions
    func signUp() {
        guard isFormValid, !isLoading else { return }

        isLoading = true
        print("Signing up with email: \(email)")
    }

}
