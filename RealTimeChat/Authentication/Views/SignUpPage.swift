//
//  SignUpPage.swift
//  RealTimeChat
//
//  Created by Samuel Akinniranye on 12/21/25.
//

import SwiftUI

struct SignUpPage: View {
    @StateObject private var signUpViewModel = SignUpViewModel()

    var body: some View {
        NavigationStack {
            VStack(spacing: 30){
                SignUpHeader()
                VStack(spacing: 15) { // Vertically stacks views with 15pt spacing
                    TextField(AppStrings.SignUp.fullName, text: $signUpViewModel.fullName)
                        .modifier(AuthInputStyle())
                        .textContentType(.name)
                        .textInputAutocapitalization(.words)
                        .autocorrectionDisabled(true)
                        .disabled(signUpViewModel.isLoading)

                    TextField(AppStrings.SignIn.emailPlaceholder, text: $signUpViewModel.email)
                        .modifier(AuthInputStyle())
                        .keyboardType(.emailAddress)
                        .textInputAutocapitalization(.never)
                        .disabled(signUpViewModel.isLoading)

                    SecureField(AppStrings.SignUp.createPasswordPlaceholder, text: $signUpViewModel.password)
                        .modifier(AuthInputStyle())
                        .textContentType(.newPassword)
                        .disabled(signUpViewModel.isLoading)
                    
                    SecureField(AppStrings.SignUp.confirmPasswordPlaceholder, text: $signUpViewModel.confirmPassword)
                        .modifier(AuthInputStyle())
                        .textContentType(.newPassword)
                        .disabled(signUpViewModel.isLoading)
                    
                    if !signUpViewModel.confirmPassword.isEmpty && signUpViewModel.password != signUpViewModel.confirmPassword {
                        Text("Passwords do not match.")
                            .font(AppFont.caption2)
                            .foregroundStyle(.red)
                    }
                }
                
                Button {
                    signUpViewModel.isLoading.toggle()
                } label: {
                    ZStack {
                        if signUpViewModel.isLoading {
                            ProgressView()
                                .tint(.white)
                        } else {
                            Text(AppStrings.SignUp.SignUpButton)
                        }
                    }
                    .frame(maxWidth: .infinity, minHeight: 44)
                    .background(signUpViewModel.isFormValid ? Color.blue : Color.gray.opacity(0.4))
                    .foregroundColor(.white)
                    .cornerRadius(5)
                }
                .disabled(!signUpViewModel.isFormValid)
                .padding(.bottom, 40)
                
                Divider()
                    .padding(.horizontal)
                HStack(spacing: 5){
                    Text(AppStrings.SignUp.existingAccountPrompt)
                        .font(AppFont.caption2)
                        .foregroundStyle(.secondary)
                    NavigationLink(destination: SignInPage()) {
                        Text(AppStrings.SignUp.logIn)
                    }
                    .font(AppFont.caption2)
                }
            }
            .padding()
        }
    }
    
}

#Preview {
    SignUpPage()
}

struct SignUpHeader: View {
    var body: some View {
        VStack(spacing: 10) {
            Text(AppStrings.SignUp.signUpTitle)
                .font(AppFont.largeTitle)
                .fontWeight(.semibold)
            Text(AppStrings.SignUp.signUpSubtitle)
                .font(AppFont.body)
                .foregroundStyle(.secondary)
        }
    }
}
