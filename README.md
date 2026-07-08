# ☕ Kng'kay Coffee Shop

A modern, user-friendly mobile application built with React Native and Expo for discovering, ordering, and tracking coffee orders. The app features secure user authentication, personalized user profiles, and a seamless shopping experience.

## 🚀 User Guide

### 1️⃣ Welcome Screen

When you first open the app, you'll see the **Welcome Screen** with:

- Beautiful coffee shop branding image
- App tagline: "Fall in Love with Coffee in Blissful Delight!"
- **"Get Started"** button to begin

**Action:** Tap the **"Get Started"** button to proceed.

- Click this link to check the video of the app in real time: [Watch the demo](https://drive.google.com/file/d/1rfaCkBSQkEw95x2BOKYQ3lT93bFZYFrp/view)

---

### 2️⃣ Authentication Screens

#### **Sign Up (New Users)**

1. Tap **"Don't have an account? Sign Up"** on the login screen
2. Fill in the registration form:
   - **Full Name** - Your complete name
   - **Email** - Your email address
   - **Password** - Create a secure password
   - **Confirm Password** - Re-enter your password
   - Check the **"I agree to terms and conditions"** checkbox
3. Tap **"Register"**
4. Wait for account creation confirmation
5. Go to your email to confirm your account or else it will not display your information, until you confirm your email and login again.

#### **Login (Existing Users)**

1. On the login screen, enter:
   - **Email** - Your registered email
   - **Password** - Your account password
   - Optionally check **"Remember me"**
2. Tap **"Login"**
3. Wait for authentication

---

### 3️⃣ Onboarding Screen

After successful registration or login, you'll see the **Onboarding Screen** displaying:

- Welcome message
- Your **full name** (as registered)
- Your **email address**
- Brief introduction to the app features

**Action:** Tap **"Continue to Home"** button to access the main app.

1. Tap the **👤 Profile** tab (rightmost icon)
2. View your profile information:
   - Avatar with initials
   - Full Name
   - Email Address
   - Account Status (Active)

```
Welcome Screen
     ↓
┌────────────────┐
│   Login/Signup │
└────────────────┘
     ↓
  Onboarding Screen (User Details)
     ↓
  Home Screen (Main App)
     ↓
  Protected Routes (Favorites, Bag, Profile, Orders)
```

### Session Management

- User authentication managed by **Supabase Auth**
- Session persists across app restarts using **AsyncStorage**
- Automatic login check on app startup
- Logout clears session and returns to welcome screen

---

## 💾 Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform and deployment tool
- **Expo Router** - File-based routing for React Native
- **Supabase** - Backend-as-a-service for authentication
- **AsyncStorage** - Local data persistence
- **React Context API** - State management for auth
- **react-native-safe-area-context** - Safe area handling
- **expo-checkbox** - Checkbox component
- **Expo Vector Icons** - Icon library

---
