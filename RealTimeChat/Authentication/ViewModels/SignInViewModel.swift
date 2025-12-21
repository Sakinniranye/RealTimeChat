//
//  SignInViewModel.swift
//  RealTimeChat
//
//  Created by Daniel Akinniranye on 12/20/25.
//

import Foundation

final class SignInViewModel: ObservableObject {

    // MARK: - Input
    @Published var email: String = ""
    @Published var password: String = ""
    @Published var rememberMe: Bool = false
    @Published var isLoading: Bool = false


    // MARK: - Output (derived state)
    var isFormValid: Bool {
        !email.isEmpty && !password.isEmpty
    }

    // MARK: - Actions
    func signIn() {
        guard isFormValid, !isLoading else { return }

        isLoading = true
        print("Signing in with email: \(email)")

        // Networking / auth logic will go here later
    }

}

