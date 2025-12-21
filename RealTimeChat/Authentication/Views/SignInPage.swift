//
//  SignInPage.swift
//  RealTimeChat
//
//  Created by Daniel Akinniranye on 12/20/25.
//

import SwiftUI

struct SignInPage: View {
    
    @StateObject private var signInViewModel = SignInViewModel()

    var body: some View {
        VStack(spacing: 30) {
            
            // MARK: Sign In Header
            SignInHeader()
            
            // MARK: Input Fields
            VStack(spacing: 15) {
                TextField(AppStrings.SignIn.emailPlaceholder, text: $signInViewModel.email)
                    .modifier(AuthInputStyle())
                    .keyboardType(.emailAddress)
                    .textInputAutocapitalization(.never)
                    .disabled(signInViewModel.isLoading)
                
                
                SecureField(AppStrings.SignIn.passwordPlaceholder, text: $signInViewModel.password)
                    .modifier(AuthInputStyle())
                // improves password autofill
                    .textContentType(.password)
                    .disabled(signInViewModel.isLoading)
            }
            // MARK: Remember Me & Forgot Password
            HStack(spacing: 5) {
                Toggle(isOn: $signInViewModel.rememberMe) {
                    Text(AppStrings.SignIn.rememberMe)
                        .font(AppFont.caption2)
                        .foregroundStyle(.secondary)
                }
                .toggleStyle(CheckboxToggleStyle())
                .disabled(signInViewModel.isLoading)

                Spacer()
                Button(AppStrings.SignIn.forgotPassword) {
                    
                }
                .font(AppFont.caption2)
                
            }
            
            // MARK: Sign In Button
            Button {
                signInViewModel.isLoading.toggle()
                // signInViewModel.signIn()
            } label: {
                ZStack {
                    if signInViewModel.isLoading {
                        ProgressView()
                            .tint(.white)
                    } else {
                        Text(AppStrings.SignIn.logInButton)
                    }
                }
                .frame(maxWidth: .infinity, minHeight: 44)
                .background(signInViewModel.isFormValid ? Color.blue : Color.gray.opacity(0.4))
                .foregroundColor(.white)
                .cornerRadius(5)
            }
            .disabled(!signInViewModel.isFormValid)
            
            .padding(.bottom, 40)
            
            Divider()
                .padding(.horizontal)
            // MARK: Sign Up Footer
            HStack(spacing: 5) {
                Text(AppStrings.SignIn.dontHaveAccount)
                    .font(AppFont.caption2)
                    .foregroundStyle(.secondary)
                Button(AppStrings.SignIn.signUp) {
                    
                }
                .font(AppFont.caption2)
            }
        }
        .padding()
        
    }

}

#Preview {
    SignInPage()
}

struct SignInHeader: View {
    var body: some View {
        VStack(spacing: 10) {
            Text(AppStrings.SignIn.loginTitle)
                .font(AppFont.largeTitle)
                .fontWeight(.semibold)
            Text(AppStrings.SignIn.loginSubtitle)
                .font(AppFont.body)
                .foregroundStyle(.secondary)
        }
    }
}
